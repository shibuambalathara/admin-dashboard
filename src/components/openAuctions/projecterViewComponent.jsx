



import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import format from 'date-fns/format'
import moment from "moment";
import {
  useOpenAuctionVehiclesQuery,
  useQueryQuery,
  useEditEventMutation
} from "../../utils/graphql";

import Swal from "sweetalert2";
import { Carousel, IconButton } from "@material-tailwind/react";





// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const LivetimeOfVehicle = () => {
   const { id } = useParams();
const[images,setimages]=useState([])
  const [liveItem, setLiveItem] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
 
  const [tick, setTick] = useState(0);
  const [serverTime, setserverTime] = useState(null);
  
  const [pauseEvent]=useEditEventMutation({variables:{where:{id}}})

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((tic) => tic + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { data:timeData,refetch:serverRefetch } = useQueryQuery({},{ refetchInterval: 60000 });


  useEffect(() => {
    if (timeData && timeData?.time) {
      setTick(0);
      setserverTime(timeData?.time);
    }
  }, [timeData]);

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
    }
  );




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
    
})
  }
}



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
        (element) => element.vehicleEventStatus === "live"
      );
      const upcomingVehicles = data.vehicles.filter(
        (element) => element.vehicleEventStatus === "upcoming"
      );
      const sortedUpcoming = upcomingVehicles.sort(compare);
      setUpcoming(sortedUpcoming);
      //   bidStartTime;
      if (live) {
        setLiveItem(live);
      setimages((live.frontImage).split(','))
   
  
      } else {
        setLiveItem(null);
      }
    } else {
      setLiveItem(null);
    }
  }, [data]);

 



  function SecondsLeft() {
    try {
      if (liveItem) {
   

        const expiryTime = moment(liveItem.bidTimeExpire);
        const currentTime = moment(serverTime).add(tick, "seconds");
        const diff = expiryTime.diff(currentTime, "seconds");

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
        let count = upcoming[0].length;
        let string = count + "";

        const startTime = moment(upcoming[0].bidStartTime);
        const currentTime = moment(serverTime).add(tick, "seconds");
        const diff = startTime.diff(currentTime, "seconds");
        if (diff > 0) return moment.utc(diff * 1000).format("HH:mm:ss");
        else return "00:00:00";
       
      }
      return noUpcoming;
    } catch (error) {

      return "00:00:00";
    }
  }





  return (
    
    <div className="w-full " >
  {liveItem?.event?.status!=='pause' ?  < div className="w-full shadow-xl    ">
      {liveItem  ? (
        <div className="py-2  bg-gray-100 ">
          {/* Page header */}
          <div className="md:flex md:items-start md:justify-between md:space-x-5 p-2 shadow-xl">
            <div className="flex items-center space-x-5">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Open Auction
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  <span className="text-black font-semibold"> LotNo:</span> #{" "}
                  {liveItem.vehicleIndexNo}
                  
                </p>
              </div>
              
            </div>
            <div className="bg-white p-5   shadow-md sm:rounded-lg sm:px-6 rounded-xl  border-gray-200 space-y-2">
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
                    <p className="text-2xl font-bold text-red-600 will-change: contents">
                      {liveItem.currentBidAmount.toLocaleString()}/-
                    </p>
                  </div>
                 
            
                
              </div>
            <div className="flex flex-col items-center  sm:mt-0">
              {CountdownTimer(SecondsLeft())}
            </div>
          </div>

         
          
         
              
            <div className="flex    ">
<div className="carousel w-full   m-2 shadow-xl rounded-xl h-[35rem]">

<Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-16 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {images.map((imgs, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-24 bg-white " : "w-20 bg-white/50 "
              }`}
              onClick={() => setActiveIndex(i)}
            >
            <img src={imgs} key={i} alt="no images"></img>
            </span>
          ))}
        </div>
        
      )}
    >
 {images.map((img, i) => (

  <img
    key={i}
    src={img}
    alt={`images ${i + 1}`}
    className="h-full w-full object-cover"
  />
   
))} 
  
    </Carousel>
</div>
               
      
     
  
           
<div className=" w-1/2  bg-white shadow-xl rounded-xl  m-2 py-5">
             <div>
                <h1 className="text-center font-bold text-2xl underline">{liveItem?.make && liveItem.make.toUpperCase()} </h1>
                </div>
         
                    <div className="flex   justify-around mt-5  bg-white">
                      <div className=" w-1/2 flex space-y-5 flex-col text-center ">
                        <div className="flex flex-col shadow-lg">
                        <label>Registration Number</label>
                        <label  className="font-bold">{liveItem?.registrationNumber}</label>
                        </div>  
                        <div className=" flex flex-col shadow-lg">
                        <label>Fuel</label>
                        <label  className="font-bold">{liveItem?.fuel}</label>
                        </div>
                        
                        <div className=" flex flex-col shadow-lg">
                        <label>Year of Manufacture</label>
                        <label  className="font-bold">{liveItem?.yearOfManufacture}</label>
                        </div>
                        <div className=" flex flex-col shadow-lg">
                        <label>RC Status</label>
                        <label  className="font-bold">{liveItem?.rcStatus}</label>
                        </div>
                        
                        <div className=" flex flex-col shadow-lg">
                        <label>Insurance Status</label>
                        <label  className="font-bold">{liveItem?.insuranceStatus}</label>
                        </div>
                        
                        <div className=" flex flex-col shadow-lg">
                        <label>Vehicle Condition</label>
                        <label  className="font-bold">{liveItem?.vehicleCondition}</label>
                        </div>
                        </div> 

                        <div className=" w-1/2 flex space-y-5 text-center flex-col">
                        <div className="flex flex-col shadow-lg">
                        <label>Model</label>
                        <label  className="font-bold">{liveItem?.model}</label>
                        </div>  
                        <div className=" flex flex-col shadow-lg">
                        <label>Varient</label>
                        <label className="font-bold">{liveItem?.varient}</label>
                        </div>
                        <div className=" flex flex-col shadow-lg">
                        <label>Ownership</label>
                        <label className="font-bold">{liveItem?.ownership}</label>
                        </div>
                        <div className=" flex flex-col shadow-lg">
                        <label>KM Reading</label>
                        <label className="font-bold">{liveItem?.kmReading.toLocaleString()}</label>
                        </div>
                        <div className=" flex flex-col shadow-lg">
                        <label>City</label>
                        <label className="font-bold">{liveItem?.city}</label>
                        </div>
                        <div className=" flex flex-col shadow-lg">
                        <label>Yard Location</label>
                        <label className="font-bold">{liveItem?.yardLocation}</label>
                        </div>
                        </div> 
                       
                     
                </div>
                <div className=" flex flex-col shadow-lg  text-center">
                        <label>Repo Date</label>
                      
                                       {liveItem?.repoDt?  <label className="font-bold">{format(new Date(liveItem?.repoDt),`dd/MM/yy, HH:mm`)}b</label>:'-'}
                        </div>
             </div>
            </div>
            

           
            {/* </section> */}
          </div>
      
      ) : (
        counterLeftUpcoming(upcomingSecondsLeft())
      )}

  

   
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






function CountdownTimer(hhmmss) {
  const timeArray = hhmmss.split(":");

  return (
    <div className="w-72 text-indigo-500">
      <div className="text-center text-2xl font-bold ">Vehicle Live Time</div>
      <div className=" text-center flex w-full items-center justify-center">
        <div className="w-24 mx-1 p-2">
          <div className="font-bold text-5xl leading-none">{timeArray[0]}</div>
          <div className="mt-2 font-semibold uppercase text-sm leading-none">
            Hours
          </div>
        </div>
        <div className="text-6xl pb-10">:</div>
        <div className="w-24 mx-1 p-2">
          <div className="font-bold text-5xl leading-none">{timeArray[1]}</div>
          <div className="mt-2 font-semibold uppercase text-sm leading-none">
            Minutes
          </div>
        </div>
        <div className="text-6xl pb-10">:</div>
        <div className="w-24 mx-1 p-2">
          <div className="font-bold text-5xl leading-none">{timeArray[2]}</div>
          <div className="mt-2 font-semibold uppercase text-sm leading-none">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
}
