import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";



const AddEventComponent = () => {
 

  return (
    <div className="max-w-6xl mx-auto h-fit  my-10 bg-slate-100 ">
      <div className="space-y-1 "> 
        <div className="py-4 bg-gray-200 rounded px-4 flex items-center justify-center ">
          <h2 className="text-xl py-3 leading-3 font-bold text-gray-900">
            ADD EVENTS
          </h2>
        </div>
        <div className="flex  w-full px-10 py-10 ">
          <form  className="w-full"  action="">
            <div className=" space-y-6 ">
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  Event Category
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="">online </option>
                  <option value="">offline</option>
                </select>
              </div>
              <div className=" flex flex-col space-y-2 space-x-px ">
                <label htmlFor="">Start Date</label>
                <div className="flex space-x-6 ">
                  <input
                    type="date"
                    className="btn btn-outline"
                    placeholder="mm//dd/yy"
                  />

                  <input
                    className="min-w-[20px] bg-white border border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700 appearance-none"
                    type="time"
                    placeholder=" 00:00"
                  />
                </div>
              </div>
              <div className=" flex flex-col space-y-2 space-x-px ">
                <label htmlFor="">End Date</label>
                <div className="flex space-x-6">
                  <input
                    type="date"
                    className="btn btn-outline "
                    placeholder="mm//dd/yy"
                  />
                  {/* <input type="date" className="input input-bordered input-secondary w-full "/> */}
                  <input
                    className="min-w-[20px] bg-white border border-gray-400 rounded py-1 px-2 outline-none shadow text-gray-700 appearance-none"
                    type="time"
                    placeholder=" 00:00"
                  />
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
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="">online </option>
                  <option value="">offline</option>
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
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="">online </option>
                  <option value="">offline</option>
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
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700   hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="">online </option>
                  <option value="">offline</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  Vechiles
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
        
                  <option value="">online </option>
                  <option value="">offline</option>
                </select>
              </div>
              <div className="w-full max-w-xl">
                <label htmlFor="">No of Bids</label>
                <Input
                  type="text"
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  status
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white"
                >
        
                  <option value="">online </option>
                  <option value="">offline</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  Excel Uploads
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700  hover:bg-white"
                >
        
                  <option value="">online </option>
                  <option value="">offline</option>
                </select>
              </div>
             
               <div className="flex flex-col items-start  ">
                <label>Downloadable File</label>
                <button className="  btn btn-outline btn-success border border-1 border-lime-800 text-black rounded  px-10 mt-2 bg-slate-200">upload</button>
              </div>
             
              <div className="flex flex-col space-y-2">
                <label htmlFor="">Terms & Condition</label>
               <textarea   className="max-w-xl border border-gray-400   text-gray-700  rounded  shadow hover:bg-white " name="" id="" cols="30" rows="10"></textarea>
              </div>
             
              
              <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                Bids on Amount Smaller than the Winning bid amount is
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  className="w-full max-w-xl bg-slate-200  border border-gray-300 rounded py-1 px-4 outline-none shadow text-gray-700   hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="">online </option>
                  <option value="">offline</option>
                </select>
              </div>
              <div className="flex space-x-6">
                <input type="checkbox" className="checkbox checkbox-success hover:bg-white" />
                <label htmlFor="">Is this a special event ?</label>
              </div>
              <div className="w-full max-w-xl">
                <label htmlFor="">Extra Time Trigger in Minutes</label>
                <Input
                  type="text"
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>
              <div className="w-full max-w-xl">
                <label htmlFor="">Extra Time in minuted</label>
                <Input
                  type="text"
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>
              <div className="w-full max-w-xl">
                <label htmlFor="">
                  Open Auction Vehicle Live Time in minuted
                </label>
                <Input
                  type="text"
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>
              <div className="w-full max-w-xl">
                <label htmlFor="">
                  Open Auction Gap in between vehicles in seconds / Online End
                  Time Increase in Minuts
                </label>
                <Input
                  type="text"
                  className="min-w-[20px]  border-gray-400 rounded py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>
              <div className=" flex space-x-10">
                <button className="btn btn-success"> Save Changes</button>
                <button className="btn btn-outline btn-error">Delete</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEventComponent;
