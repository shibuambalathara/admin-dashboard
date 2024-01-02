import React from 'react'
import storage from '../firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL, updateMetadata } from "firebase/storage";
import { inputStyle } from '../utils/style'


export const DocumentUpload = ({label,setState}) => {





    

  const HandleUpload = async (event) => {
      console.log("event",event);
    const file = event.target.files[0];
    console.log("file",file);
  if (!file) {
    alert("Please upload a file first!");
    return;
  }

  // Generate a unique identifier for the file
  const fileId = v4();

  // Use the generated identifier as part of the storage path
  const storagePath = `/files/${fileId}_${file.name}`;

  const storageRef = ref(storage, storagePath);
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

        
        // Update metadata to specify content type
        const metadata = {
          contentDisposition: 'attachment',
          contentType: file.type,
        };
        await updateMetadata(storageRef, metadata);

        // Get the download URL
        const url = await getDownloadURL(storageRef);

        // Update the state with the download URL
        console.log("url",);
        setState(url);
      } catch (error) {
        alert(error);
        console.error("Error updating metadata or getting download URL:", error);
      }
    }
  );
};

      


    return (
        <div>
        <label>{label}</label>
        <input
          type="file"
          className={`${inputStyle.data}`}
          onChange={HandleUpload} 
          accept="/image/*"
          multiple
        />
   
      </div>
      )
}

