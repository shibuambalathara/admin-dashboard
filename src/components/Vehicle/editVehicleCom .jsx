
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useVehicleDetailsQuery,
  useUpdateVehicleMutation,
} from "../../utils/graphql";
import { ShowPopup } from "../alerts/popUps";
import { FormFieldInput } from "../utils/formField";
import ImageUpload from "../imageUpload/imageUpload";

const EditVehicleComponent = () => {
  const[viewImageUpload,setViewImageUpload]=useState(false)
  const [repoDate, setRepoDate] = useState("");
  const [insuranceValidTill, setinsuranceValidTill] = useState("");
  const [taxValidTill, setTaxValidTill] = useState("");
  const [registrationValidTill, setregistrationValidTil] = useState("");
  const [images, setImages] = useState([]);
  const { id } = useParams();

  const [editVehicle] = useUpdateVehicleMutation({
    variables: { where: { id } },
  });
  const { data, loading, error } = useVehicleDetailsQuery({
    variables: { where: { id: id } },
  });
  console.log(data, "vv");

  useEffect(() => {
    if (data?.vehicle?.repoDt) {
      
      const localDate=  converttolocaldate(data?.vehicle?.repoDt)
      setRepoDate(localDate)
    }
    if (data?.vehicle?.insuranceValidTill) {
    

      const localDate=  converttolocaldate(data?.vehicle?.insuranceValidTill)
      setinsuranceValidTill(localDate)
    }
    if (data?.vehicle?.taxValidityDate) {
      const localDate=  converttolocaldate(data?.vehicle?.taxValidityDate)
      setTaxValidTill(localDate)
    
    }
    if (data?.vehicle?.dateOfRegistration) {
    const localDate=  converttolocaldate(data?.vehicle?.dateOfRegistration)
      setregistrationValidTil(localDate)
    }
    data?.vehicle?.rightImage &&
      setImages((data?.vehicle?.rightImage).split(","));
  }, [data]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataOnSubmit) => {
    console.log(dataOnSubmit, "data on submit");
    const cleanedRightImage = dataOnSubmit?.rightImage.replace(/,\n/g, ',');
    let repo, tax, InsuranceValidity,regDate;
    if (dataOnSubmit?.repoDate) {
      repo = new Date(dataOnSubmit?.repoDate).toISOString();
      alert(tax)
    }
    if (dataOnSubmit?.insuranceValidDate) {
      InsuranceValidity = new Date(dataOnSubmit?.insuranceValidDate).toISOString();
    }
    if (dataOnSubmit?.taxValidityDate) {
      tax = new Date(dataOnSubmit?.taxValidityDate).toISOString();
     
    }
    if(dataOnSubmit?.dateOfRegistration){
      regDate=new Date(dataOnSubmit?.dateOfRegistration).toISOString();
    }
    const vehicle = {
      // event:{connect:{id}},
      registrationNumber: dataOnSubmit?.regNo,
      loanAgreementNo: dataOnSubmit?.loanANum,
      bidStartTime: data?.event?.startDate,
      bidStatus: dataOnSubmit?.bidStatus,
      registeredOwnerName: dataOnSubmit?.regOwnerName,
      quoteIncreament: +dataOnSubmit?.quoteInc || null,
      make: dataOnSubmit?.vehicleCompanyName,
      model: dataOnSubmit?.model,
      varient: dataOnSubmit?.varient,
      categoty: dataOnSubmit?.category,
      fuel: dataOnSubmit?.fuel,
      type: dataOnSubmit?.type,
      rcStatus: dataOnSubmit?.rcStatus,
      yearOfManufacture: +dataOnSubmit?.yearOfManuFacture || null,
      ownership: +dataOnSubmit?.Ownership || null,
      mileage: +dataOnSubmit?.mileage || null,
      kmReading: +dataOnSubmit?.kmReading || null,
      insuranceStatus: dataOnSubmit?.insuranceStatus,
      yardLocation: dataOnSubmit?.yardLocation,
      startBidAmount: +dataOnSubmit?.startPrice || null,
      reservePrice: +dataOnSubmit?.reservePrice || null,
      repoDt: repo ,
      veicleLocation: dataOnSubmit?.vehicleLocation,
      vehicleRemarks: dataOnSubmit?.vehicleRemarks,
      auctionManager: dataOnSubmit?.autionManager,
      parkingCharges: dataOnSubmit?.approxParkingCharges,
      insurance: dataOnSubmit?.insurance,
      startPrice:+dataOnSubmit?.startPrice || null,
      insuranceValidTill: InsuranceValidity || null,
      tax: dataOnSubmit?.tax,
      taxValidityDate: tax || null,
      fitness: dataOnSubmit?.fitness,
      permit: dataOnSubmit?.permit,
      fitnessPermit: dataOnSubmit?.fitnessPermit,
      engineNo: dataOnSubmit?.engineNumber,
      chassisNo: dataOnSubmit?.chassisNo,
      // frontImage: dataOnSubmit?.frontImage,
      // backImage: dataOnSubmit?.backImage,
      // leftImage: dataOnSubmit?.leftImage,
      rightImage: cleanedRightImage,
      // image5: dataOnSubmit?.image5,
      // image6: dataOnSubmit?.image6,
      inspectionLink: dataOnSubmit?.inspectionLink,
      autobseContact: dataOnSubmit?.autobseContact,
      autobse_contact_person: dataOnSubmit?.autoBseContactPerson,
      vehicleCondition: dataOnSubmit?.vehicleCondition,
      powerSteering: dataOnSubmit?.powerSteering,
      shape: dataOnSubmit?.shape,
      color: dataOnSubmit?.color,
      city: dataOnSubmit?.city,
      area: dataOnSubmit?.area,
      state: dataOnSubmit?.state,
      paymentTerms: dataOnSubmit?.paymentTerms,
       dateOfRegistration:regDate,
      hypothication: dataOnSubmit?.hypothication,
      climateControl: dataOnSubmit?.climateControl,
      doorCount: +dataOnSubmit?.doorCount || null,
      gearBox: dataOnSubmit?.gearBox,
      buyerFees: dataOnSubmit?.buyerFees,
      rtoFine: dataOnSubmit?.rtoFine,
      parkingRate: dataOnSubmit?.parkingRate,
      approxParkingCharges: dataOnSubmit?.approxParkingCharges,
      clientContactPerson: dataOnSubmit?.clientContactPerson,
      clientContactNo: dataOnSubmit?.clientContactNo,
      additionalRemarks: dataOnSubmit?.AdditionalRemarks,
    };
    try {
      const result = editVehicle({ variables: { data: vehicle } });
      if (result) {
        ShowPopup(
          "Success!",
          `Vechile ${dataOnSubmit?.regNo} Updated  successfully!`,
          "success",
          5000,
          true
        );
      }
    } catch (err) {
      ShowPopup("Failed!", `${err.message}`, "error", 5000, true);
      console.log(err);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="shadow-xl flex flex-col     bg-slate-300 h-fit  m-5">
      <div className="py-4 bg-gray-200 rounded px-4 flex items-center shadow-xl justify-center ">
        <h2 className="text-xl py-3 leading-3 font-bold text-gray-900">
          VEHICLE DETAILS
        </h2>
      </div>
      <div className="   h-full  mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-3 gap-x-20 gap-y-5 mx-5">
         
              {/* <div className=" ">
                <label className="t" htmlFor=" ">
                  Registration{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.registrationNumber}
                  {...register("regNo", { required: true })}
                  className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
                <p className="text-red-500">
                  {" "}
                  {errors.regNo && <span>Register Number required</span>}
                </p>
              </div> */}
                        <FormFieldInput defaultValue={data?.vehicle?.registrationNumber} label="Registration" type="text" name="regNo" register={register} error={errors.regNo} required/>

          
         
              <div className="flex flex-col ">
                <label htmlFor="">Bid Status</label>
                <select
                  {...register("bidStatus", {})}
                  placeholder="select"
                  className="w-full  bg-slate-200  border border-gray-300 rounded mt-2 py-1 px-4 outline-none shadow text-gray-700  hover:bg-white "
                >
                  {/* <option value="" selected placeholder="select">select </option> */}
                  <option value={data?.vehicle?.bidStatus}>
                    {data?.vehicle?.bidStatus}
                  </option>
                  <option value="pending">pending </option>
                  <option value="approved">approved</option>
                  <option value="fulfilled">fulfilled </option>
                  <option value="declined">declined</option>
                </select>
              </div>
        
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Loan Agreement number{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.loanAgreementNo}
                  {...register("loanANum", { required: true })}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
                <p className="text-red-500">
                  {" "}
                  {errors.loanANum && (
                    <span>Loan Agreement Number required</span>
                  )}
                </p>
              </div> */}
                     <FormFieldInput label="Loan Agreement number" type="text" defaultValue={data?.vehicle?.loanAgreementNo} name="loanANum" register={register} error={errors.loanANum} required/>

             
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Registered Owner Name
                </label>
                <input
                  defaultValue={data?.vehicle?.registeredOwnerName}
                  {...register("regOwnerName", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
                         <FormFieldInput defaultValue={data?.vehicle?.registeredOwnerName} label="Registered Owner Name" type="text" name="regOwnerName" register={register} error={errors.regOwnerName} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Quote Increment{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.quoteIncreament}
                  type="number"
                  {...register("quoteInc", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.quoteIncreament} label="Quote Increment" type="number"  name="quoteInc" register={register} error={errors.quoteInc} />

         
           
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Vehicle Company Name
                </label>
                <input
                  defaultValue={data?.vehicle?.make}
                  {...register("vehicleCompanyName", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.make} label="Vehicle Company Name" type="text" name="vehicleCompanyName" register={register} error={errors.vehicleCompanyName} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Model{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.model}
                  {...register("model", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
     
              <FormFieldInput defaultValue={data?.vehicle?.model} label="Model" type="text" name="model" register={register} error={errors.model} />

              
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Varient
                </label>
                <input
                  defaultValue={data?.vehicle?.varient}
                  {...register("varient", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.varient} label="Varient" type="text" name="varient" register={register} error={errors.varient} />

            
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Category{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.categoty}
                  {...register("category", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.categoty} label="Category" type="text" name="category" register={register} error={errors.category} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Fuel
                </label>
                <input
                  defaultValue={data?.vehicle?.fuel}
                  {...register("fuel", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.fuel} label="Fuel" type="text" name="fuel" register={register} error={errors.fuel} />
{/* 
              <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Type{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.type}
                  {...register("type", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.type} label="Type" type="text" name="type" register={register} error={errors.type} />

{/*            
              <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Rc status
                </label>
                <input
                  defaultValue={data?.vehicle?.rcStatus}
                  {...register("rcStatus", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.rcStatus} label="Rc status" type="text" name="rcStatus" register={register} error={errors.rcStatus} />          
{/* 
              <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Year Of Manufacture{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.yearOfManufacture}
                  type="number"
                  {...register("yearOfManuFacture", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.yearOfManufacture} label="Year Of Manufacture" type="number" name="yearOfManuFacture" register={register} error={errors.yearOfManuFacture} />

    
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Ownership
                </label>
                <input
                  defaultValue={data?.vehicle?.ownership}
                  type="number"
                  {...register("Ownership", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.ownership} label="Ownership" type="number" name="Ownership" register={register} error={errors.Ownership} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Mileage{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.mileage}
                  type="number"
                  {...register("mileage", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
    
              <FormFieldInput defaultValue={data?.vehicle?.mileage} label="Mileage" type="number" name="mileage" register={register} error={errors.mileage} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Km Reading
                </label>
                <input
                  defaultValue={data?.vehicle?.kmReading}
                  type="number"
                  {...register("kmReading", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.kmReading} label="Km Reading" type="number" name="kmReading" register={register} error={errors.kmReading} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Insurance Status{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.insuranceStatus}
                  {...register("insuranceStatus", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.insuranceStatus} label="Insurance Status" type="text" name="insuranceStatus" register={register} error={errors.insuranceStatus} />

         
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Yard Location
                </label>
                <input
                  defaultValue={data?.vehicle?.yardLocation}
                  {...register("yardLocation", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.yardLocation} label="Yard Location" type="text" name="yardLocation" register={register} error={errors.yardLocation} />
{/* 
              <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Start Price{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.startBidAmount}
                  type="number"
                  {...register("startPrice", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.startBidAmount} label="Start Price" type="number" name="startPrice" register={register} error={errors.startPrice} />

           
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Reserve price
                </label>
                <input
                  defaultValue={data?.vehicle?.reservePrice}
                  type="number"
                  {...register("reservePrice", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.reservePrice} label="Reserve price" type="number" name="reservePrice" register={register} error={errors.reservePrice} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Repo Date{" "}
                </label>

                <div className="flex">
                  <input
                    defaultValue={repoDate}
                    type="datetime-local"
                    {...register("repoDate", {})}
                    className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                </div>
              </div> */}
              <FormFieldInput  defaultValue={repoDate} label="Repo Date" type="datetime-local" name="repoDate" register={register} error={errors.repoDate} />

          
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Vehicle Remarks
                </label>
                <input
                  defaultValue={data?.vehicle?.vehicleRemarks}
                  {...register("vehicleRemarks", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.vehicleRemarks} label="Vehicle Remarks" type="text" name="vehicleRemarks" register={register} error={errors.vehicleRemarks} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Vechile Loaction{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.veicleLocation}
                  {...register("vehicleLocation", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.veicleLocation} label="Vehicle Locaction" type="text" name="vehicleLocation" register={register} error={errors.vehicleLocation} />

            
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Parking Charges
                </label>
                <input
                  defaultValue={data?.vehicle?.parkingCharges}
                  {...register("parkingCharge", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div>   */}
                        <FormFieldInput defaultValue={data?.vehicle?.parkingCharges} label="Parking Charges" type="text" name="parkingCharge" register={register} error={errors.parkingCharge} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Permit{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.permit}
                  {...register("permit", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.permit} label=" Permit" type="text" name="permit" register={register} error={errors.permit} />

{/*            
              <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Insurance
                </label>
                <input
                  type="text"
                  defaultValue={data?.vehicle?.insurance}
                  {...register("insurance", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.insurance} label="Insurance" type="text" name="insurance" register={register} error={errors.insurance} />
{/* 
              <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Insurance valid Till{" "}
                </label>

                <div className="flex">
                  <input
                    type="datetime-local"
                    {...register("insuranceValidDate", {})}
                    defaultValue={insuranceValidTill}
                    className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                   <input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                </div> 
            </div> */}
              <FormFieldInput  defaultValue={insuranceValidTill} label=" Insurance valid Till" type="datetime-local" name="insuranceValidDate" register={register} error={errors.insuranceValidDate} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Tax
                </label>
                <input
                  type="text"
                  defaultValue={data?.vehicle?.tax}
                  {...register("tax", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.tax} label="Tax" type="text" name="tax" register={register} error={errors.tax} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Tax Validity Date{" "}
                </label>

                <div className="flex">
                  <input
                    type="datetime-local"
                    {...register("taxValidityDate", {})}
                    defaultValue={taxValidTill}
                    className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  <input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  /> 
                </div>
              </div> */}
              <FormFieldInput  defaultValue={taxValidTill} label=" Tax Validity Date" type="datetime-local" name="taxValidityDate" register={register} error={errors.taxValidityDate} /> 

          
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Fitness
                </label>
                <input
                  defaultValue={data?.vehicle?.fitness}
                  {...register("fitness", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.fitness} label="Fitness" type="text" name="fitness" register={register} error={errors.fitness} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Fitness Permit{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.fitnessPermit}
                  {...register("fitnessPermit", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.fitnessPermit} label="Fitness Permit" type="text" name="fitnessPermit" register={register} error={errors.fitnessPermit} />

        
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Engine Number
                </label>
                <input
                  defaultValue={data?.vehicle?.engineNo}
                  {...register("engineNumber", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.engineNo} label="Engine Number" type="text" name="engineNumber" register={register} error={errors.engineNumber} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Chassis No{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.chassisNo}
                  {...register("chassisNo", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.chassisNo} label="Chassis No" type="text" name="chassisNo" register={register} error={errors.chassisNo} />


        
        
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Inspection Link
                </label>
                <input
                  defaultValue={data?.vehicle?.inspectionLink}
                  {...register("inspectLink", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.inspectionLink} label="Inspection Link" type="text" name="inspectionLink" register={register} error={errors.inspectionLink} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  
                </label>
                <input
                  defaultValue={data?.vehicle?.autobseContact}
                  {...register("autobseContact", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.autobseContact} label="Autobse Contact" type="text" name="autobseContact" register={register} error={errors.autobseContact} />

         
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Autobse Contact Person
                </label>
                <input
                  defaultValue={data?.vehicle?.autobse_contact_person}
                  {...register("autoBseContactPerson", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.autobse_contact_person} label="Autobse Contact Person" type="text" name="autobse_contact_person" register={register} error={errors.autobse_contact_person} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Vehicle Condition{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.vehicleCondition}
                  {...register("vehicleCondition", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.vehicleCondition} label="Vehicle Condition" type="text" name="vehicleCondition" register={register} error={errors.vehicleCondition} />

        
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Power Steering
                </label>
                <input
                  defaultValue={data?.vehicle?.powerSteering}
                  {...register("powerSteering", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.powerSteering} label="Power Steering" type="text" name="powerSteering" register={register} error={errors.powerSteering} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Shape{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.shape}
                  {...register("shape", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.shape} label="Shape" type="text" name="shape" register={register} error={errors.shape} />

        
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Color
                </label>
                <input
                  defaultValue={data?.vehicle?.color}
                  {...register("color", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.color} label="Color" type="text" name="color" register={register} error={errors.color} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  State{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.state}
                  {...register("state", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.state} label="State" type="text" name="state" register={register} error={errors.state} />

            
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  City
                </label>
                <input
                  defaultValue={data?.vehicle?.city}
                  {...register("city", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.city} label="City" type="text" name="city" register={register} error={errors.city} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Area{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.area}
                  {...register("area", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.area} label="Area" type="text" name="area" register={register} error={errors.area} />

          
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Payment Terms
                </label>
                <input
                  type="text"
                  defaultValue={data?.vehicle?.paymentTerms}
                  {...register("paymentTerms", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.paymentTerms} label="Payment Terms" type="text" name="paymentTerms" register={register} error={errors.paymentTerms} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Date of Registration{" "}
                </label>

                {/* <div className="flex">
                  <input
                    defaultValue={registrationValidTill}
                    type="datetime-local"
                    {...register("dateOfRegistration", {})}
                    className="w-full border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  />
                  {/* <input
                    type="time"
                    className="max-w-[160px] ml-5 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                  /> */}
               
        
           
              <FormFieldInput defaultValue={registrationValidTill} label="Date of Registration" type="datetime-local" name="dateOfRegistration" register={register} error={errors.dateOfRegistration} />

        
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Hypothication
                </label>
                <input
                  defaultValue={data?.vehicle?.hypothication}
                  {...register("hypothication", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.hypothication} label="Hypothication" type="text" name="hypothication" register={register} error={errors.hypothication} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Climate Control{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.climateControl}
                  {...register("climateControl", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.climateControl} label="Climate Control" type="text" name="climateControl" register={register} error={errors.climateControl} />

          
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Door Count
                </label>
                <input
                  defaultValue={data?.vehicle?.doorCount}
                  type="number"
                  {...register("doorCount", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.doorCount} label="Door Count" type="number" name="doorCount" register={register} error={errors.doorCount} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Gear Box{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.gearBox}
                  {...register("gearBox", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.gearBox} label="Gear Box" type="text" name="gearBox" register={register} error={errors.gearBox} />

          
{/*             
              <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Buyer Fees
                </label>
                <input
                  defaultValue={data?.vehicle?.buyerFees}
                  {...register("buyerFees", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.buyerFees} label="Buyer Fees" type="text" name="buyerFees" register={register} error={errors.buyerFees} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  RTO fine{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.rtoFine}
                  {...register("rtoFine", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.rtoFine} label="RTO fine" type="text" name="rtoFine" register={register} error={errors.rtoFine} />

       
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  parking Rate
                </label>
                <input
                  defaultValue={data?.vehicle?.parkingRate}
                  {...register("parkingRate", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.parkingRate} label="parking Rate" type="text" name="parkingRate" register={register} error={errors.parkingRate} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Approx Parking Charges{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.approxParkingCharges}
                  {...register("approxParkingCharges", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.approxParkingCharges} label="Approx Parking Charges" type="text" name="approxParkingCharges" register={register} error={errors.approxParkingCharges} />

           
        
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Client Contact Person
                </label>
                <input
                  defaultValue={data?.vehicle?.clientContactPerson}
                  {...register("clientContactPerson", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.clientContactPerson} label="Client Contact Person" type="text" name="clientContactPerson" register={register} error={errors.clientContactPerson} />

              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Client Contact No{" "}
                </label>
                <input
                  defaultValue={data?.vehicle?.clientContactNo}
                  {...register("clientContactNo", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.clientContactNo} label=" Client Contact No" type="text" name="clientContactNo" register={register} error={errors.clientContactNo} />

{/*        
              <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Additional Remarks
                </label>
                <input
                  defaultValue={data?.vehicle?.additionalRemarks}
                  {...register("AdditionalRemarks", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput defaultValue={data?.vehicle?.additionalRemarks} label="Additional Remarks" type="text" name="AdditionalRemarks" register={register} error={errors.AdditionalRemarks} />

              
              {/* <div className="flex flex-col ">
                <label className="t" htmlFor=" ">
                  Auction Manager
                </label>
                <input
                  defaultValue={data?.vehicle?.auctionManager}
                  {...register("autionManager", {})}
                  className=" border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
                />
              </div> */}
              <FormFieldInput  defaultValue={data?.vehicle?.auctionManager} label="Auction Manager" type="text" name="auctionManager" register={register} error={errors.auctionManager} />

          
            {/* <div className=" w-full  flex justify-between space-x-72">
             
             
            </div> */}
             </div>
             <div className="grid grid-cols-2 gap-x-10  gap-y-5 m-2">
             {images?.map((imgs, index) => {
                return (
                  <div className=" bg-gray-50 rounded-2xl">
             
                    <div className="text-center">  <p>Image {index+1}</p></div>
                  
<div className=" flex justify-center">
<img src={imgs} alt={imgs} key={index} className="h-80  text-center" />
  </div>
                   
                  </div>
                );
              })}
                 
                 </div>
     
            <textarea
  defaultValue={formatTextAreaValue(data?.vehicle?.rightImage)}
  {...register("rightImage", {})}
 
  className="w-3/4 h-40 border-gray-400 rounded m-2 p-2 flex   outline-none shadow text-gray-700 hover:bg-white"
/>

<div className="w-1/2">

{viewImageUpload && <ImageUpload/>}
 </div>
            <div className="text-center my-5">
              <button className="btn btn-success mb-5"> Save Changes</button>
            </div>
         
        </form>
        <button onClick={()=>setViewImageUpload(!viewImageUpload)} className="btn bg-red-500 text-right">Image Upload</button>



      </div>
    </div>
  );
};

export default EditVehicleComponent;





function formatTextAreaValue(text) {
  if (!text) return ""; 
  return text.replace(/,/g, ',\n');
}
function converttolocaldate(isoDate){


  const localDate = new Date(isoDate);
  const year = localDate.getFullYear();
  const month = String(localDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const day = String(localDate.getDate()).padStart(2, '0');
  const hours = String(localDate.getHours()).padStart(2, '0');
  const minutes = String(localDate.getMinutes()).padStart(2, '0');
  
  const formattedDateTimeLocal = `${year}-${month}-${day}T${hours}:${minutes}`;
  console.log("Formatted DateTime-Local:", formattedDateTimeLocal);
  return formattedDateTimeLocal
}