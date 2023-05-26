



import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCarouselModal from "../imageCarsoul/ImageCarouselModal";
import { Tab } from "@headlessui/react";
import moment from "moment";
import {
  useOpenAuctionVehiclesQuery,
  OpenAuctionVehiclesQuery,
  QueryQueryVariables,
  useQueryQuery,
  OrderDirection,
  useSudoBidsQuery,
  SudoBidsQuery,
  useBidUserQuery,
  useEditEventMutation
} from "../../utils/graphql";
import ParticipantsList from "./participantList";
import VehicleDetails from "./createBid";
import Swal from "sweetalert2";




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LivetimeOfVehicle = () => {
   const { id } = useParams();
  const [accessToken, setAccessToken] = useState("");
  const [rInterval, setRInterval] = useState(2000);
  const [liveItem, setLiveItem] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [tick, setTick] = useState(0);
  const [serverTime, setserverTime] = useState(null);
  const [showImageCarouselModal, setShowImageCarouselModal] = useState(false);
  const [images, setImages] = useState([]);
  const [pauseEvent]=useEditEventMutation({variables:{where:{id}}})

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((tic) => tic + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { data:timeData,refetch:serverRefetch } = useQueryQuery({},{ refetchInterval: 60000 });

  // console.log('timeData',timeData.time);

  useEffect(() => {
    if (timeData && timeData?.time) {
      setTick(0);
      setserverTime(timeData?.time);
    }
  }, [timeData]);

  // console.log('serverTime',serverTime);
  const { data, isLoading,refetch } = useOpenAuctionVehiclesQuery(
    {
      variables: {
        where: {
          event: {
            id: {
              equals: id ? id.toString() : "",
            },
          },
        },
      },
    },
    {
      
      refetchInterval: 2000,
      // enabled: id !== undefined && id != ""   
    }
  );

  // console.log("openauctionwww", data);
  // let duration=data?.vehicles[0]?.event?.gapInBetweenVehicles

;

//   const { data: bidHistory} = useSudoBidsQuery({
//    variables: {
//       where: {
//         bidVehicle: {
//           id: {
//             equals:
//               liveItem
//               && liveItem.id && liveItem.id !== undefined
//                 ? liveItem.id
//                 : "",
//           },
//         },
//       },
//     },
   
// }, {
//   cacheTime: 5,
//   refetchInterval: 7500,
//   enabled:
//     liveItem != null && liveItem.id != null && liveItem.id != undefined,
// });

  // // console.log('live03',liveItem);
  // console.log('bidhis',bidHistory);

  // const bidUsername=bidHistory?.sudoBids?.name
  // console.log("bidusername",bidUsername);


  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
      
   }, 2000); 

    return () => {
      clearInterval(interval);
    };
},[refetch])


useEffect(() => {
  const interval = setInterval(() => {
   
    serverRefetch()
 }, 15000); 

  return () => {
    clearInterval(interval);
  };
},[serverRefetch])

const handleEventActivate=async()=>{
  
  const response = await Swal.fire({
    title: 'Are you sure?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel',
  });
  if (response.isConfirmed){ 
  pauseEvent({variables:{data:{status:"active"}}}).then((result)=>{
    
  console.log(result,"zzz")
})
  }
}

// useEffect(() => {
//   const interval = setInterval(() => {
  
//     bidHistory?.refetch()
    
//   }, 2000); 

//   return () => {
//     clearInterval(interval);
//   };
// },[refetch])

// useEffect(()=>{
//   const interval01=setInterval(()=>{
    
