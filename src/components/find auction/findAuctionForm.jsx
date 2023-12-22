

import { formStyle, headerStyle,inputStyle } from '../utils/style';
import {  useInstitutionsQuery, useStatesQuery } from '../../utils/graphql';
import { FormFieldInput, SelectInput, SelectWithDynamic, TextAreaInput } from '../utils/formField';
import {  propertyType } from '../utils/constantValues';
import storage from '../firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL, updateMetadata } from "firebase/storage";
import imageCompression from 'browser-image-compression';

import { DateConvert } from '../utils/dateFormat';

import { useEffect, useState } from 'react';


const FindAuctionComponent = ({passedData,onSubmit,useForm,setDownloadUrl}) => {
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm();
  const{data:state}=useStatesQuery()
  const {data,loading}=useInstitutionsQuery()
  const [percent, setPercent] = useState(0);
  const [downloadUrls, setDownloadUrls] = useState('');
  // const [downloadUrl, setDownloadUrl] = useState(""); 

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
if(file){
  
  const options = {
    maxSizeMB: 0.1, 
    // maxWidthOrHeight: 1920,
    useWebWorker: true, 
  };

  // Compress the selected image
  // const compressedFile = await imageCompression(file, options);
HandleUpload1(file,setDownloadUrls,setDownloadUrl)
}
    
  
  
   };
 
  useEffect(()=>{
    if(passedData){
      setDownloadUrls(passedData[0]?.auctionNotice)
    }
  },[])



      if(loading){<div>Loading...</div>}
  return (
    <div>
     
      
         <form onSubmit={handleSubmit(onSubmit)} className="  w-full my-5">
         <div className={`${formStyle.data}`}>
  

               <SelectWithDynamic  label="Institution Name"  mappingLabel='name' mappingValue='id' options={data?.institutions} name="institutionId" defaultValue={passedData ? passedData[0]?.institution_details?.id :''} defaultLabel={passedData ? passedData[0]?.institution_details?.name:"Select Institution"}    register={register} error={errors.institutionId}/>
               <SelectInput label="Property Type" defaultValue={passedData ?passedData[0]?.propertyType:''} options={propertyType} name="propertyType"   register={register} error={errors.propertyType}/> 
               <FormFieldInput label="Emd Submission Date" type="datetime-local" name="emdSubmissionDate" defaultValue={passedData && passedData[0]?.emdSubmissionDate && DateConvert( passedData[0]?.emdSubmissionDate)} register={register} error={errors.emdSubmissionDate} />
               <FormFieldInput label="Auction Start Date" type="datetime-local" name="AuctionStartDate" defaultValue={passedData && passedData[0]?.auctionStartDate && DateConvert( passedData[0]?.auctionStartDate)} register={register} error={errors.AuctionStartDate} />
               <FormFieldInput label="Auction End Date" type="datetime-local" name="AuctionEndDate" defaultValue={passedData && passedData[0]?.auctionEndDate && DateConvert( passedData[0]?.auctionEndDate)} register={register} error={errors.AuctionEndDate} />
               <FormFieldInput label="Reserve Price" type="number" name="ReservePrice"  defaultValue={passedData && passedData[0]?.reservePrice } register={register} error={errors.ReservePrice} />
               <FormFieldInput label="Emd Amount" type="number" name="emdAmount" defaultValue={passedData && passedData[0]?.emdAmount } register={register} error={errors.emdAmount} />
               <FormFieldInput label="Register Number" type="text" name="regNumber" defaultValue={passedData && passedData[0]?.vehicleRegNo } register={register} error={errors.regNumber} />
               <FormFieldInput label="Contact Number" type="number" name="ContactNumber"  defaultValue={passedData && passedData[0]?.contactDetails } register={register} error={errors.ContactNumber} />
               <FormFieldInput label="City" type="input" name="City" defaultValue={passedData && passedData[0]?.city } register={register} error={errors.City} />
               <SelectWithDynamic label="State"  mappingLabel='name' mappingValue='id' options={state?.states} name="StateId" defaultValue={passedData ? passedData[0]?.state?.id:''} defaultLabel={passedData ? passedData[0]?.state?.name:"Select  State"}    register={register} error={errors.StateId}/>
               <TextAreaInput  label="Address" type="text" name="Address" defaultValue={passedData && passedData[0]?.address } register={register} error={errors.Address} />
               <div>
        <label>Document</label>
        <input
          type="file"
          className={`${inputStyle.data}`}
          onChange={handleFileChange} 
          accept="/image/*"
          multiple
        />

        {/* {downloadUrls.length>0 && */}
        <>
     
     


          {/* <div>
            <textarea
              {...register('document',{})}
              className={`${inputStyle.data}`}
               defaultValue={downloadUrls}
              readOnly
            ></textarea>
          </div> */}
      
           <img src={downloadUrls} alt='img'/> 
        </>
      </div>

         </div>
         <div className="text-center">
           {!passedData ? <button className="btn btn-success my-5"> Add Auction</button>: <button className="btn bg-red-500 my-5"> Edit Auction</button>}
            </div>
         </form>
        

    </div>
  )
}

export default FindAuctionComponent


const HandleUpload1 = async (file, setDownloadUrls, setDownloadUrl) => {
  if (!file) {
    alert("Please upload an image first!");
    return;
  }

  const storageRef = ref(storage, `/files/${file.name+ v4()}`);
  const uploadTask = uploadBytesResumable(storageRef, file);


  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      // setPercent(percent);
    },
    (err) => console.log(err),
    async () => {
      try {
        // Update metadata to specify content type as image/jpeg
        const metadata = {
          contentDisposition: 'attachment',
          contentType: file.type,
        };
        await updateMetadata(storageRef, metadata);

        // Get the download URL
        const url = await getDownloadURL(storageRef);

        // Update the state with the download URL
        setDownloadUrls(url);
        setDownloadUrl(url);
      } catch (error) {
        alert(error)
        console.error("Error updating metadata or getting download URL:", error);
      }
    }
  );
};



