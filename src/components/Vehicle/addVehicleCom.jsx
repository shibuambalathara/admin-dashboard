import { input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCreateVehicleMutation,useEventStartTimeQuery } from "../../utils/graphql";
import { ShowPopup } from '../alerts/popUps';

const AddVehicleComponent = () => {

  const {id}=useParams()
  const[createVehicle]=useCreateVehicleMutation()
  const{data}=useEventStartTimeQuery({variables:{where:{id:id}}})
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
try {
  const result=createVehicle({variables:{data:vehicle}})
if(result){
  ShowPopup("Success!", `${dataOnSubmit?.regNo}Added successfully!`, "success", 5000, true);

}
} catch (error) {
  ShowPopup("Failed!", `${error.message}`, "error", 5000, true);
}
  }
  return (
    <div className="shadow-xl flex flex-col     bg-slate-300 h-fit  m-5">
    
    <div className="py-4 bg-gray-200 rounded px-4 flex items-center shadow-xl justify-center ">
        <h2 className="text-xl py-3 leading-3 font-bold text-gray-900">
       ADD VEHICLE
        </h2>
      </div>
      <div className="   h-full  mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid sm:grid-cols-3 gap-x-20 gap-y-5 mx-5">
          
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Registration{" "}
                </label>
                <input  {...register("regNo",{required:true})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
                <p className="text-red-500"> {errors.regNo&& <span>Register Number required</span>}</p> 
              </div>
               {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Event{" "}
                </label>
                <input
                 
                  value={id}
                  type="text"
                  {...register("eventId",{required:true})}
                  placeholder="select"
                  className="w-full w-full bg-slate-200  border border-gray-300 rounded mt-2 py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                />
                 <p className="text-red-500"> {errors.eventId&& <span>Event Id required</span>}</p> 
              </div> */}
       

               <div className="flex flex-col ">
                <label htmlFor="">Bid Status</label>
                <select
                  {...register("bidStatus",{})}
                  placeholder="select"
                  className="w-full w-full bg-slate-200  border border-gray-300 rounded mt-2 py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value="pending">pending </option>
                  <option value="approved">approved</option>
                  <option value="fulfilled">fulfilled </option>
                  <option value="declined">declined</option>
                </select>
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Loan Agreement number{" "}
                </label>
                <input {...register("loanANum",{required:true})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
                <p className="text-red-500"> {errors.loanANum&& <span>Loan Agreement Number required</span>}</p> 
              </div>
        
        
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                Registered Owner Name
                </label>
                <input {...register("regOwnerName",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Quote Increment{" "}
                </label>
                <input type='number' defaultValue='1000' {...register("quoteInc",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
     
          
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Vehicle Company Name
                </label>
                <input {...register("vehicleCompanyName",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Model{" "}
                </label>
                <input {...register("model",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
    
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Varient
                </label>
                <input {...register("varient",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Category{" "}
                </label>
                <input {...register("category",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
         
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Fuel
                </label>
                <input {...register("fuel",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Type{" "}
                </label>
                <input {...register("type",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
          
         
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Rc status
                </label>
                <input {...register("rcStatus",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Year Of Manufacture{" "}
                </label>
                <input type='number' {...register("yearOfManuFacture",{})}  className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
  

               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Ownership
                </label>
                <input type='number' {...register("Ownership",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Mileage{" "}
                </label>
                <input type='number' {...register("mileage",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
     
    
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Km Reading
                </label>
                <input type='number' {...register("kmReading",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Insurance Status{" "}
                </label>
                <input {...register("insuranceStatus",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
      
          
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Yard Location
                </label>
                <input {...register("yardLocation",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Start Price{" "}
                </label>
                <input type='number' {...register("startPrice",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
      

               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Reserve price
                </label>
                <input type='number' {...register("reservePrice",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Repo Date{" "}
                </label>

                <div className="flex">
                  <input
                    type="datetime-local"
                    {...register("repoDate",{})}
                    className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  {/* <input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  /> */}
                </div>
              </div>
      
       
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Vehicle Remarks
                </label>
                <input {...register("vehicleRemarks",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                Vehicle Locaction{" "}
                </label>
                <input {...register("vehicleLocation",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
          
         
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Parking Charges
                </label>
                <input {...register("parkingCharge",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Permit{" "}
                </label>
                <input {...register("permit",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
         
               <div className="flex flex-col ">
              <label className="t" htmlFor=" ">
                  Insurance
                </label>
                <input
                  type="text"
                  {...register("insurance",{})}
                  className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
               
              </div>
               <div className="flex flex-col ">
              <label className="t" htmlFor=" ">
                  Insurance valid Till{" "}
                </label>

                <div className="flex">
                  <input
                    type="datetime-local"
                    {...register("insuranceValidDate",{})}
                    className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  {/* <input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  /> */}
                </div>
            </div>
          
        
               <div className="flex flex-col ">
              <label className="t" htmlFor=" ">
                  Tax
                </label>
                <input
                  type="text"
                  {...register("tax",{})}
                  className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
               
              </div>
               <div className="flex flex-col ">
              <label className="t" htmlFor=" ">
                  Tax Validity Date{" "}
                </label>

                <div className="flex">
                  <input
                    type="datetime-local"
                    {...register("taxValidityDate",{})}
                    className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  {/* <input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  /> */}
                </div>
      
              
            </div>
          
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Fitness
                </label>
                <input {...register("fitness",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Fitness Permit{" "}
                </label>
                <input {...register("fitnessPermit",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
       
        
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                 Engine Number
                </label>
                <input {...register("engineNumber",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Chassis No{" "}
                </label>
                <input {...register("chassisNo",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
        
     
          
       
            {/* <div className=" w-full  flex justify-between space-x-72">
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Front Image url
                </label>
                <input {...register("frontImage",{})} type='text' className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Back Image url
                </label>
                <input type='text' {...register("backImage",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
       
        
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Left Image url
                </label>
                <input {...register("leftImage",{})} type='text' className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
           
            </div>
            <div className=" w-full  flex justify-between space-x-72">
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                   Image 5 url
                </label>
                <input {...register("image5",{})} type='text' className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                 Image 6 url
                </label>
                <input {...register("image6",{})} type='text' className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
         
         
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                 Inspection Link
                </label>
                <input {...register("inspectLink",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                Autobse Contact
                </label>
                <input {...register("autobseContact",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
        
           
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                 Autobse Contact Person
                </label>
                <input {...register("autoBseContactPerson",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
              Vehicle Condition{" "}
                </label>
                <input {...register("vehicleCondion",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            </div> */}
           
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                 Power Steering
                </label>
                <input {...register("powerSteering",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                 Shape{" "}
                </label>
                <input {...register("shape",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
         
  
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                Color
                </label>
                <input {...register("color",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                 State{" "}
                </label>
                <input {...register("state",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div> 
       
        
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  City
                </label>
                <input {...register("city",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Area{" "}
                </label>
                <input {...register("area",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
        
       
               <div className="flex flex-col ">
              <label className="t" htmlFor=" ">
                  Payment Terms
                </label>
                <input
                  type="text"
                  {...register("paymentTerms",{})}
                  className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
               
              </div>
               <div className="flex flex-col ">
              <label className="t" htmlFor=" ">
                  Date of Registration{" "}
                </label>

                <div className="flex">
                  <input
                    type="datetime-local"
                    {...register("dateOfRegistration",{})}
                    className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  {/* <input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  /> */}
                </div>
           
              
            </div>
         
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Hypothication
                </label>
                <input {...register("hypothication",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Climate Control{" "}
                </label>
                <input {...register("climateControl",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            
        
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Door Count
                </label>
                <input type='number' {...register("doorCount",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Gear Box{" "}
                </label>
                <input {...register("gearBox",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
         
        
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Buyer Fees
                </label>
                <input {...register("buyerFees",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  RTO fine{" "}
                </label>
                <input {...register("rtoFine",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
    
   
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  parking Rate
                </label>
                <input {...register("parkingRate",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Approx Parking Charges{" "}
                </label>
                <input {...register("approxParkingCharges",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
      
   
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Client Contact Person
                </label>
                <input {...register("clientContactPerson",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Client Contact No{" "}
                </label>
                <input {...register("clientContactNo",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
      
 
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Additional Remarks
                </label>
                <input {...register("AdditionalRemarks",{})} className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Watched By{" "}
                </label>
                <input  className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
       
     
               <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Auction Manager
                </label>
                <input {...register("autionManager",{})} className="max-w-[435px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
             
              </div>
              <div className="flex flex-col m-5">
                <label className="t" htmlFor=" ">
                   Image url
                </label>
                <textarea {...register("rightImage",{})} type='text' className="w-full h-40 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white " />
              </div>
            <div className="text-center">
            <button className="btn btn-success my-5"> Save Changes</button>
            </div>
      
        </form>
      </div>
     
    </div>
  );
};

export default AddVehicleComponent;
