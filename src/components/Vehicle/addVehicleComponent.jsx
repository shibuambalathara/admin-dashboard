import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const AddVehicleComponent = () => {
  return (
    <div className="max-w-7xl mx-auto h-fit  my-10 bg-slate-100  ">
      {/* <div className=" w-full h-full bg-lime-400 space-y-1"> */}
      <div className="py-4 bg-gray-200 rounded px-4 flex items-center justify-center ">
        <h2 className="text-xl py-3 leading-3 font-bold text-gray-900">
          ADD VECHILE
        </h2>
      </div>
      <div className="  max-w-6xl h-full mx-auto mt-5">
        <form action=" w-full ">
          <div className=" space-y-10">
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Registration{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Event{" "}
                </label>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  className="w-full max-w-[560px] bg-slate-200  border border-gray-300 rounded mt-2 py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="">online </option>
                  <option value="">offline</option>
                </select>
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label htmlFor="">Bid Status</label>
                <select
                  name=""
                  id=""
                  placeholder="select"
                  className="w-full max-w-[560px] bg-slate-200  border border-gray-300 rounded mt-2 py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="">online </option>
                  <option value="">offline</option>
                </select>
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Loan Agrement number{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Registrated Owner Name
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Quote Increment{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Make
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Model{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Varient
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Category{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Fuel
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Type{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Rc status
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Year Of Manufacture{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Ownership
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Mileage{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Km Reading
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Insurance Status{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Yard Location
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Start Price{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Reserve price
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Repo Date{" "}
                </label>

                <div className="flex">
                  <Input
                    type="date"
                    className="max-w-[260px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  <Input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                </div>
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Vechile Remarks
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                Vechile  Loaction{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Parking Charges
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Permit{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Insurance
                </label>
                <Input
                  type="number"
                  className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
               
              </div>
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Insurance valid Till{" "}
                </label>

                <div className="flex">
                  <Input
                    type="date"
                    className="max-w-[260px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  <Input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                </div>
              </div>
              
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Tax
                </label>
                <Input
                  type="number"
                  className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
               
              </div>
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Tax Validity Date{" "}
                </label>

                <div className="flex">
                  <Input
                    type="date"
                    className="max-w-[260px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  <Input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                </div>
              </div>
              
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Fitness
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Fitness Permit{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Engine Number
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Chassis No{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Front Image
                </label>
                <Input type='file' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Back Image{" "}
                </label>
                <Input type='File' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Left Image
                </label>
                <Input type='file' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Right Image{" "}
                </label>
                <Input type='File' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                   Image 5
                </label>
                <Input type='file' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Image 6    {" "}
                </label>
                <Input type='File' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Inspection Link
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                Autobse Contact{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Autobse Contact Person
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
              Vehicle Condition{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Power Steering
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Shape{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                Color
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 State{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  City
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Area{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Payment Terms
                </label>
                <Input
                  type="number"
                  className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
               
              </div>
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Date of Registration{" "}
                </label>

                <div className="flex">
                  <Input
                    type="date"
                    className="max-w-[260px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  <Input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                </div>
              </div>
              
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Hypothication
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Climate Control{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Door Count
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Gear Box{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Buyer Fees
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  RTO fine{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  parking Rate
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Approx Parking Charges{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Client Contact Person
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Client Contact No{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Additional Remarks
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Watched By{" "}
                </label>
                <Input className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Auction Manager
                </label>
                <Input className="max-w-[435px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
             
            </div>
            <div>
            <button className="btn btn-success mb-5"> Save Changes</button>
            </div>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AddVehicleComponent;
