

import { formStyle, headerStyle, inputStyle } from '../utils/style';
import {  useInstitutionsQuery, useStatesQuery } from '../../utils/graphql';
import { FormFieldInput, SelectInput, SelectWithDynamic, TextAreaInput } from '../utils/formField';
import {  propertyType } from '../utils/constantValues';
import storage from '../firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import imageCompression from 'browser-image-compression';

import { DateConvert } from '../utils/dateFormat';
import watermark from 'watermarkjs';
import { useEffect, useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';


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
    maxWidthOrHeight: 1920,
    useWebWorker: true, 
  };

  // Compress the selected image
  const compressedFile = await imageCompression(file, options);
HandleUpload1(compressedFile,setDownloadUrls,setDownloadUrl)
}
    
  
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       const img = new Image();
    //       img.src = reader.result;
  
    //       img.onload =async () => {
    //         const canvas = document.createElement('canvas');
    //         const ctx = canvas.getContext('2d');
    
    //         // Set canvas dimensions to match the image
    //         canvas.width = img.width;
    //         canvas.height = img.height;
    
    //         // Draw the image on the canvas
    //         ctx.drawImage(img, 0, 0);
    
    //         // Add watermark text
    //         const watermarkText = 'AutoBse.com';
    //         ctx.font = '24px Arial';
    //         ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Adjust text color and opacity
    
    //         // Calculate text width and height
    //         const textWidth = ctx.measureText(watermarkText).width;
    //         const textHeight = 24; // Adjust the text height as needed
    
    //         // Calculate the angle in radians (45 degrees)
    //         const angleInRadians = (-60 * Math.PI) /180;
    
    //         // Calculate the position for the text
    //         const centerX = canvas.width / 2;
    //         const centerY = canvas.height / 2;
    //         const xOffset = (textHeight / Math.sqrt(2)) * Math.cos(angleInRadians) * 0.5;
    //         const yOffset = (textHeight / Math.sqrt(2)) * Math.sin(angleInRadians) * 0.5;
    
    //         // Rotate and draw the text at the calculated position (centered)
    //         ctx.translate(centerX, centerY);
    //         ctx.rotate(angleInRadians);
    //         ctx.fillText(watermarkText, -textWidth / 2 + xOffset, textHeight / 2 - yOffset);
    
    //         // Convert the canvas to a data URL (base64)
    //         const watermarkedImageSrc = canvas.toDataURL('image/jpeg');

    //         // Convert base64 to a File object
    //         // const convertedFile =await base64ToBlob(watermarkedImageSrc, 'image/jpeg', 'watermarked.jpg');
  
    //         // Upload the File
    //           HandleUpload(watermarkedImageSrc);
    //          console.log("converted file",watermarkedImageSrc)
    //         //  setDownloadUrls(watermarkedImageSrc)
    //       };
    //     };
    //     reader.readAsDataURL(file);
    // }
   };
  // const HandleUpload = async (file) => {
  //   if (!file) {
  //     alert("Please upload an image first!");
  //     return;
  //   }

  //   const storageRef = ref(storage, `/files/${file.name + v4()}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const percent = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       // You can set the upload progress if needed
  //       // setPercent(percent);
  //     },
  //     (err) => console.error(err),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //         // Store the download URL in state or do something with it
  //         setDownloadUrls([url]);
  //       });
  //     }
  //   );
  // };




  // const base64ToBlob = (base64Data, mimeType, fileName) => {
  //   const byteCharacters = atob(base64Data);
  //   const byteArrays = [];

  //   for (let offset = 0; offset < byteCharacters.length; offset += 512) {
  //     const slice = byteCharacters.slice(offset, offset + 512);
  //     const byteNumbers = new Array(slice.length);

  //     for (let i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }

  //     const byteArray = new Uint8Array(byteNumbers);
  //     byteArrays.push(byteArray);
  //   }

  //   const blob = new Blob(byteArrays, { type: mimeType });
  //   return new File([blob], fileName, { type: mimeType });
  // };
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
          onChange={handleFileChange} // Call the handleFileChange function when a file is selected
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
          {console.log("file",downloadUrls)}
           <img src={downloadUrls} alt='img'/> 
        </>
      </div>
{console.log("download urls",downloadUrls)}
         </div>
         <div className="text-center">
           {!passedData ? <button className="btn btn-success my-5"> Add Auction</button>: <button className="btn bg-red-500 my-5"> Edit Auction</button>}
            </div>
         </form>
        

    </div>
  )
}

export default FindAuctionComponent


const HandleUpload1 = async (file,setDownloadUrls,setDownloadUrl ) => {
  if (!file) {
    alert("Please upload an image first!");
  }
  const storageRef = ref(storage, `/files/${file.name + v4()}`);
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
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setDownloadUrls(url);
         setDownloadUrl(url); 
      });
    }
  );
};



