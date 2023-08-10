import { useState } from "react";
import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';
function ImageUpload() {
  // State to store uploaded files and their download URLs
  const [files, setFiles] = useState([]);
  const [percent, setPercent] = useState(0);
  const [downloadUrls, setDownloadUrls] = useState([]);

  function handleChange(event) {
    const selectedFiles = event.target.files;
    const fileArray = Array.from(selectedFiles);
    setFiles(fileArray);
  }

  const handleUpload = () => {
    if (!files || files.length === 0) {
      alert("Please upload at least one image!");
      return;
    }

    const uploadTasks = files.map((file) => {
      const storageRef = ref(storage, `/files/${file.name + v4()}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setPercent(percent);
          },
          (err) => {
            console.log(err);
            reject(err);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          }
        );
      });
    });

    Promise.all(uploadTasks)
      .then((urls) => {
        setDownloadUrls(urls);
        setFiles([]); // Clear the selected files after successful upload
        setPercent(0); // Reset the progress bar
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      });
  };

  return (
    <div className="w-full flex justify-center flex-col space-y-5 m-10">
      <h1 className="font-bold text-lg flex text-center  ">Choose Images</h1>
      <input
        type="file"
        className="w-fit py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        onChange={handleChange}
        accept="/image/*"
        multiple // Allow selecting multiple files
      />
      {files.length > 0 &&
        <>
          <button className="btn w-fit bg-red-500" onClick={handleUpload}>Upload to Firebase</button>
          <p>{percent} % done</p>
        </>
      }
      {downloadUrls.length > 0 &&
        <>
          <p>URLs:</p>
          {downloadUrls.map((url, index) => (
            <div key={index}>
              <textarea className="w-full border-2 border-solid border-black h-36 p-1" value={url}></textarea>
              <img className="w-2/5" src={url} alt="firebase url" />
            </div>
          ))}
        </>
      }
    </div>
  );
}

export default ImageUpload;
