import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { useForm,Controller } from "react-hook-form";
import Select from 'react-select'
import { ShowPopup } from "../alerts/popUps";

import{useSellersItemQuery,useEventTypesQuery,useLocationsQuery,useCreateEventMutation}from '../../utils/graphql'
import { useNavigate } from "react-router-dom";
import {terms} from './terms&conditions'





const AddEventComponent = () => {
 
  const navigate=useNavigate()
  const sellersItem=useSellersItemQuery()
  const eventType=useEventTypesQuery()
  const location=useLocationsQuery()
  const [addEvent,{data}]=useCreateEventMutation()
  const[category,setCategory]=useState('online')
  
  

  const { register, handleSubmit,control, watch, formState: { errors } } = useForm();
  
  const onSubmit = dataOnSubmit =>{ console.log(dataOnSubmit);

    const isoDateTime = new Date(dataOnSubmit?.startDate).toISOString();
    const endDateTime = new Date(dataOnSubmit?.endDate).toISOString();
    const bids=+dataOnSubmit?.noOfBids
    const extraTimeTriger=+dataOnSubmit?.timeTriger
    const extraTime=+dataOnSubmit?.extraTime
    const gap=+dataOnSubmit?.gap
    const live=+dataOnSubmit?.liveTime

  

    const eventData={
      // eventCategory:dataOnSubmit?.eventCategory,
      eventCategory:category,
      startDate:isoDateTime,
      endDate:endDateTime,
      noOfBids:bids,
      seller:{connect:{id:dataOnSubmit?.sellerName ||""}},
     
      eventType: {
        connect: dataOnSubmit?.eventId?.map((event) => ({id: event.value}))
      },
      location :{connect:{id:dataOnSubmit?.location ||""}},
      status:dataOnSubmit?.status,
     
      termsAndConditions:dataOnSubmit?.conditions,
      bidLock:dataOnSubmit?.lockedOrNot,
      isSpecialEvent:dataOnSubmit?.special,
      extraTimeTrigerIn:extraTimeTriger,
      extraTime:extraTime,
      vehicleLiveTimeIn:live,
      gapInBetweenVehicles:gap,
      
    }
    if (dataOnSubmit.downloadable[0] && dataOnSubmit.downloadable.length) {
      eventData["downloadableFile"] = { upload: dataOnSubmit.downloadable[0] };
    }
 addEvent({variables:{data:eventData}})
 .then(result=>{console.log("result",result)
 ShowPopup(
  "Success!",
  `Event Created Successfully! Upload Excel Now`,
  "success",
  5000,
  true
);
})
 .catch((error)=>{
  console.log("error",error)
  ShowPopup(
    "Failed!",
    `${error.message} `,
    "error",
    5000,
    true
  );
 })


  }

const handleOnClick=()=>{
  console.log(data,"return data")
  navigate(`/excel-upload/${data.createEvent.id}`)
}


  return (
    <div className="shadow-xl  bg-slate-300  m-10 p-5">
      <div className="space-y-1 "> 
        <div className="py-4 bg-gray-200 rounded px-4 flex items-center shadow-xl justify-center ">
          <h2 className="text-xl py-3 leading-3 font-bold text-gray-900">
            ADD EVENT
          </h2>
        </div>
      
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid md:grid-cols-3 gap-x-10 gap-y-10 mx-3 my-2">
              <div className="flex flex-col   "> 
                <label className="font-bold" htmlFor="">
                  Event Category
                </label>
                <div >
              
                </div>
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  placeholder="select"
                  //  {...register("eventCategory",{required:true})}
                  className="  bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double "                >
              
                  <option value="online">Online Auction </option>
                  <option value="open">Open Auction</option>
                </select>
                <p className="text-red-500"> {errors.eventCategory&& <span>Event type required</span>}</p> 

              </div>
              <div className="flex">
              <div className=" flex flex-col  space-x-px ">
                <label htmlFor="" className="font-bold">Start Date and Time</label>
                <div className="flex space-x-6 ">
               
                  <input
                    type="datetime-local"
                    className="btn btn-outline bg-white"
                 
                    {...register("startDate",{required:true})}
                  />
 <p className="text-red-500"> {errors.startDate&& <span>Start date and time required</span>}</p> 
                 
                </div>
              </div>
              <div className=" flex flex-col  space-x-px ">
                <label htmlFor="" className="font-bold">End Date and Time</label>
                <div className="flex space-x-6">
                  <input
                    type="datetime-local"
                    className="btn btn-outline bg-white"
                    placeholder="mm//dd/yy"
                    {...register("endDate",{required:true})}
                  />
               
                  
                   <p className="text-red-500"> {errors.endDate&& <span>End date and time required</span>}</p> 
                </div>
              </div>
              </div>
              <div className="flex flex-col   ">
                <label className="font-bold" htmlFor="">
                  Seller
                </label>
             
                <select
                  
                  placeholder="select"
                  {...register("sellerName",{required:true})}
                  className="w-full max-w-xl bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double "
                >
                
                  <option  value="">Select</option>
                  {sellersItem?.data?.sellers.map((seller)=>
                 (
                     <option key={seller.id} value={seller.id}>{seller.name}</option>
                 ) )}
                 
                </select>
                <p className="text-red-500"> {errors.sellerName&& <span>Seller Name required</span>}</p> 
              </div>
              <div className="flex flex-col  ">
                <label className="font-bold" htmlFor="">
                  Event Type
                </label>
              
                <Controller
  name="eventId"
  control={control}

  render={({ field }) => (
    <Select
    className="w-full max-w-xl bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double "
      options={eventType?.data?.eventTypes?.map((event) => ({
        label: event.name,
        value: event.id
      }))}
      {...field}
      isMulti
      getOptionValue={(option) => option.value}
    />
  )}
/>
               
                <p className="text-red-500"> {errors.event&& <span>Event Name required</span>}</p> 

              </div>
              <div className="flex flex-col  relative ">
                <label className="font-bold" htmlFor="">
                  Location
                </label>
              
                <select
                  
                  placeholder="select"
                  {...register("location",{required:true})}
                  className="w-full  bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double "                >
                  <option  value="">Select</option>
                   {location?.data?.locations?.map((location)=>
                 (
                     <option key={location.name} value={location.id}>{location.name}</option>
                 ))}
                </select>
                <p className="text-red-500"> {errors.location&& <span>location required</span>}</p> 

              </div>
             
             
              <div className="w-full ">
                <div>

                <label htmlFor="" className="font-bold">Number of Bids(per User)</label>
                </div>
                <input
                  type="number" defaultValue={10}
                  {...register("noOfBids",{required:true})}
                  
                  className="w-full  bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double "/>
         
                 <p className="text-red-500"> {errors.noOfBids&& <span>No of bids Required</span>}</p> 
              </div>
              <div className="flex flex-col  relative ">
                <label className="font-bold" htmlFor="">
                 Auction status
                </label>
               
                <select
                  
                  placeholder="select"
                  {...register("status",{})}
                  className="w-full max-w-xl bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double "                >
        
                  <option value="active">active</option>
                  <option value="pending">pending </option>
                  <option value="blocked">blocked</option>
                  <option value="inactive">inactive</option>
                  <option value="stop">stop</option>
                </select>
              </div>
          
             
               <div className="flex flex-col items-start  ">
                <label className="font-bold">Downloadable File</label>
                <input type="file"
                  {...register("downloadable",{})}
                  className="w-full max-w-xl bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double "                >
                  
                 </input>
              <p className="text-red-500"> {errors.downloadable&& <span>Downloadable file required</span>}</p> 
              </div>
             
             
             
       
          { category ==='online'  &&   <div className="flex flex-col  relative ">
                <label className="font-bold" htmlFor="">
                Bids Amount Smaller than the Winning bid amount is
                </label>
              
                <select
           
                  placeholder="select"
                  {...register("lockedOrNot",{})}
                  className="w-full max-w-xl bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double "                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="locked">locked </option>
                  <option value="unlocked">unlocked</option>
                </select>
              </div>}
              <div className="w-full max-w-xl">
                <label htmlFor="" className="font-bold">Extra Time Trigger in Minutes</label>
                <input
                  type="number" defaultValue={2}
                  {...register("timeTriger",{})}
                  className="w-full  bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double "/>
         
              </div>
              <div className="w-full max-w-xl">
                <div>

                <label htmlFor="" className="font-bold">Extra Time in minutes</label>
                </div>
                <input
                  type="number" defaultValue={2}
                  {...register("extraTime",{})}
                  className="w-full bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double " />
              </div>
           
              {/* <div className="flex space-x-6">
                <input type="checkbox"   {...register("special",{})}
                 className="checkbox checkbox-success hover:bg-white" />
                <label htmlFor="">Is this a special event ?</label>
              </div> */}
             
           
            {category==='open' &&  <div className="w-full max-w-xl">
                <label htmlFor="" className="font-bold">
                  Open Auction Vehicle Live Time in minutes
                </label>
                <input
                  type="number" defaultValue={3}
                  {...register("liveTime",{})}
                  className="w-full bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double " />
           
              </div>}
              <div className="w-full max-w-xl">
                <label htmlFor="" className="font-bold">
            {category==='open'? 'Open Auction Gap in between vehicles in seconds' :'Online End Time Increase in Minuts'}        
                </label>
                <input
                  type="number" defaultValue={2}
                  {...register("gap",{})}
                  className="w-full bg-white  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double " />
        
              </div>


           

              <div className=" flex space-x-10">
              </div>
            </div>
            <div className="flex flex-col ">
                <label htmlFor="" className="font-bold">Terms & Condition</label>
               <textarea
               type="text"
               defaultValue={terms.data} 
                 {...register("conditions",{})}
                 className=" m-2 bg-white h-40  border border-black rounded-md  p-2  shadow text-gray-700  hover:outline-double " />
                 </div>
            <div  className="text-center m-5 ">

         {!data  && <button  className="btn btn-success"> Save </button>}
            </div>
                
               
          </form>
          {data && <button onClick={handleOnClick} className="btn w-fit btn-secondary"> Upload Excel file </button> }
      
      </div>
    </div>
  );
};

export default AddEventComponent;

