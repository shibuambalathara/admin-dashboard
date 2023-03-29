import React from "react";
import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const AddLocationComponent = () => {
  return (
    <div className="max-w-6xl mx-auto h-fit  my-10 bg-slate-100 ">
      <div className="bg-slate-200 py-8 flex justify-center items-center">
        <h1 className="font-bold ">ADD LOCATION</h1>
      </div>

      <div className="bg-gray-0 max-w-6xl ml-5 h-full mx-auto mt-5">
        <form action="w-full">
          <div className="space-y-5">
            <div>
              <label htmlFor="">Name</label>
              <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
            </div>
            <div className="flex flex-col relative ">
              <label className="t" htmlFor=" ">
                State{" "}
              </label>
              <div class="absolute inset-y-12   right-[595px] flex items-center ">
                <div class="h-5 w-1 border bg-gray-400 "></div>
              </div>
              <select
                name=""
                id=""
                placeholder="select"
                className="w-full max-w-[560px] bg-slate-200  border border-gray-300 rounded mt-2 py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
              >
                <option value="">Registration </option>
                <option value="">EMD</option>
                <option value="">Refund</option>
                <option value="">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="">City</label>
              <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
            </div>

            <div>
              <button className="btn btn-success mb-5">Create Location</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLocationComponent;