//   },2000)
//   return ()=>{
//     clearInterval(interval01)
//   }
// },[timeData])

  function compare(a, b) {
    if (a.bidStartTime < b.bidStartTime) {
      return -1;
    }
    if (a.bidStartTime > b.bidStartTime) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    if (data && data.vehicles.length > 0) {
      const live = data.vehicles.find(
        (element) => element.vehicleEventStatus == "live"
      );
      const upcomingVehicles = data.vehicles.filter(
        (element) => element.vehicleEventStatus == "upcoming"
      );
      const sortedUpcoming = upcomingVehicles.sort(compare);
      setUpcoming(sortedUpcoming);
      //   bidStartTime;
      if (live) {
        setLiveItem(live);
      } else {
        setLiveItem(null);
      }
    } else {
      setLiveItem(null);
    }
  }, [data]);

 
  // const { data:bidUser,isLoading:load } = useBidUserQuery(
  //   {
  //     variables:{
  //       where: {
  //         username:"abs9487884391"
  //     }
  //   }
  // );
  //  console.log("biduser",bidUser);


  function SecondsLeft() {
    // expiry - server + tick
    try {
      if (liveItem) {
        // console.log("this is liveitem from openauction", liveItem);

        const expiryTime = moment(liveItem.bidTimeExpire);
        const currentTime = moment(serverTime).add(tick, "seconds");
        const diff = expiryTime.diff(currentTime, "seconds");
        // console.log("differeenc", diff);
        console.log('serverTime',serverTime);
        console.log('tick',tick);
        console.log('currentTime',currentTime);
        console.log('diff',diff);
        console.log('startTime',expiryTime);
        console.log(moment.utc(diff * 1000).format("HH:mm:ss"));

        if (diff > 0) return moment.utc(diff * 1000).format("HH:mm:ss");
        else return "00:00:00";
      }
      return "00:00:00";
    } catch {
      return "00:00:00";
    }
  }

  function upcomingSecondsLeft() {
    let noUpcoming = "no upcoming left";
    try {
      if (upcoming[0]) {
        // console.log('upcoming[0]',upcoming[0]);
        let count = upcoming[0].length;
        let string = count + "";

        const startTime = moment(upcoming[0].bidStartTime);
        const currentTime = moment(serverTime).add(tick, "seconds");
        const diff = startTime.diff(currentTime, "seconds");
        console.log('serverTime',serverTime);
        console.log('tick',tick);
        console.log('currentTime',currentTime);
        console.log('diff',diff);
        console.log('startTime',startTime);
        console.log(moment.utc(diff * 1000).format("HH:mm:ss"));
        if (diff > 0) return moment.utc(diff * 1000).format("HH:mm:ss");
        else return "00:00:00";
       
      }
      return noUpcoming;
    } catch (error) {
      // console.log(error.message);

      return "00:00:00";
    }
  }

  // console.log('return form upcomingSecondsLeft()',typeof(upcomingSecondsLeft()));

  function BindVehicleImage(vehicle) {
    if (vehicle) {
      const tempImages = [];
      let count = 0;
      if (vehicle.frontImage !== "") {
        tempImages.push({
          id: 1,
          name: "Front Image",
          src: vehicle.frontImage,
          alt: "Front Image.",
        });
      }
      if (vehicle.backImage !== "") {
        tempImages.push({
          id: 2,
          name: "Back Image",
          src: vehicle.backImage,
          alt: "Back Image.",
        });
      }
      if (vehicle.leftImage !== "") {
        tempImages.push({
          id: 3,
          name: "Left Image",
          src: vehicle.leftImage,
          alt: "Left Image.",
        });
      }
      if (vehicle.rightImage !== "") {
        tempImages.push({
          id: 4,
          name: "Right Image",
          src: vehicle.rightImage,
          alt: "Right Image.",
        });
      }
      // console.log(vehicle);
      // console.log(tempImages);
      setImages(tempImages);
    } else {
      setImages([]);
    }
  }

  let [vehicleDetails] = useState({
    Specification: [],
    Equipment: [],
  });

  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    pagination: false,
  };



  return (
    <div>
  {liveItem?.event?.status!=='pause' ?  < div className="w-full ">
      {liveItem  ? (
        <div className="py-10 mx-10 ">
          {/* Page header */}
          <div className="md:flex md:items-start md:justify-between md:space-x-5">
            <div className="flex items-center space-x-5">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Open Auction
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  <span className="text-black font-semibold"> LotNo:</span> #{" "}
                  {liveItem.vehicleIndexNo}
                  
                  {console.log("live item",liveItem)}
                </p>
              </div>
              
            </div>
            <div className="bg-white px-4 py-5  sm:rounded-lg sm:px-6 border  border-gray-200 space-y-2">
                <div className="flex  justify-between">
                  <div className="flex space-x-2">
                    <h2 className="text-lg font-medium text-gray-900">
                      Start Price :
                    </h2>
                    <p className="text-2xl font-bold text-red-600">
                       {liveItem.startBidAmount.toLocaleString()}/-
                    </p>
                  </div>
             
                </div>
                
                  <div className="flex space-x-2">
                    <h2 className="text-lg font-medium text-gray-900">
                      Current Bid Amount :
                    </h2>
                    <p className="text-2xl font-bold text-red-600">
                      {liveItem.currentBidAmount.toLocaleString()}/-
                    </p>
                  </div>
                 
            
                
              </div>
            <div className="flex flex-col items-center mt-4 sm:mt-0">
              {CountdownTimer(SecondsLeft())}
            </div>
          </div>

         
          
            {/* <section className="space-y-2 flex w-full "> */}
            <div className="flex space-y-2 border-2 border-r-8  ">
           
              {/* <div className="text-lg font-semibold">Live Bidding</div> */}

              {/* Current Bid Amount */}
              
              <div className="w-1/2 " >
                <Tab.Group
                  as="div"
                  className=""
                >
                  <div className="w-full  mx-auto sm:block">
                    <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                      {liveItem?.frontImage && (
                        <div
                          className="flex-none min-w-full relative p-6 hover:cursor-pointer"
                          onClick={() => {
                            BindVehicleImage(liveItem);
                            setShowImageCarouselModal(true);
                          }}
                        >
                          <img
                            src={liveItem.frontImage}
                            alt="i1"
                            className="w-full h-full object-center object-cover sm:rounded-lg"
                            width={1000}
                            height={600}
                          />
                        </div>
                      )}
                    </Tab.Panels>
                  </div>
                </Tab.Group>
             
              </div>
                  {/* Vehicle Description list*/}
                  {/* <div className="  px-2 py-1 rounded sm:px-0">
                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-xl p-1">
                    {Object.keys(vehicleDetails).map((detail) => (
                      <Tab
                        key={detail}
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-2.5 text-lg font-bold leading-5",
                            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                            selected
                              ? "bg-gray-700 text-white shadow"
                              : "text-gray-900 hover:bg-gray-200"
                          )
                        }
                      >
                        {detail}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-2 border border-gray-200 rounded">
                    <Tab.Panel
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      <div className="">
                        <dl className="space-y-4">
                          {liveItem.registrationNumber && (
                            <div className="sm:col-span-1 flex space-x-2">
                              <div>
                                <dt className="text-sm font-medium text-gray-500">
                                  Reg No.
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                  {liveItem.registrationNumber}
                                </dd>
                              </div>
                            </div>
                          )}

                          {liveItem.make && (
                            <div className="sm:col-span-1 flex space-x-2">
                              <div>
                                <dt className="text-sm font-medium text-gray-500">
                                  Make
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                  {liveItem.make}
                                </dd>
                              </div>
                            </div>
                          )}

                          <div className="sm:col-span-1 flex space-x-2">
                            <div>
                              <dt className="text-sm font-medium text-gray-500">
                                Model
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900">
                                {liveItem.model}
                              </dd>
                            </div>
                          </div>

                          {liveItem.yearOfManufacture && (
                            <div className="sm:col-span-1 flex space-x-2">
                              <div>
                                <dt className="text-sm font-medium text-gray-500">
                                  Year of Manufactor
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                  {liveItem.yearOfManufacture}
                                </dd>
                              </div>
                            </div>
                          )}

                          {liveItem.kmReading && (
                            <div className="sm:col-span-1 flex space-x-2">
                              <div>
                                <dt className="text-sm font-medium text-gray-500">
                                  Odometer (kms)
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                  {liveItem.kmReading}
                                </dd>
                              </div>
                            </div>
                          )}

                          {liveItem.ownership && (
                            <div className="sm:col-span-1 flex space-x-2">
                              <div>
                                <dt className="text-sm font-medium text-gray-500">
                                  Ownership
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                  {liveItem.ownership}
                                </dd>
                              </div>
                            </div>
                          )}

                          <div className="sm:col-span-1 flex space-x-2">
                            <div>
                              <dt className="text-sm font-medium text-gray-500">
                                RC Book
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900">
                                {liveItem.rcStatus}
                              </dd>
                            </div>
                          </div>

                          {liveItem.fuel && (
                            <div className="sm:col-span-1 flex space-x-2">
                              <div>
                                <dt className="text-sm font-medium text-gray-500">
                                  Fuel Type
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                  {liveItem.fuel}
                                </dd>
                              </div>
                            </div>
                          )}
                        </dl>
                      </div>
                    </Tab.Panel>

                    <Tab.Panel
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      Equipment Tab
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>  */}
<div className=" w-1/2 border-2">
             {console.log(liveItem,"live")}
             <div>
                <h1 className="text-center font-bold text-2xl underline">Vehicle Details Of {liveItem?.make} </h1>
                </div>
         
                    <div className="flex   justify-around mt-5  ">
                      <div className=" w-1/2 flex space-y-5 flex-col text-center ">
                        <div className="flex flex-col">
                        <label>Registration Number</label>
                        <label  className="font-bold">{liveItem?.registrationNumber}</label>
                        </div>  
                        <div className=" flex flex-col">
                        <label>Fuel</label>
                        <label  className="font-bold">{liveItem?.fuel}</label>
                        </div>
                        
                        <div className=" flex flex-col">
                        <label>Year of Manufacture</label>
                        <label  className="font-bold">{liveItem?.yearOfManufacture}</label>
                        </div>
                        <div className=" flex flex-col">
                        <label>RC Status</label>
                        <label  className="font-bold">{liveItem?.rcStatus}</label>
                        </div>
                        
                        <div className=" flex flex-col">
                        <label>Insurance Status</label>
                        <label  className="font-bold">{liveItem?.insuranceStatus}</label>
                        </div>
                        
                        <div className=" flex flex-col">
                        <label>Vehicle Condition</label>
                        <label  className="font-bold">{liveItem?.vehicleCondition}</label>
                        </div>
                        </div> 

                        <div className=" w-1/2 flex space-y-5 text-center flex-col">
                        <div className="flex flex-col">
                        <label>Model</label>
                        <label  className="font-bold">{liveItem?.model}</label>
                        </div>  
                        <div className=" flex flex-col">
                        <label>Varient</label>
                        <label className="font-bold">{liveItem?.varient}</label>
                        </div>
                        <div className=" flex flex-col">
                        <label>Ownership</label>
                        <label className="font-bold">{liveItem?.ownership}</label>
                        </div>
                        <div className=" flex flex-col">
                        <label>KM Reading</label>
                        <label className="font-bold">{liveItem?.kmReading.toLocaleString()}</label>
                        </div>
                        <div className=" flex flex-col">
                        <label>City</label>
                        <label className="font-bold">{liveItem?.city}</label>
                        </div>
                        <div className=" flex flex-col">
                        <label>Location</label>
                        <label className="font-bold">{liveItem?.veicleLocation}</label>
                        </div>
                        </div> 

                     
                </div>
             </div>
            </div>
            

           
            {/* </section> */}
          </div>
      
      ) : (
        counterLeftUpcoming(upcomingSecondsLeft())
      )}

      <ImageCarouselModal
        color="blue"
        open={showImageCarouselModal}
        close={() => setShowImageCarouselModal(false)}
        images={images}
      />

   
    </div>
: 
<div className="h-96  text-center   space-y-20 mt-10">
<h1 className="  align-middle text-red-500">"This Event Is Not Active"</h1>
<button className="btn btn-info" onClick={()=>handleEventActivate()}>Activate Event</button>
</div>
}
    </div>
  );

}

