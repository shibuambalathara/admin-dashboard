import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";


import{useSellersItemQuery,useEventTypesQuery,useLocationsQuery,useCreateEventMutation}from '../../utils/graphql'


const AddEventComponent = () => {
  const{data}=useSellersItemQuery()
  const eventType=useEventTypesQuery()
  const location=useLocationsQuery()
  const [addEvent]=useCreateEventMutation()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = dataOnSubmit =>{ console.log(dataOnSubmit);

    const isoDateTime = new Date(dataOnSubmit?.startDate).toISOString();
    const endDateTime = new Date(dataOnSubmit?.endDate).toISOString();
    const bids=+dataOnSubmit?.noOfBids
    const extraTimeTriger=+dataOnSubmit?.extraTimeTriger
    const extraTime=+dataOnSubmit?.extraTime
    const gap=+dataOnSubmit?.gap
    const live=+dataOnSubmit?.liveTime

  

    const eventData={
      eventCategory:dataOnSubmit?.eventCategory,
      startDate:isoDateTime,
      endDate:endDateTime,
      noOfBids:bids,
      seller:{connect:{id:dataOnSubmit?.sellerName}},
      eventType:{connect:{id:dataOnSubmit?.event }},
      location :{connect:{id:dataOnSubmit?.location}},
      status:dataOnSubmit?.status,
      downloadableFile :{upload:dataOnSubmit?.downloadable[0]},
      termsAndConditions:dataOnSubmit?.terms,
      bidLock:dataOnSubmit?.lockedOrNot,
      isSpecialEvent:dataOnSubmit?.special,
      extraTimeTrigerIn:extraTimeTriger,
      extraTime:extraTime,
      vehicleLiveTimeIn:live,
      gapInBetweenVehicles:gap
    }
const result=addEvent({variables:{data:eventData}})
  }
  return (
    <div className="max-w-7xl mx-auto h-fit  my-10 bg-slate-100 ">
      <div className="space-y-1 "> 
        <div className="py-4 bg-gray-200 rounded px-4 flex items-center justify-center ">
          <h2 className="text-xl py-3 leading-3 font-bold text-gray-900">
            ADD EVENTS
          </h2>
        </div>
        <div className="flex  w-full px-10 py-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" space-y-6 ">
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  Event Category
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                 
                  placeholder="select"
                   {...register("eventCategory",{required:true})}
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
              
                  <option value="online">Online Auction </option>
                  <option value="open">Open Auction</option>
                </select>
                <p className="text-red-500"> {errors.eventCategory&& <span>Event type required</span>}</p> 

              </div>
              <div className=" flex flex-col space-y-2 space-x-px ">
                <label htmlFor="">Start Date and Time</label>
                <div className="flex space-x-6 ">
               
                  <input
                    type="datetime-local"
                    className="btn btn-outline"
                 
                    {...register("startDate",{required:true})}
                  />
 <p className="text-red-500"> {errors.startDate&& <span>Start date and time required</span>}</p> 
                 
                </div>
              </div>
              <div className=" flex flex-col space-y-2 space-x-px ">
                <label htmlFor="">End Date and Time</label>
                <div className="flex space-x-6">
                  <input
                    type="datetime-local"
                    className="btn btn-outline "
                    placeholder="mm//dd/yy"
                    {...register("endDate",{required:true})}
                  />
               
                  
                   <p className="text-red-500"> {errors.endDate&& <span>End date and time required</span>}</p> 
                </div>
              </div>

              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  Seller
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  {...register("sellerName",{})}
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                
                  <option  value="">Select</option>
                  {data?.sellers.map((seller)=>
                 (
                     <option key={seller.id} value={seller.id}>{seller.name}</option>
                 ) )}
                 
                </select>
              </div>
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  Event Type
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  {...register("event",{required:true})}
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                  <option  value="">Select</option>
                   {eventType?.data?.eventTypes?.map((event)=>
                 (
                     <option key={event.id} value={event.id}>{event.name} </option>
                 ) )}
                </select>
              </div>
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  Location
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  {...register("location",{required:true})}
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700   hover:bg-white "
                >
                  <option  value="">Select</option>
                   {location?.data?.locations?.map((event)=>
                 (
                     <option key={event.name} value={event.id}>{event.name}</option>
                 ) )}
                </select>
              </div>
             
             
              <div className="w-full max-w-xl">
                <label htmlFor="">Number of Bids(per User)</label>
                <Input
                  type="number"
                  {...register("noOfBids",{required:true})}
                  
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
                 <p className="text-red-500"> {errors.noOfBids&& <span>No of bids Required</span>}</p> 
              </div>
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                 Auction status
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  {...register("status",{})}
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white"
                >
        
                  <option value="pending">pending </option>
                  <option value="blocked">blocked</option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                  <option value="stop">stop</option>
                </select>
              </div>
          
             
               <div className="flex flex-col items-start  ">
                <label>Downloadable File</label>
                <input type="file"
                  {...register("downloadable",{})}
                 className="  btn btn-outline btn-success border border-1 border-lime-800 text-black rounded  px-10 m-2 bg-slate-200"></input>
              </div>
             
              <div className="flex flex-col space-y-2">
                <label htmlFor="">Terms & Condition</label>
               <textarea 
                 {...register("terms",{})}
               className="max-w-xl border border-gray-400   text-gray-700  rounded  shadow hover:bg-white " name="" id="" cols="30" rows="10"></textarea>
              </div>
             
              
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                Bids on Amount Smaller than the Winning bid amount is
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
           
                  placeholder="select"
                  {...register("lockedOrNot",{})}
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700   hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="locked">locked </option>
                  <option value="unlocked">unlocked</option>
                </select>
              </div>
              <div className="flex space-x-6">
                <input type="checkbox"   {...register("special",{})}
                 className="checkbox checkbox-success hover:bg-white" />
                <label htmlFor="">Is this a special event ?</label>
              </div>
              <div className="w-full max-w-xl">
                <label htmlFor="">Extra Time Trigger in Minutes</label>
                <Input
                  type="number"
                  {...register("timeTriger",{})}
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>
              <div className="w-full max-w-xl">
                <label htmlFor="">Extra Time in minutes</label>
                <Input
                  type="number"
                  {...register("extraTime",{})}
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>
              <div className="w-full max-w-xl">
                <label htmlFor="">
                  Open Auction Vehicle Live Time in minutes
                </label>
                <Input
                  type="number"
                  {...register("liveTime",{})}
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>
              <div className="w-full max-w-xl">
                <label htmlFor="">
                  Open Auction Gap in between vehicles in seconds / Online End
                  Time Increase in Minuts
                </label>
                <Input
                  type="number"
                  {...register("gap",{})}
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>
              <div className=" flex space-x-10">
                <button className="btn btn-success"> Save </button>
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEventComponent;
