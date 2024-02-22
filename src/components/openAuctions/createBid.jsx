import React, { useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateBidMutation,
  useEditEventMutation,
  useUpdateVehicleMutation,
  useUserbyIdNoQuery,
} from "../../utils/graphql";
import Swal from "sweetalert2";


const VehicleDetails = (props) => {
  // -------------------------------------------
  const initialState = {
    vehicleDetails: props,
    bidAmount: props?.liveVehicle?.startBidAmount,
    vehicleId: props?.liveVehicle?.id || null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_VEHICLE_DETAILS":
        return { ...state, vehicleDetails: action.payload };
      case "SET_BID_AMOUNT":
        return { ...state, bidAmount: action.payload };
      case "UPDATE_BID_AMOUNT":
        return { ...state, bidAmount: state.bidAmount + action.payload };
      case "SET_VEHICLE_ID":
        return { ...state, vehicleId: action.payload };
      default:
        return state;
    }
  };


  const [state, dispatch] = useReducer(reducer, initialState);
  const { vehicleDetails, bidAmount } = state;

  useEffect(() => {
    dispatch({ type: "SET_VEHICLE_DETAILS", payload: props });

    if (state.vehicleId !== props?.liveVehicle?.id) {
      dispatch({ type: "SET_VEHICLE_ID", payload: props?.liveVehicle?.id });
      dispatch({
        type: "SET_BID_AMOUNT",
        payload: props?.liveVehicle?.startBidAmount,
      });
    }
    if (bidAmount < props?.liveVehicle?.currentBidAmount) {
      dispatch({
        type: "SET_BID_AMOUNT",
        payload: props?.liveVehicle?.currentBidAmount,
      });
      setValue("amount", bidAmount);
    }
  }, [props, bidAmount, state.vehicleId]);

  useEffect(() => {
    setValue("amount", bidAmount);
  }, [bidAmount]);
  // ...........................................................

  const [userIdNo, setUserId] = useState();
  const [startPrice, setStartPrice] = useState(
    props?.liveVehicle?.startBidAmount
  );

  const { data, refetch } = useUserbyIdNoQuery({
    variables: { where: { tempToken: +userIdNo } },
  });
  const [pauseEvent] = useEditEventMutation({
    variables: { where: { id: vehicleDetails?.liveVehicle?.event?.id } },
  });
  const [editVehicle] = useUpdateVehicleMutation({
    variables: { where: { id: vehicleDetails?.liveVehicle?.id } },
  });


  const incrementAmounts = [
    {
      id: 1,
      label: "1,000",
      value: 1000,
    },
    {
      id: 2,
      label: "2,000",
      value: 2000,
    },
    {
      id: 3,
      label: "5,000",
      value: 5000,
    },
    {
      id: 4,
      label: "10,000",
      value: 10000,
    },
    {
      id: 5,
      label: "25,000",
      value: 25000,
    },
  ];

  const [bidVehicle] = useCreateBidMutation();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (onSubmitData) => {
   


 

    const { token, amount } = onSubmitData;

    setUserId(token);

    if (data?.user?.id) {
      // const result=({
      //     variables: {
      //       data: {
      //         bidVehicle: { connect: { id: vehicleDetails?.liveVehicle?.id } },
      //         user: { connect: { id: data?.user?.id } },

      //         amount: +amount,
      //       },
      //     },
      //   })
      const result = bidVehicle({
        variables: {
          data: {
            bidVehicle: { connect: { id: vehicleDetails?.liveVehicle?.id } },
            user: { connect: { id: data?.user?.id } },
  
            amount: +amount,
          },
        },
      })
        .then((result) => {
          // Additional actions after successful bid submission

          Swal.fire({
            title: `Amount ${result?.data?.createBid?.amount} successfully Added`,
            icon: "success",
          });
          setUserId(0);
        })
        .catch((error) => {
          console.error(error, "error");

          Swal.fire({
            title: ` ${error}`,
            icon: "error",
          });
          // Handle any errors that occur during bid submission
          setUserId(0);
        });
      if (!result) {
        alert("Please check token number");
      }
    }
  };

  const handleEvent = async () => {
    const response = await Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });
    if (response.isConfirmed) {
      pauseEvent({ variables: { data: { status: "pause" } } }).then(
        (result) => {
          Swal.fire({
            title: `Event Paused Successfully`,
            icon: "success",
          });
        }
      );
    }
  };
  const handleStartPrice = async () => {
    const response = await Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });
    if (response.isConfirmed) {
      editVehicle({ variables: { data: { startBidAmount: +startPrice } } })
        .then((result) => {
          Swal.fire({
            title: `Start Price Updated Successfully`,
            icon: "success",
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error,
            icon: "success",
          });
        });
    }
  };
  const handleBidAmount = (price) => {
    dispatch({ type: "UPDATE_BID_AMOUNT", payload: price });
  };
  const handlePending = async () => {
    const response = await Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });
    if (response.isConfirmed) {
      editVehicle({ variables: { data: { bidStatus: "pending" } } })
        .then((result) => {
          Swal.fire({
            title: ` Current Status Pending`,
            icon: "success",
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error,
            icon: "success",
          });
        });
    }
  };

  const handleApproved = async () => {
    const response = await Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });
    if (response.isConfirmed) {
      editVehicle({ variables: { data: { bidStatus: "approved" } } })
        .then((result) => {
          Swal.fire({
            title: `Vehicle current Status Approved`,
            icon: "success",
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error,
            icon: "success",
          });
        });
    }
  };
  const handleFullfilled = async () => {
    const response = await Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });
    if (response.isConfirmed) {
      editVehicle({ variables: { data: { bidStatus: "fulfilled" } } })
        .then((result) => {
          Swal.fire({
            title: `Vehicle current Status Fullfilled`,
            icon: "success",
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error,
            icon: "success",
          });
        });
    }
  };
  const handleDeclined = async () => {
    const response = await Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });
    if (response.isConfirmed) {
      editVehicle({ variables: { data: { bidStatus: "declined" } } })
        .then((result) => {
          Swal.fire({
            title: `Vehicle current Status Declined`,
            icon: "success",
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error,
            icon: "success",
          });
        });
    }
  };

  return (
    <div className="flex  justify-around  border-2 shadow-md p-2">
      <div className="border-2 shadow-md flex justify-center align-middle p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-5 p-2  shadow-md">
            <div className="space-x-5 flex text-center flex-col ">
              <label className="pl-5 font-bold">
                Lot Number :{" "}
                <span className="text-red-500">
                  {" "}
                  {vehicleDetails?.liveVehicle?.vehicleIndexNo}
                </span>
              </label>
            </div>

            <div className=" flex flex-col">
              <label className="">Amount</label>
              <div>
                <input
                  type="number"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-72"
                  {...register("amount", { required: true })}
                />

                {errors.amount && <p>Amount is required</p>}
              </div>
            </div>
            <div className=" flex flex-col ">
              <label className="">Token Number</label>
              <input
               
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-72"
                {...register("token", { required: true })}
              />
              {errors.token && <p className="text-red-500">Token required</p>}
            </div>
            <div className=" text-center my-5">
              <button type="submit" className="btn bg-orange-500 hover:bg-red-500">
                {" "}
                Submit
              </button>
            </div>
          </div>
        </form>
        <div>
          <div className="m-2 space-x-2 w-full">
            {incrementAmounts?.map((amount) => (
              <button
                className="btn btn-outline w-fit text-lg"
                onClick={(e) =>
                  setValue(
                    "amount",
                    Number(getValues("amount")) + Number(amount?.value)
                  )
                }
              >
                +{amount?.value}
              </button>
            ))}
          </div>
          <div className="m-2 space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                onClick={(e) =>
                  setValue(
                    "amount",
                    Number(getValues("amount")) +
                      Number(
                        (i + 1) * vehicleDetails?.liveVehicle?.quoteIncreament
                      )
                  )
                }
                className="btn text-lg bg-red-500"
                key={i}
                value={(i + 1) * vehicleDetails?.liveVehicle?.quoteIncreament}
              >
                {Number(getValues("amount")) +
                  Number(
                    (i + 1) * vehicleDetails?.liveVehicle?.quoteIncreament
                  )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="shadow-md p-2">
        <div className="flex w-44 flex-col space-y-5">
          <div>
            <label>Start Price</label>
            <input
              className="border-4 w-full"
              defaultValue={startPrice}
              onChange={(e) => setStartPrice(e.target.value)}
            ></input>
            <button
              className="btn btn-accent mt-2"
              onClick={() => handleStartPrice()}
            >
              Change Start Price
            </button>
          </div>
          <a
            className="btn btn-secondary"
            href={`/edit-vehicle/${vehicleDetails?.liveVehicle?.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vehicle Details
          </a>
          <button className="btn btn-info" onClick={() => handleEvent()}>
            Pause Event
          </button>
          <a
            className="btn bg-cyan-700"
            href={`/projecter-view/${vehicleDetails?.liveVehicle?.event.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Projecter View
          </a>
        </div>
      </div>
      <div className="flex flex-col shadow-md p-2 space-y-5">
        <label>
          Current Status:{" "}
          <p className="font-bold">{vehicleDetails?.liveVehicle?.bidStatus}</p>
        </label>
        {vehicleDetails?.liveVehicle?.bidStatus !== "pending" && (
          <button className="btn btn-success" onClick={() => handlePending()}>
            Pending
          </button>
        )}
        {vehicleDetails?.liveVehicle?.bidStatus !== "approved" && (
          <button className="btn btn-primary" onClick={() => handleApproved()}>
            Approved
          </button>
        )}
        {vehicleDetails?.liveVehicle?.bidStatus !== "fulfilled" && (
          <button
            className="btn btn-warning"
            onClick={() => handleFullfilled()}
          >
            Fullfilled
          </button>
        )}
        {vehicleDetails?.liveVehicle?.bidStatus !== "declined" && (
          <button className="btn btn-error" onClick={() => handleDeclined()}>
            Declined
          </button>
        )}
      </div>
    </div>
  );
};

export default VehicleDetails;
