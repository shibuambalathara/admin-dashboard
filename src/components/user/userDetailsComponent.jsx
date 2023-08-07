import { Input } from "@material-tailwind/react";
import Select from "react-select";
import React from "react";
import { useForm, Controller } from "react-hook-form";

import { useParams, useNavigate } from "react-router-dom";
import {
  useUserQuery,
  useSellersItemQuery,
  useEditUserMutation,
  useSelectorsQuery,
  useStatesQuery,
  useUserauthenticationQuery,
} from "../../utils/graphql";
import { ShowPopup } from "../alerts/popUps";
import AddUser from "./addUser";

const UserDetailsComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const sellers = useSellersItemQuery();
  const allStates = useStatesQuery();
  const {data:loginUser}=useUserauthenticationQuery()
  

  const selectors = useSelectorsQuery();
  const [updatedDetails, response] = useEditUserMutation({
    variables: { where: { id: id } },
  });

  const { data, loading, error } = useUserQuery({
    variables: { where: { id: id } },
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (dataOnSubmit) => {
    

    const user = {
      firstName: dataOnSubmit?.first_Name,
      lastName: dataOnSubmit?.last_Name,
      email: dataOnSubmit?.email,
      username: dataOnSubmit?.user_Name,
      mobile: dataOnSubmit?.mobile,
      businessName: dataOnSubmit?.bussiness,
      pancardNo: dataOnSubmit?.pancardNumber,
     
      // vehicleBuyingLimit:+dataOnSubmit?.buyingLimitCount,

      //    password:dataOnSubmit?.confirmPassword,
      idProofType: dataOnSubmit?.idType,
      idProofNo: dataOnSubmit?.IdNumber,
      country: dataOnSubmit?.country,
      // state: dataOnSubmit?.state,
      city: dataOnSubmit?.city,
      status: dataOnSubmit?.status,

      bannedSellers: {
        set: dataOnSubmit.bannedSellers.map((seller) => ({ id: seller.value })),
      },
      states: {
        set: dataOnSubmit.states.map((state) => ({ id: state.value })),
      },
    };
if(loginUser?.authenticatedItem?.role==='admin'){
 
 
  user['role']=dataOnSubmit?.role
}
if(loginUser?.authenticatedItem?.role==='admin'){
 
 alert("reached")
  user['state']=dataOnSubmit?.state
}
    if (dataOnSubmit.user_image && dataOnSubmit.user_image.length) {
      user["image"] = { upload: dataOnSubmit.user_image[0] };
    }
    if (dataOnSubmit.pancardImage && dataOnSubmit.pancardImage.length) {
      user["pancard"] = { upload: dataOnSubmit.pancardImage[0] };
    }
    if (dataOnSubmit.idProof && dataOnSubmit.idProof.length) {
      user["idProof"] = { upload: dataOnSubmit.idProof[0] };
    }
    if (dataOnSubmit.idBack && dataOnSubmit.idBack.length) {
      user["idProofBack"] = { upload: dataOnSubmit.idBack[0] };
    }
    if (dataOnSubmit.dealership && dataOnSubmit.dealership.length) {
      user["dealership"] = { upload: dataOnSubmit.dealership[0] };
    }

    updatedDetails({ variables: { data: user } })
      .then((res) => {
        ShowPopup(
          "Success!",
          `${dataOnSubmit?.first_Name} Updated successfully!`,
          "success",
          5000,
          true
        );
        navigate("/users");
      })
      .catch((err) => {
        ShowPopup(
          "user updation Failed!",
          `${err.message}`,
          "error",
          5000,
          true
        );
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex flex-col justify-center align-middle shadow-xl  bg-slate-300  m-10">
     <div className="py-4 bg-gray-200 rounded px-4 flex items-center shadow-xl justify-center ">
     <h2 className="text-xl py-3 leading-3 font-bold text-gray-900">  {data.user.firstName} {data.user.lastName}</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full my-5  p-2 ">
        <div className="flex flex-col  w-full space-y-5">
          <div className="flex  justify-around">
            <div className="flex flex-col  w-1/3">
              <label className=" text-left" htmlFor="">
                First Name
              </label>
              <input
                type="text "
                defaultValue={data.user.firstName}
                className="input input-bordered input-secondary w-full "
                {...register("first_Name", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.first_Name && <span>first Name is required</span>}
              </p>
            </div>
            <div className="  flex flex-col  w-1/3">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="input input-bordered input-secondary w-full "
                defaultValue={data.user.lastName}
                {...register("last_Name", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.last_Name && <span>last Name is required</span>}
              </p>
            </div>
          </div>

          <div className="flex  justify-around  ">
            <div className="flex flex-col  w-1/3">
              <label className=" text-left" htmlFor="">
                Email
              </label>
              <input
                type="email"
                defaultValue={data.user.email}
                className="input input-bordered input-secondary w-full "
                {...register("email", {})}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.email && <span> email required</span>}
              </p>
            </div>
            <div className="flex flex-col w-1/3 ">
              <label className="w-20" htmlFor="">
                user Name
              </label>
              <input
                type="text"
                defaultValue={data.user.username}
                className="input input-bordered input-secondary w-full "
                {...register("user_Name", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.user_Name && <span>User Name required</span>}
              </p>
            </div>
          </div>
          <div className="flex  justify-around  ">
            <div className="flex flex-col w-1/3 ">
              <label htmlFor="">Mobile</label>
              <input
                type="number"
                defaultValue={data.user.mobile}
                className="input input-bordered input-secondary w-full "
                {...register("mobile", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.phoneRequired && (
                  <span>phone number 10 digits required</span>
                )}
              </p>
            </div>
            <div className="flex flex-col w-1/3 ">
              <label htmlFor="">Bussiness Name</label>
              <input
                type="text"
                defaultValue={data?.user?.businessName}
                className="input input-bordered input-secondary w-full "
                {...register("bussiness", {})}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.bussiness && <span>Bussiness Name required</span>}
              </p>
            </div>
          </div>

          <div className="flex  justify-around  ">
            <div className="flex flex-col w-1/3 ">
              <label htmlFor="">Current Buying Limit </label>
              <input
                type="number"
                disabled
                defaultValue={
                  data?.user?.currentVehicleBuyingLimit?.vehicleBuyingLimit
                }
                className="input input-bordered input-secondary w-full "
                // {...register("buyingLimitCount", {

                // })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.phoneRequired && (
                  <span>phone number 10 digits required</span>
                )}
              </p>
            </div>

            <div className="flex flex-col  w-1/3">
              <label htmlFor="">Bannned Sellers</label>

              <Controller
                name="bannedSellers"
                control={control}
                defaultValue={data?.user?.bannedSellers.map((event) => ({
                  label: event.name,
                  value: event.id,
                }))}
                render={({ field }) => (
                  <Select
                    className="w-full text-black max-w-[560px] mt-2"
                    option=""
                    options={sellers?.data?.sellers.map((seller) => ({
                      label: seller.name,
                      value: seller.id,
                    }))}
                    {...field}
                    isMulti
                    getOptionValue={(option) => option.value}
                  />
                )}
              />
            </div>
          </div>

      { loginUser?.authenticatedItem?.role==='admin' &&  <div className="flex  justify-around  ">
            <div className="min-w-[300px] w-1/3">
              <label htmlFor="">Role</label>
              <select
                className="input input-bordered input-secondary w-full "
                {...register("role", { required: true })}
              >
                <option value={data.user.role}>{data.user.role}</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="seller">Seller</option>
                <option value="dealer">Dealer</option>
              </select>
              <p className="text-red-500">
                {" "}
                {errors.role && <span>Please select Role</span>}
              </p>
            </div>

            <div className="flex flex-col w-1/3 ">
              <label htmlFor="">Status</label>
              <select
                defaultValue={data.user.status}
                className="input input-bordered input-secondary w-full "
                {...register("status", {})}
              >
                <option value=""></option>
                <option value="pending">Pending</option>
                <option value="blocked">Blocked</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <p className="text-red-500">
                {" "}
                {errors.status && <span>Please select status</span>}
              </p>
            </div>
          </div>}

          <div className="flex space-x-2 justify-around">
            <div className="min-w-[300px] w-1/3">
              <label htmlFor="">ID Proof Type</label>
              <select
                defaultValue={data?.user?.idProofType}
                className="input input-bordered input-secondary w-full "
                {...register("idType", { required: true })}
              >
                <option value={data?.user?.idProofType}>
                  {data?.user?.idProofType}
                </option>
                <option value="aadhar">Aadhar</option>
                <option value="drivingLicense">Driving Licence</option>
                <option value="passport">Passport</option>
              </select>
              <p className="text-red-500">
                {" "}
                {errors.idType && <span>Please select Id proof type</span>}
              </p>
            </div>
            <div className="w-1/3">
              <label htmlFor="">ID proof Number</label>
              <input
                defaultValue={data?.user?.idProofNo}
                type="text"
                className="input input-bordered input-secondary w-full "
                {...register("IdNumber", { minLength: 8 })}
              />
              <p className="text-red-500">
                {" "}
                {errors.IdNumber && <span>Atleast 8 charators required</span>}
              </p>
            </div>
          </div>

          <div className="flex space-x-2 justify-around">
            <div className="w-1/3">
              <label htmlFor="">State</label>

              <select
                className="input input-bordered input-secondary w-full "
                {...register("state", {})}
              >
                <option value={data?.user?.state}>{data?.user?.state}</option>
                {selectors?.data?.states.map((state) => (
                  <option value={state.name} key={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/3">
              <label htmlFor="">City</label>

              <input
                defaultValue={data?.user?.city}
                className="input input-bordered input-secondary w-full "
                {...register("city", {})}
              />
              <p className="text-red-500">
                {" "}
                {errors.city && <span>Please select city</span>}
              </p>
            </div>
          </div>

          <div className="flex space-x-2 justify-around">
            <div className="w-1/3">
              <label htmlFor="">Pancard</label>
              <input
                defaultValue={data?.user?.pancardNo}
                type="text"
                className="input input-bordered input-secondary w-full "
                {...register("pancardNumber", {})}
              />
              <p className="text-red-500">
                {" "}
                {errors.IdNumber && <span>Atleast 8 charators required</span>}
              </p>
            </div>
            <div className="w-1/3">
              <label htmlFor="">Pancard Image</label>
              <Input
                type="file"
                className="p-1"
                {...register("pancardImage", {})}
              ></Input>

              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.pancard?.url}`}
                alt="no pancard_Image"
              />
            </div>
          </div>

          <div className="flex space-x-2 justify-around">
            <div className=" flex  flex-col w-1/3">
              <label htmlFor="">ID proof(front page)</label>
              <Input
                className="input   "
                type="file"
                {...register("idProof", {})}
              />

              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.idProof?.url}`}
                alt="No id proof front page"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="">ID proof(Back page)</label>
              <Input
                type="file"
                className="p-1"
                {...register("idBack", {})}
              ></Input>

              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.idProofBack?.url}`}
                alt="no id proof back side_image"
              />
            </div>
          </div>

          <div className="flex space-x-2 justify-around">
            <div className="flex w-1/3 flex-col">
              <label htmlFor="">Dealership Image</label>
              <Input className="" type="file" {...register("dealership", {})} />
              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.dealership?.url}`}
                alt=" No dealership img"
              />
            </div>
            <div className="flex  flex-col w-1/3">
              <label htmlFor="">Country</label>
              <input
                defaultValue={data?.user?.country}
                className="input input-bordered input-secondary w-full "
                {...register("country", {})}
              />
              <p className="text-red-500">
                {" "}
                {errors.country && <span>country Required</span>}
              </p>

              <div className="flex flex-col  w-full">
                <label htmlFor="">Auction Allowed states</label>

                <Controller
                  name="states"
                  control={control}
                  defaultValue={data?.user?.states.map((state) => ({
                    label: state.name,
                    value: state.id,
                  }))}
                  render={({ field }) => (
                    <Select
                      className="w-full text-black max-w-[560px] mt-2"
                      option=""
                      options={allStates?.data?.states?.map((state) => ({
                        label: state.name,
                        value: state.id,
                      }))}
                      {...field}
                      isMulti
                      getOptionValue={(option) => option.value}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center my-5">
          <button type="submit" className="btn btn-outline btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetailsComponent;