export default LivetimeOfVehicle;


function counterLeftUpcoming(hhmmss) {
  // console.log("**001", typeof hhmmss);
  if (hhmmss === "no upcoming left") {
    return (
      <div
        className="flex justify-center items-center pl-80 font-extrabold  animate-pulse text-black-600 sm:text-xl md:text-2xl lg:text-3xl "
        style={{ minHeight: "80vh" }}
      >
        NO MORE UPCOMING VECHILES{" "}
      </div>
    );
  } else {
    const timeArray = hhmmss.split(":");

    return (
      <div
        className=" pl-96  flex justify-center items-center "
        style={{ minHeight: "80vh" }}
      >
        <div className="w-72 text-blue-700">
          <div className="text-center text-3xl text-black font-extrabold uppercase">
            Next vehicle will be in
          </div>
          <div className="text-2xl text-center flex w-full items-center justify-center">
            <div className="w-24 mx-2 p-2">
              <div className="font-semibold text-7xl leading-none">
                {timeArray[0]}
              </div>
              <div className="mt-2 font-mono uppercase text-sm leading-none">
                Hours
              </div>
            </div>
            <div className="text-8xl pb-10">:</div>
            <div className="w-24 mx-2 p-2">
              <div className="font-mono text-7xl leading-none">
                {timeArray[1]}
              </div>
              <div className="mt-2 font-mono uppercase text-sm leading-none">
                Minutes
              </div>
            </div>
            <div className="text-8xl pb-10">:</div>
            <div className="w-24 mx-2 p-2">
              <div className="font-mono text-7xl leading-none">
                {timeArray[2]}
              </div>
              <div className="mt-2 font-mono uppercase text-sm leading-none">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




// function BidHistory(data, liveItem) {
//   // console.log("zdata", data, "ydata", liveItem);
//    // console.log('serverTime',serverTime);
   
//   return (
//     <div>
//       <div className="flow-root bg-white px-4 py-5 sm:rounded-lg sm:px-6 border border-gray-200">
//         <div className="text-sm font-semibold mb-4">Bid History</div>
//         {data && data.sudoBids && data.sudoBids.length > 0 ? (
//           <ul role="list" className="divide-y divide-gray-200">
//             {data.sudoBids.map((bid, index) => (
//               <li key={index} className="py-2">
//               <div className="flex items-center space-x-4">
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm font-medium text-gray-900 truncate">
//                    {bid.name}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-700 truncate">
//                     {"Rs." + bid.amount}
//                   </p>
//                 </div>
//               </div>
//             </li>
//             ))}
//           </ul>
//         ) : (
//           <div className="text-sm mb-4">Not Available</div>
//         )}
//       </div>
//     </div>
//   );
// }

function CountdownTimer(hhmmss) {
  const timeArray = hhmmss.split(":");

  return (
    <div className="w-72 text-indigo-500">
      <div className="text-center text-3xl font-bold ">Vehicle Live Time</div>
      <div className="text-2xl text-center flex w-full items-center justify-center">
        <div className="w-24 mx-1 p-2">
          <div className="font-bold text-7xl leading-none">{timeArray[0]}</div>
          <div className="mt-2 font-semibold uppercase text-sm leading-none">
            Hours
          </div>
        </div>
        <div className="text-6xl pb-10">:</div>
        <div className="w-24 mx-1 p-2">
          <div className="font-bold text-7xl leading-none">{timeArray[1]}</div>
          <div className="mt-2 font-semibold uppercase text-sm leading-none">
            Minutes
          </div>
        </div>
        <div className="text-6xl pb-10">:</div>
        <div className="w-24 mx-1 p-2">
          <div className="font-bold text-7xl leading-none">{timeArray[2]}</div>
          <div className="mt-2 font-semibold uppercase text-sm leading-none">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}
