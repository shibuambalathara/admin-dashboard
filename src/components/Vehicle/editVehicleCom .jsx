import { Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useVehicleDetailsQuery,useEventStartTimeQuery } from "../../utils/graphql";



const EditVehicleComponent = () => {
  
  const [repoDate,setRepoDate]=useState('')
  const [insuranceValidTill,setinsuranceValidTill]=useState('')
  const [taxValidTill,setTaxValidTill]=useState('')
  const [registrationValidTill,setregistrationValidTil]=useState('')
  const {id}=useParams()
  
  // const[createVehicle]=useCreateVehicleMutation()
  const{data,loading,error}=useVehicleDetailsQuery({variables:{where:{id:id}}})
  
  console.log(data,"data")
 
  useEffect(() => {
    if (data?.vehicle?.repoDt) {
      setRepoDate(new Date(data?.vehicle?.repoDt).toISOString().slice(0, 16));
    }
    if (data?.vehicle?.insuranceValidTill) {
      setinsuranceValidTill(new Date(data?.vehicle?.insuranceValidTill).toISOString().slice(0, 16));
    }
    if (data?.vehicle?.taxValidityDate) {
      setTaxValidTill(new Date(data?.vehicle?.taxValidityDate).toISOString().slice(0, 16));
    }
    if (data?.vehicle?.dateOfRegistration) {
      setregistrationValidTil(new Date(data?.vehicle?.dateOfRegistration).toISOString().slice(0, 16));
    }
  }, [data]);
  const { register, handleSubmit,control, watch, formState: { errors } } = useForm();

  const onSubmit = dataOnSubmit =>{ console.log(dataOnSubmit)


let repo,tax,Insurance
if(dataOnSubmit?.repoDate){
   repo=   new Date(dataOnSubmit?.repoDate).toISOString() ;
}
if(dataOnSubmit?.insuranceValidDate){
  Insurance=   new Date(dataOnSubmit?.insuranceValidDate).toISOString();
}
if(dataOnSubmit?.taxValidityDate){
  tax=   new Date(dataOnSubmit?.taxValidityDate).toISOString();
}
const vehicle={
  event:{connect:{id}},
  registrationNumber:dataOnSubmit?.regNo,
  loanAgreementNo:dataOnSubmit?.loanANum,
  bidStartTime:data?.event?.startDate,
  bidStatus:dataOnSubmit?.bidStatus,
  registeredOwnerName:dataOnSubmit?.regOwnerName,
  quoteIncreament:+dataOnSubmit?.quoteInc|| null,
  make:dataOnSubmit?.vehicleCompanyName,
  model:dataOnSubmit?.model,
  varient:dataOnSubmit?.varient,
  categoty:dataOnSubmit?.categoty,
  fuel:dataOnSubmit?.fuel,
  type:dataOnSubmit?.type,
  rcStatus:dataOnSubmit?.rcStatus,
  yearOfManufacture:+dataOnSubmit?.yearOfManuFacture || null,
   ownership:+dataOnSubmit?.Ownership || null,
  mileage:+dataOnSubmit?.mileage|| null,
  kmReading:+dataOnSubmit?.kmReading|| null,
  insuranceStatus:dataOnSubmit?.insuranceStatus,
  yardLocation:dataOnSubmit?.yardLocation,
  startPrice:+dataOnSubmit?.startPrice|| null,
  reservePrice:+dataOnSubmit?.reservePrice || null,
   repoDt:repo || null,
  veicleLocation:dataOnSubmit?.vehicleLocation,
  vehicleRemarks:dataOnSubmit?.vehicleRemarks,
  auctionManager:dataOnSubmit?.autionManager,
  parkingCharges:dataOnSubmit?.approxParkingCharges,
  insurance:dataOnSubmit?.insuranceStatus,

   insuranceValidTill:Insurance || null,
  tax:dataOnSubmit?.tax,
   taxValidityDate:tax || null,
  fitness:dataOnSubmit?.fitness,
  permit:dataOnSubmit?.permit,
  fitnessPermit:dataOnSubmit?.fitnessPermit,
  engineNo:dataOnSubmit?.engineNumber,
  chassisNo:dataOnSubmit?.chassisNo,
  frontImage:dataOnSubmit?.frontImage,
  leftImage:dataOnSubmit?.leftImage,
  rightImage:dataOnSubmit?.rightImage,
  image5:dataOnSubmit?.image5,
  image6:dataOnSubmit?.image6,
  inspectionLink:dataOnSubmit?.inspectionLink,
   autobseContact:dataOnSubmit?.autobseContact,
    autobse_contact_person:dataOnSubmit?.autoBseContactPerson,
    vehicleCondition:dataOnSubmit?.vehicleLocation,
    powerSteering:dataOnSubmit?.powerSteering,
   shape:dataOnSubmit?.shape,
    color:dataOnSubmit?.color,
    city:dataOnSubmit?.city,
     area:dataOnSubmit?.area,
     state:dataOnSubmit?.state,
     paymentTerms:dataOnSubmit?.paymentTerms,
  // dateOfRegistration:dataOnSubmit?.
     hypothication:dataOnSubmit?.hypothication,
  climateControl:dataOnSubmit?.climateControl,
  doorCount:+dataOnSubmit?.doorCount || null,
  gearBox:dataOnSubmit?.gearBox,
  buyerFees:dataOnSubmit?.buyerFees,
  rtoFine:dataOnSubmit?.rtoFine,
  parkingRate:dataOnSubmit?.parkingRate,
  approxParkingCharges:dataOnSubmit?.approxParkingCharges,
  clientContactPerson:dataOnSubmit?.clientContactPerson,
  clientContactNo:dataOnSubmit?.clientContactNo,
  additionalRemarks:dataOnSubmit?.AdditionalRemarks,
  //watchedBy {
  //     firstName
  //     id
  //   }



}
// const result=createVehicle({variables:{data:vehicle}})
  }
  return (
    <div className="max-w-7xl mx-auto h-fit  my-10 bg-slate-100  ">
   
      <div className="py-4 bg-gray-200 rounded px-4 flex items-center justify-center ">
        <h2 className="text-xl py-3 leading-3 font-bold text-gray-900">
          ADD VECHILE
        </h2>
      </div>
      <div className="  max-w-6xl h-full mx-auto mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" space-y-10">
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Registration{" "}
                </label>
                <Input defaultValue={data?.vehicle?.registrationNumber}  {...register("regNo",{required:true})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
                <p className="text-red-500"> {errors.regNo&& <span>Register Number required</span>}</p> 
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  vehicle id{" "}
                </label>
                <input
                 
                  value={id}
                  type="text"
                  {...register("eventId",{required:true})}
                  placeholder="select"
                  className="w-full max-w-[560px] bg-slate-200  border border-gray-300 rounded mt-2 py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                />
                 <p className="text-red-500"> {errors.eventId&& <span>Event Id required</span>}</p> 
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label htmlFor="">Bid Status</label>
                <select
                  {...register("bidStatus",{})}
                  placeholder="select"
                  className="w-full max-w-[560px] bg-slate-200  border border-gray-300 rounded mt-2 py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value={data?.vehicle?.bidStatus}>{data?.vehicle?.bidStatus}</option>
                  <option value="pending">pending </option>
                  <option value="approved">approved</option>
                  <option value="fulfilled">fulfilled </option>
                  <option value="declined">declined</option>
                </select>
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Loan Agreement number{" "}
                </label>
                <Input defaultValue={data?.vehicle?.loanAgreementNo} {...register("loanANum",{required:true})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
                <p className="text-red-500"> {errors.loanANum&& <span>Loan Agreement Number required</span>}</p> 
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                Registered Owner Name
                </label>
                <Input defaultValue={data?.vehicle?.registeredOwnerName} {...register("regOwnerName",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Quote Increment{" "}
                </label>
                <Input defaultValue={data?.vehicle?.quoteIncreament} type='number'  {...register("quoteInc",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Vehicle Company Name
                </label>
                <Input defaultValue={data?.vehicle?.make} {...register("vehicleCompanyName",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Model{" "}
                </label>
                <Input defaultValue={data?.vehicle?.model} {...register("model",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Varient
                </label>
                <Input defaultValue={data?.vehicle?.varient} {...register("varient",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Category{" "}
                </label>
                <Input defaultValue={data?.vehicle?.categoty} {...register("category",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Fuel
                </label>
                <Input defaultValue={data?.vehicle?.fuel} {...register("fuel",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Type{" "}
                </label>
                <Input defaultValue={data?.vehicle?.type} {...register("type",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Rc status
                </label>
                <Input defaultValue={data?.vehicle?.rcStatus} {...register("rcStatus",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Year Of Manufacture{" "}
                </label>
                <Input defaultValue={data?.vehicle?.yearOfManufacture} type='number' {...register("yearOfManuFacture",{})}  className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Ownership
                </label>
                <Input defaultValue={data?.vehicle?.ownership} type='number' {...register("Ownership",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Mileage{" "}
                </label>
                <Input defaultValue={data?.vehicle?.mileage} type='number' {...register("mileage",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Km Reading
                </label>
                <Input defaultValue={data?.vehicle?.kmReading} type='number' {...register("kmReading",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Insurance Status{" "}
                </label>
                <Input defaultValue={data?.vehicle?.insuranceStatus} {...register("insuranceStatus",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Yard Location
                </label>
                <Input defaultValue={data?.vehicle?.yardLocation} {...register("yardLocation",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Start Price{" "}
                </label>
                <Input defaultValue={data?.vehicle?.startPrice} type='number' {...register("startPrice",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Reserve price
                </label>
                <Input defaultValue={data?.vehicle?.reservePrice} type='number' {...register("reservePrice",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Repo Date{" "}
                </label>

                <div className="flex">
                  <Input
                  defaultValue={repoDate}
                    type="datetime-local"
                    {...register("repoDate",{})}
                    className="max-w-[260px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                 
                </div>
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Vehicle Remarks
                </label>
                <Input defaultValue={data?.vehicle?.vehicleRemarks}  {...register("vehicleRemarks",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                Vechile  Loaction{" "}
                </label>
                <Input defaultValue={data?.vehicle?.veicleLocation} {...register("vehicleLocation",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Parking Charges
                </label>
                <Input defaultValue={data?.vehicle?.parkingCharges} {...register("parkingCharge",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Permit{" "}
                </label>
                <Input defaultValue={data?.vehicle?.permit} {...register("permit",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Insurance
                </label>
                <Input
                  type="text"
                  defaultValue={data?.vehicle?.insurance}
                  {...register("insurance",{})}
                  className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
               
              </div>
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Insurance valid Till{" "}
                </label>

                <div className="flex">
                  <Input
                    type="datetime-local"
                    {...register("insuranceValidDate",{})}
                    defaultValue={insuranceValidTill}
                    className="max-w-[260px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  {/* <Input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  /> */}
                </div>
              </div>
              
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Tax
                </label>
                <Input
                  type="text"
                  defaultValue={data?.vehicle?.tax}
                  {...register("tax",{})}
                  className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
               
              </div>
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Tax Validity Date{" "}
                </label>

                <div className="flex">
                  <Input
                    type="datetime-local"
                    {...register("taxValidityDate",{})}
                    defaultValue={taxValidTill}
                    className="max-w-[260px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  {/* <Input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  /> */}
                </div>
              </div>
              
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Fitness
                </label>
                <Input defaultValue={data?.vehicle?.fitness} {...register("fitness",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Fitness Permit{" "}
                </label>
                <Input defaultValue={data?.vehicle?.fitnessPermit} {...register("fitnessPermit",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Engine Number
                </label>
                <Input defaultValue={data?.vehicle?.engineNo} {...register("engineNumber",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Chassis No{" "}
                </label>
                <Input defaultValue={data?.vehicle?.chassisNo} {...register("chassisNo",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Front Image url
                </label>
                <Input defaultValue={data?.vehicle?.frontImage} {...register("frontImage",{})} type='text' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Back Image url
                </label>
                <Input defaultValue={data?.vehicle?.backImage} type='text' {...register("backImage",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Left Image url
                </label>
                <Input defaultValue={data?.vehicle?.leftImage} {...register("leftImage",{})} type='text' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Right Image url
                </label>
                <Input defaultValue={data?.vehicle?.rightImage} {...register("rightImage",{})} type='text' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                   Image 5 url
                </label>
                <Input defaultValue={data?.vehicle?.image5} {...register("image5",{})} type='text' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Image 6 url
                </label>
                <Input defaultValue={data?.vehicle?.image6} {...register("image6",{})} type='text' className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Inspection Link
                </label>
                <Input defaultValue={data?.vehicle?.inspectionLink} {...register("inspectLink",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                Autobse Contact
                </label>
                <Input defaultValue={data?.vehicle?.autobseContact} {...register("autobseContact",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Autobse Contact Person
                </label>
                <Input defaultValue={data?.vehicle?.autobse_contact_person} {...register("autoBseContactPerson",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
              Vehicle Condition{" "}
                </label>
                <Input defaultValue={data?.vehicle?.vehicleCondition} {...register("vehicleCondion",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Power Steering
                </label>
                <Input defaultValue={data?.vehicle?.powerSteering} {...register("powerSteering",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 Shape{" "}
                </label>
                <Input defaultValue={data?.vehicle?.shape} {...register("shape",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                Color
                </label>
                <Input defaultValue={data?.vehicle?.color} {...register("color",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                 State{" "}
                </label>
                <Input defaultValue={data?.vehicle?.state} {...register("state",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div> 
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  City
                </label>
                <Input defaultValue={data?.vehicle?.city}  {...register("city",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Area{" "}
                </label>
                <Input defaultValue={data?.vehicle?.area} {...register("area",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Payment Terms
                </label>
                <Input
                  type="text"
                  defaultValue={data?.vehicle?.paymentTerms}
                  {...register("paymentTerms",{})}
                  className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
               
              </div>
              <div className="w-1/2  ">
              <label className="t" htmlFor=" ">
                  Date of Registration{" "}
                </label>

                <div className="flex">
                  <Input
                  defaultValue={registrationValidTill}
                    type="datetime-local"
                    {...register("dateOfRegistration",{})}
                    className="max-w-[260px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  {/* <Input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  /> */}
                </div>
              </div>
              
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Hypothication
                </label>
                <Input defaultValue={data?.vehicle?.hypothication} {...register("hypothication",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Climate Control{" "}
                </label>
                <Input defaultValue={data?.vehicle?.climateControl} {...register("climateControl",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Door Count
                </label>
                <Input defaultValue={data?.vehicle?.doorCount} type='number' {...register("doorCount",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Gear Box{" "}
                </label>
                <Input defaultValue={data?.vehicle?.gearBox} {...register("gearBox",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Buyer Fees
                </label>
                <Input defaultValue={data?.vehicle?.buyerFees} {...register("buyerFees",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  RTO fine{" "}
                </label>
                <Input defaultValue={data?.vehicle?.rtoFine} {...register("rtoFine",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  parking Rate
                </label>
                <Input defaultValue={data?.vehicle?.parkingRate} {...register("parkingRate",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Approx Parking Charges{" "}
                </label>
                <Input defaultValue={data?.vehicle?.approxParkingCharges} {...register("approxParkingCharges",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Client Contact Person
                </label>
                <Input defaultValue={data?.vehicle?.clientContactPerson} {...register("clientContactPerson",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Client Contact No{" "}
                </label>
                <Input defaultValue={data?.vehicle?.clientContactNo} {...register("clientContactNo",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Additional Remarks
                </label>
                <Input defaultValue={data?.vehicle?.additionalRemarks} {...register("AdditionalRemarks",{})} className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Watched By{" "}
                </label>
                <Input   className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div>
            <div className=" w-full  flex justify-between space-x-72">
              <div className="w-1/2  ">
                <label className="t" htmlFor=" ">
                  Auction Manager
                </label>
                <Input defaultValue={data?.vehicle?.auctionManager} {...register("autionManager",{})} className="max-w-[435px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
             
            </div>
            <div>
            <button className="btn btn-success mb-5"> Save Changes</button>
            </div>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default EditVehicleComponent;
