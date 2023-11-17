
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCreateVehicleMutation,useEventStartTimeQuery } from "../../utils/graphql";
import { ShowPopup } from '../alerts/popUps';
import {FormFieldInput, SelectInput, TextAreaInput} from "../utils/formField";
import { bidStatusOptions } from "../utils/constantValues";
import { formStyle, h2Style, headerStyle, pageStyle } from "../utils/style";

const AddVehicleComponent = () => {

  const {id}=useParams()
  const[createVehicle]=useCreateVehicleMutation()
  const{data}=useEventStartTimeQuery({variables:{where:{id:id}}})
  const { register, handleSubmit,control, watch, formState: { errors } } = useForm();

  const onSubmit = dataOnSubmit =>{ 



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
  categoty:dataOnSubmit?.category,
  fuel:dataOnSubmit?.fuel,
  type:dataOnSubmit?.type,
  rcStatus:dataOnSubmit?.rcStatus,
  yearOfManufacture:+dataOnSubmit?.yearOfManuFacture || null,
   ownership:+dataOnSubmit?.Ownership || null,
  mileage:+dataOnSubmit?.mileage|| null,
  kmReading:+dataOnSubmit?.kmReading|| null,
  insuranceStatus:dataOnSubmit?.insuranceStatus,
  yardLocation:dataOnSubmit?.yardLocation,
  startPrice:+dataOnSubmit?.startPrice?? 0,
  startBidAmount:+dataOnSubmit?.startPrice?? 0,
  reservePrice:+dataOnSubmit?.reservePrice || null,
   repoDt:repo || null,
  veicleLocation:dataOnSubmit?.vehicleLocation,
  vehicleRemarks:dataOnSubmit?.vehicleRemarks,
  auctionManager:dataOnSubmit?.auctionManager,
  parkingCharges:dataOnSubmit?.parkingCharge,
  insurance:dataOnSubmit?.insurance,

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
    
    vehicleCondition:dataOnSubmit?.vehicleCondition,
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
  autobse_contact_person:dataOnSubmit?.autobse_contact_person
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
    <div className={`${pageStyle.data}`}>
    
    <div className={`${headerStyle.data}`}>
        <h2  className={`${h2Style.data}`}>
       ADD VEHICLE
        </h2>
      </div>
      <div className="   h-full  mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${formStyle.data}`}>
          
       
            <FormFieldInput label="Registration" type="text" name="regNo" register={register} error={errors.regNo} required/>
            <SelectInput label="Bid Status" name="bidStatus" defaultValue='pending' options={bidStatusOptions} register={register}/>
            <FormFieldInput label="Loan Agreement number" type="text" name="loanANum" register={register} error={errors.loanANum} required/>
            <FormFieldInput label="Registered Owner Name" type="text" name="regOwnerName" register={register} error={errors.regOwnerName} />
            <FormFieldInput label="Quote Increment" type="number" defaultValue='1000' name="quoteInc" register={register} error={errors.quoteInc} />
            <FormFieldInput label="Vehicle Company Name" type="text" name="vehicleCompanyName" register={register} error={errors.vehicleCompanyName} />
            <FormFieldInput label="Model" type="text" name="model" register={register} error={errors.model} />
            <FormFieldInput label="Varient" type="text" name="varient" register={register} error={errors.varient} />
            <FormFieldInput label="Category" type="text" name="category" register={register} error={errors.category} />
            <FormFieldInput label="Fuel" type="text" name="fuel" register={register} error={errors.fuel} />
            <FormFieldInput label="Type" type="text" name="type" register={register} error={errors.type} />
            <FormFieldInput label="Rc status" type="text" name="rcStatus" register={register} error={errors.rcStatus} />          
            <FormFieldInput label="Year Of Manufacture" type="number" name="yearOfManuFacture" register={register} error={errors.yearOfManuFacture} />
            <FormFieldInput label="Ownership" type="number" name="Ownership" register={register} error={errors.Ownership} />
            <FormFieldInput label="Mileage" type="number" name="mileage" register={register} error={errors.mileage} />
            <FormFieldInput label="Km Reading" type="number" name="kmReading" register={register} error={errors.kmReading} />
            <FormFieldInput label="Insurance Status" type="text" name="insuranceStatus" register={register} error={errors.insuranceStatus} />
            <FormFieldInput label="Yard Location" type="text" name="yardLocation" register={register} error={errors.yardLocation} />
            <FormFieldInput label="Start Price" type="number" name="startPrice" register={register} error={errors.startPrice} />
            <FormFieldInput label="Reserve price" type="number" name="reservePrice" register={register} error={errors.reservePrice} />
            <FormFieldInput label="Repo Date" type="datetime-local" name="repoDate" register={register} error={errors.repoDate} />
             <FormFieldInput label="Vehicle Remarks" type="text" name="vehicleRemarks" register={register} error={errors.vehicleRemarks} />
            <FormFieldInput label="Vehicle Locaction" type="text" name="vehicleLocation" register={register} error={errors.vehicleLocation} />
            <FormFieldInput label="Parking Charges" type="text" name="parkingCharge" register={register} error={errors.parkingCharge} />
            <FormFieldInput label=" Permit" type="text" name="permit" register={register} error={errors.permit} />
            <FormFieldInput label="Insurance" type="text" name="insurance" register={register} error={errors.insurance} />
            <FormFieldInput label=" Insurance valid Till" type="datetime-local" name="insuranceValidDate" register={register} error={errors.insuranceValidDate} />
              <FormFieldInput label="Tax" type="text" name="tax" register={register} error={errors.tax} />
              <FormFieldInput label=" Tax Validity Date" type="datetime-local" name="taxValidityDate" register={register} error={errors.taxValidityDate} /> 
              <FormFieldInput label="Fitness" type="text" name="fitness" register={register} error={errors.fitness} />
              <FormFieldInput label="Fitness Permit" type="text" name="fitnessPermit" register={register} error={errors.fitnessPermit} />
              <FormFieldInput label="Engine Number" type="text" name="engineNumber" register={register} error={errors.engineNumber} />
              <FormFieldInput label="Vehicle Condition" type="text" name="vehicleCondition" register={register} error={errors.vehicleCondition} />
              <FormFieldInput label="Chassis No" type="text" name="chassisNo" register={register} error={errors.chassisNo} />
              <FormFieldInput label="Power Steering" type="text" name="powerSteering" register={register} error={errors.powerSteering} />
              <FormFieldInput label="Shape" type="text" name="shape" register={register} error={errors.shape} />
              <FormFieldInput label="Color" type="text" name="color" register={register} error={errors.color} />
              <FormFieldInput label="State" type="text" name="state" register={register} error={errors.state} />
              <FormFieldInput label="City" type="text" name="city" register={register} error={errors.city} />
              <FormFieldInput label="Area" type="text" name="area" register={register} error={errors.area} />
              <FormFieldInput label="Payment Terms" type="text" name="paymentTerms" register={register} error={errors.paymentTerms} />
              <FormFieldInput label="Date of Registration" type="datetime-local" name="dateOfRegistration" register={register} error={errors.dateOfRegistration} />
              <FormFieldInput label="Hypothication" type="text" name="hypothication" register={register} error={errors.hypothication} />
              <FormFieldInput label="Climate Control" type="text" name="climateControl" register={register} error={errors.climateControl} />
              <FormFieldInput label="Door Count" type="number" name="doorCount" register={register} error={errors.doorCount} />
              <FormFieldInput label="Gear Box" type="text" name="gearBox" register={register} error={errors.gearBox} />
              <FormFieldInput label="Buyer Fees" type="text" name="buyerFees" register={register} error={errors.buyerFees} />
              <FormFieldInput label="RTO fine" type="text" name="rtoFine" register={register} error={errors.rtoFine} />
              <FormFieldInput label="parking Rate" type="text" name="parkingRate" register={register} error={errors.parkingRate} />
              <FormFieldInput label="Approx Parking Charges" type="text" name="approxParkingCharges" register={register} error={errors.approxParkingCharges} />
              <FormFieldInput label="Inspection Link" type="text" name="inspectionLink" register={register} error={errors.inspectionLink} />
              <FormFieldInput label="Client Contact Person" type="text" name="clientContactPerson" register={register} error={errors.clientContactPerson} />
              <FormFieldInput label=" Client Contact No" type="text" name="clientContactNo" register={register} error={errors.clientContactNo} />
              <FormFieldInput label="Additional Remarks" type="text" name="AdditionalRemarks" register={register} error={errors.AdditionalRemarks} />
              <FormFieldInput label="Auction Manager" type="text" name="auctionManager" register={register} error={errors.auctionManager} />
              <FormFieldInput label="Autobse Contact Person" type="text" name="autobse_contact_person" register={register} error={errors.autobse_contact_person} />
              <FormFieldInput label="Autobse Contact" type="text" name="autobseContact" register={register} error={errors.autobseContact} />

              </div>
              <TextAreaInput label="Image urls" type="text" name="rightImage" register={register} error={errors.rightImage} />
            <div className="text-center">
            <button className="btn btn-success my-5"> Save Changes</button>
            </div>
      
        </form>
      </div>
     
    </div>
  );
};

export default AddVehicleComponent;
