
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useVehicleDetailsQuery,
  useUpdateVehicleMutation,
} from "../../utils/graphql";
import { ShowPopup } from "../alerts/popUps";
import { FormFieldInput, ImageMaping } from "../utils/formField";
import ImageUpload from "../upload/imageUpload";
import { DateConvert } from "../utils/dateFormat";

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
  // console.log("vehicles",data)
  useEffect(() => {
    if (data?.vehicle?.repoDt) {
      
      const localDate=  DateConvert(data?.vehicle?.repoDt)
      setRepoDate(localDate)
    }
    if (data?.vehicle?.insuranceValidTill) {
    

      const localDate=  DateConvert(data?.vehicle?.insuranceValidTill)
      setinsuranceValidTill(localDate)
    }
    if (data?.vehicle?.taxValidityDate) {
      const localDate=  DateConvert(data?.vehicle?.taxValidityDate)
      setTaxValidTill(localDate)
    
    }
    if (data?.vehicle?.dateOfRegistration) {
    const localDate=  DateConvert(data?.vehicle?.dateOfRegistration)
      setregistrationValidTil(localDate)
    }
    data?.vehicle?.frontImage&&
      setImages((data?.vehicle?.frontImage).split(","));
  }, [data]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataOnSubmit) => {
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
      startBidAmount: +dataOnSubmit?.startPrice || 0,
      reservePrice: +dataOnSubmit?.reservePrice || 0,
      repoDt: repo ,
      veicleLocation: dataOnSubmit?.vehicleLocation,
      vehicleRemarks: dataOnSubmit?.vehicleRemarks,
      auctionManager: dataOnSubmit?.autionManager,
      parkingCharges: dataOnSubmit?.approxParkingCharges,
      insurance: dataOnSubmit?.insurance,
      startPrice:+dataOnSubmit?.startPrice || 0,
      insuranceValidTill: InsuranceValidity || null,
      tax: dataOnSubmit?.tax,
      taxValidityDate: tax || null,
      fitness: dataOnSubmit?.fitness,
      permit: dataOnSubmit?.permit,
      fitnessPermit: dataOnSubmit?.fitnessPermit,
      engineNo: dataOnSubmit?.engineNumber,
      chassisNo: dataOnSubmit?.chassisNo,
       frontImage: cleanedRightImage,
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
      lotNumber:+dataOnSubmit?.lotNumber
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
        
           
                     <FormFieldInput label="Loan Agreement number" type="text" defaultValue={data?.vehicle?.loanAgreementNo} name="loanANum" register={register} error={errors.loanANum} required/>

                         <FormFieldInput defaultValue={data?.vehicle?.registeredOwnerName} label="Registered Owner Name" type="text" name="regOwnerName" register={register} error={errors.regOwnerName} />

            
              <FormFieldInput defaultValue={data?.vehicle?.quoteIncreament} label="Quote Increment" type="number"  name="quoteInc" register={register} error={errors.quoteInc} />

         
           
            
              <FormFieldInput defaultValue={data?.vehicle?.make} label="Vehicle Company Name" type="text" name="vehicleCompanyName" register={register} error={errors.vehicleCompanyName} />

         
     
              <FormFieldInput defaultValue={data?.vehicle?.model} label="Model" type="text" name="model" register={register} error={errors.model} />

              
            
              <FormFieldInput defaultValue={data?.vehicle?.varient} label="Varient" type="text" name="varient" register={register} error={errors.varient} />

            
         
              <FormFieldInput defaultValue={data?.vehicle?.categoty} label="Category" type="text" name="category" register={register} error={errors.category} />

           
              <FormFieldInput defaultValue={data?.vehicle?.fuel} label="Fuel" type="text" name="fuel" register={register} error={errors.fuel} />

              <FormFieldInput defaultValue={data?.vehicle?.type} label="Type" type="text" name="type" register={register} error={errors.type} />

              <FormFieldInput defaultValue={data?.vehicle?.rcStatus} label="Rc status" type="text" name="rcStatus" register={register} error={errors.rcStatus} />          

              <FormFieldInput  defaultValue={data?.vehicle?.yearOfManufacture} label="Year Of Manufacture" type="number" name="yearOfManuFacture" register={register} error={errors.yearOfManuFacture} />

    
         
              <FormFieldInput defaultValue={data?.vehicle?.ownership} label="Ownership" type="number" name="Ownership" register={register} error={errors.Ownership} />

           
    
              <FormFieldInput defaultValue={data?.vehicle?.mileage} label="Mileage" type="number" name="mileage" register={register} error={errors.mileage} />

       
              <FormFieldInput  defaultValue={data?.vehicle?.kmReading} label="Km Reading" type="number" name="kmReading" register={register} error={errors.kmReading} />

        
              <FormFieldInput defaultValue={data?.vehicle?.insuranceStatus} label="Insurance Status" type="text" name="insuranceStatus" register={register} error={errors.insuranceStatus} />

         
      
              <FormFieldInput defaultValue={data?.vehicle?.yardLocation} label="Yard Location" type="text" name="yardLocation" register={register} error={errors.yardLocation} />

              <FormFieldInput  defaultValue={data?.vehicle?.startBidAmount} label="Start Price" type="number" name="startPrice" register={register} error={errors.startPrice} />

              <FormFieldInput defaultValue={data?.vehicle?.reservePrice} label="Reserve price" type="number" name="reservePrice" register={register} error={errors.reservePrice} />

              <FormFieldInput  defaultValue={repoDate} label="Repo Date" type="datetime-local" name="repoDate" register={register} error={errors.repoDate} />

              <FormFieldInput  defaultValue={data?.vehicle?.vehicleRemarks} label="Vehicle Remarks" type="text" name="vehicleRemarks" register={register} error={errors.vehicleRemarks} />


              <FormFieldInput defaultValue={data?.vehicle?.veicleLocation} label="Vehicle Locaction" type="text" name="vehicleLocation" register={register} error={errors.vehicleLocation} />

              <FormFieldInput defaultValue={data?.vehicle?.parkingCharges} label="Parking Charges" type="text" name="parkingCharge" register={register} error={errors.parkingCharge} />

              <FormFieldInput  defaultValue={data?.vehicle?.permit} label=" Permit" type="text" name="permit" register={register} error={errors.permit} />


              <FormFieldInput defaultValue={data?.vehicle?.insurance} label="Insurance" type="text" name="insurance" register={register} error={errors.insurance} />

              <FormFieldInput  defaultValue={insuranceValidTill} label=" Insurance valid Till" type="datetime-local" name="insuranceValidDate" register={register} error={errors.insuranceValidDate} />

              <FormFieldInput defaultValue={data?.vehicle?.tax} label="Tax" type="text" name="tax" register={register} error={errors.tax} />

           
              <FormFieldInput  defaultValue={taxValidTill} label=" Tax Validity Date" type="datetime-local" name="taxValidityDate" register={register} error={errors.taxValidityDate} /> 

         
              <FormFieldInput defaultValue={data?.vehicle?.fitness} label="Fitness" type="text" name="fitness" register={register} error={errors.fitness} />

        
              <FormFieldInput defaultValue={data?.vehicle?.fitnessPermit} label="Fitness Permit" type="text" name="fitnessPermit" register={register} error={errors.fitnessPermit} />

        
              <FormFieldInput defaultValue={data?.vehicle?.engineNo} label="Engine Number" type="text" name="engineNumber" register={register} error={errors.engineNumber} />

        
              <FormFieldInput defaultValue={data?.vehicle?.chassisNo} label="Chassis No" type="text" name="chassisNo" register={register} error={errors.chassisNo} />

              <FormFieldInput defaultValue={data?.vehicle?.inspectionLink} label="Inspection Link" type="text" name="inspectionLink" register={register} error={errors.inspectionLink} />

          
              <FormFieldInput  defaultValue={data?.vehicle?.autobseContact} label="Autobse Contact" type="text" name="autobseContact" register={register} error={errors.autobseContact} />

         
             
              <FormFieldInput defaultValue={data?.vehicle?.autobse_contact_person} label="Autobse Contact Person" type="text" name="autobse_contact_person" register={register} error={errors.autobse_contact_person} />

          
              <FormFieldInput defaultValue={data?.vehicle?.vehicleCondition} label="Vehicle Condition" type="text" name="vehicleCondition" register={register} error={errors.vehicleCondition} />

        
       
              <FormFieldInput defaultValue={data?.vehicle?.powerSteering} label="Power Steering" type="text" name="powerSteering" register={register} error={errors.powerSteering} />

              <FormFieldInput  defaultValue={data?.vehicle?.shape} label="Shape" type="text" name="shape" register={register} error={errors.shape} />

              <FormFieldInput defaultValue={data?.vehicle?.color} label="Color" type="text" name="color" register={register} error={errors.color} />

      
              <FormFieldInput  defaultValue={data?.vehicle?.state} label="State" type="text" name="state" register={register} error={errors.state} />

            
            
              <FormFieldInput defaultValue={data?.vehicle?.city} label="City" type="text" name="city" register={register} error={errors.city} />

        
              <FormFieldInput defaultValue={data?.vehicle?.area} label="Area" type="text" name="area" register={register} error={errors.area} />

              <FormFieldInput defaultValue={data?.vehicle?.paymentTerms} label="Payment Terms" type="text" name="paymentTerms" register={register} error={errors.paymentTerms} />

             
        
           
              <FormFieldInput defaultValue={registrationValidTill} label="Date of Registration" type="datetime-local" name="dateOfRegistration" register={register} error={errors.dateOfRegistration} />

        
             
              <FormFieldInput  defaultValue={data?.vehicle?.hypothication} label="Hypothication" type="text" name="hypothication" register={register} error={errors.hypothication} />

              <FormFieldInput defaultValue={data?.vehicle?.climateControl} label="Climate Control" type="text" name="climateControl" register={register} error={errors.climateControl} />

          
              
              <FormFieldInput  defaultValue={data?.vehicle?.doorCount} label="Door Count" type="number" name="doorCount" register={register} error={errors.doorCount} />

             
              <FormFieldInput defaultValue={data?.vehicle?.gearBox} label="Gear Box" type="text" name="gearBox" register={register} error={errors.gearBox} />

          

              <FormFieldInput defaultValue={data?.vehicle?.buyerFees} label="Buyer Fees" type="text" name="buyerFees" register={register} error={errors.buyerFees} />

             
              <FormFieldInput  defaultValue={data?.vehicle?.rtoFine} label="RTO fine" type="text" name="rtoFine" register={register} error={errors.rtoFine} />

       
              
              <FormFieldInput defaultValue={data?.vehicle?.parkingRate} label="parking Rate" type="text" name="parkingRate" register={register} error={errors.parkingRate} />

              
              <FormFieldInput defaultValue={data?.vehicle?.approxParkingCharges} label="Approx Parking Charges" type="text" name="approxParkingCharges" register={register} error={errors.approxParkingCharges} />

           
        
              
              <FormFieldInput  defaultValue={data?.vehicle?.clientContactPerson} label="Client Contact Person" type="text" name="clientContactPerson" register={register} error={errors.clientContactPerson} />

             
              <FormFieldInput defaultValue={data?.vehicle?.clientContactNo} label=" Client Contact No" type="text" name="clientContactNo" register={register} error={errors.clientContactNo} />


              <FormFieldInput defaultValue={data?.vehicle?.additionalRemarks} label="Additional Remarks" type="text" name="AdditionalRemarks" register={register} error={errors.AdditionalRemarks} />

          
              <FormFieldInput  defaultValue={data?.vehicle?.auctionManager} label="Auction Manager" type="text" name="auctionManager" register={register} error={errors.auctionManager} />

              <FormFieldInput  defaultValue={data?.vehicle?.lotNumber} label="Lot Number" type="number" name="lotNumber" register={register} error={errors.lotNumber} />

           
             </div>
        
            <ImageMaping images={images}/>

     
            <textarea
  defaultValue={formatTextAreaValue(data?.vehicle?.frontImage)}
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
