import { useState } from "react";
 import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid'
function ImageUpload() {
  // State to store uploaded file
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  const [firbaseUrl,setFirbaseUrl]=useState()
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload =async () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    console.log(file,"file")
    const storageRef = ref(storage, `/files/${file.name+v4()}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url,"fdfd");
          setFirbaseUrl(url)
          console.log("firebase ur",firbaseUrl)
        });
      }
    );
  };
  return (
    <div className="w-full flex justify-center flex-col space-y-5 m-10">
 
   <h1 className="font-bold text-lg flex text-center  ">Choose  Image</h1>
      <input type="file"  className="w-fit py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" onChange={handleChange} accept="/image/*" />
      {file && 
       <>
       <button className="btn w-fit bg-red-500" onClick={handleUpload}>Upload to Firebase</button>
     
    <p>{percent} "% done"</p>
    </>}
    {firbaseUrl && 
    <>
   
    <p>URL   :</p>
    <textarea className="w-full border-2 border-solid border-black h-36 p-1"  value={firbaseUrl}></textarea>
    <img className="w-2/5" src={firbaseUrl} alt="firbaase url"/>
    </>
    }

    </div>
  );
}
export default ImageUpload;
