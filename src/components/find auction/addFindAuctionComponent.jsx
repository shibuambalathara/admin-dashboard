import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { formStyle, headerStyle, inputStyle } from '../utils/style';
import { useInstitutionsQuery, useStatesQuery } from '../../utils/graphql';
import { FormFieldInput, SelectInput, TextAreaInput } from '../utils/formField';
import {  propertyType } from '../utils/constantValues';
import storage from '../firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import imageCompression from 'browser-image-compression';
import watermark from 'watermarkjs';

const AddFindAuctionComponent = () => {
 
  const [files, setFiles] = useState([]);

  const [downloadUrls, setDownloadUrls] = useState([]);

  const handleChange=(event)=> {
    const selectedFiles = event.target.files;
    const fileArray = Array.from(selectedFiles);
    setFiles(fileArray)
}

    const {data,loading}=useInstitutionsQuery()
    const{data:state}=useStatesQuery()
    console.log("state",state)
    const {
        register,
        handleSubmit,
      
        formState: { errors },
      } = useForm();
      const onSubmit = async (dataOnSubmit) => {
        console.log("file", files)
        console.log('data on submit', dataOnSubmit);
    
       
       
      };
    
     useEffect(()=>{
        if(files.length>0){

            HandleUpload1(files,  setDownloadUrls)  
        }
     },[files])

      if(loading){<div>Loading...</div>}
  return (
    <div>
     <div className={`${headerStyle.data}`}>
        <h2 className="text-xl py-3 leading-3 font-bold text-gray-900">
       ADD AUCTION DETAILS
        </h2>
      </div>
      
         <form onSubmit={handleSubmit(onSubmit)} className="  w-full my-5">
         <div className={`${formStyle.data}`}>
    <div>
      <label>Institution Name</label>
         <select  className={`${inputStyle.data}`} {...register("institutionName", {})}>
            <option>Select Institution</option>
          {data?.institutions?.map((institution)=><option value={institution?.name}>{institution.name}</option>)}
         </select>
         </div>
               <SelectInput label="Property Type" options={propertyType} name="propertyType"   register={register}/> 
               <FormFieldInput label="Emd Submission Date" type="datetime-local" name="emdSubmissionDate" register={register} error={errors.emdSubmissionDate} />
               <FormFieldInput label="Auction Start Date" type="datetime-local" name="AuctionStartDate" register={register} error={errors.AuctionStartDate} />
               <FormFieldInput label="Auction End Date" type="datetime-local" name="AuctionEndDate" register={register} error={errors.AuctionEndDate} />
               <FormFieldInput label="Reserve Price" type="number" name="ReservePrice" register={register} error={errors.ReservePrice} />
               <FormFieldInput label="Contact Number" type="number" name="ContactNumber" register={register} error={errors.ContactNumber} />
               <FormFieldInput label="City" type="input" name="City" register={register} error={errors.City} />


        <div>
               <label>State</label>
          <select  className={`${inputStyle.data}`} {...register("StateName", {})}>
          <option>Select State</option>
         {state?.states.map((institution)=><option value={institution?.name}>{institution.name}</option>)}
         </select>
         </div>
               <TextAreaInput  label="Address" type="text" name="Address" register={register} error={errors.Address} />
               <div>
          <label>Document</label>
          <input
        type="file"
        className={`${inputStyle.data}`}
        onChange={handleChange}
        accept="/image/*"
        multiple // Allow selecting multiple files
      />
   
          {downloadUrls.length>0 &&
        <>
        
          <p>URLs:</p>
         
            <div>
            <textarea {...register('document')}
            className="w-full border-2 border-solid border-black h-36 "
            value={downloadUrls}
            readOnly
          ></textarea>
            </div>
            <img src={downloadUrls}/>
        </>
      }
        </div>

         </div>
         <div className="text-center">
            <button className="btn btn-success my-5"> Add Auction</button>
            </div>
         </form>
        

    </div>
  )
}

export default AddFindAuctionComponent


const HandleUpload1 = async (files, setDownloadUrls) => {
    if (!files || files.length === 0) {
      alert('Please upload at least one image!');
      return;
    }
  
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };
  console.log("ff",files)
      const uploadTasks = files.map(async (file) => {
     //   const compressedFile = await imageCompression(file, options);
  
        // Add watermark text using watermark.js
      
      });
      const watermarkText = 'Your Watermark Text'; // Customize the watermark text
      const watermarkedImage = watermark([files[0], watermarkText])
        .image(watermark.text.lowerLeft(10)) // Adjust watermark position
        .then((img) => img.src);

      // Collect the results in an array
   
  
      // Wait for all the promises to resolve
    
  
      // Set the downloadUrls in state
      console.log("dl",watermarkedImage)
      setDownloadUrls(watermarkedImage);
    } catch (err) {
      console.log('err', err);
    }
  };



//  const HandleUpload1 = async (files, setFiles, setDownloadUrls) => {
//   if (!files || files.length === 0) {
//     alert("Please upload at least one image!");
//     return;
//   }

//   try {
//     const options = {
//       maxSizeMB: 1,
      
//       maxWidthOrHeight: 800,
//       useWebWorker: true,
//     };

//     const compressedFiles = await Promise.all(
//       files.map(async (file) => {
//         const compressedFile = await imageCompression(file, options);
//         return compressedFile;
//       })
//     );

//     const uploadTasks = compressedFiles.map((file) => {
//       const storageRef = ref(storage, `/files/${file.name + v4()}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       return new Promise((resolve, reject) => {
//         uploadTask.on(
//           "state_changed",
     
//           async () => {
//             const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//             resolve(downloadURL);
//           }
//         );
//       });
//     });

//     Promise.all(uploadTasks)
//       .then((urls) => {
//         const urlsString = urls.join(', ');
//         setDownloadUrls(urlsString);
//         setFiles([]); // Clear the selected files after successful upload
       
//       })
//       .catch((error) => {
//         console.error("Error uploading images:", error);
//       });
//   } catch (error) {
//     console.error("Error compressing or uploading images:", error);
//   }
// };

// const HandleUpload1 = async (files, setFiles, setDownloadUrls) => {
//   if (!files || files.length === 0) {
//     alert("Please upload at least one image!");
//     return;
//   }

//   try {
//     const options = {
//       maxSizeMB: 1,
//       maxWidthOrHeight: 800,
//       useWebWorker: true,
//     };

//     const uploadTasks = files.map(async (file) => {
//       const compressedFile = await imageCompression(file, options);

//       // Add watermark text using watermark.js
//       const watermarkText = "Your Watermark Text"; // Customize the watermark text
//       const watermarkedImage = watermark([compressedFile, watermarkText])
//         .image(watermark.text.lowerLeft(10)) // Adjust watermark position
//         .then((img) => img.src);

//       const storageRef = ref(storage, `/files/${compressedFile.name + v4()}`);
//       const uploadTask = uploadBytesResumable(storageRef, watermarkedImage);

//       return new Promise((resolve, reject) => {
//         uploadTask.on("state_changed", async () => {
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//           resolve(downloadURL);
//         });
//       });
//     });

//     Promise.all(uploadTasks)
//       .then((urls) => {
//         // Now you have an array of download URLs
//         // You can do whatever you need with these URLs
//         console.log("Download URLs:", urls);
//         setFiles([]); // Clear the selected files after successful upload
//         setDownloadUrls(urls); // Set the download URLs in your state or component
//       })
//       .catch((error) => {
//         console.error("Error uploading images:", error);
//       });
//   } catch (error) {
//     console.error("Error compressing or uploading images:", error);
//   }
// };
