import React from 'react'
import ImageUpload from '../components/imageUpload/imageUpload'
import ImageUploadDrag from '../components/imageUpload/imageDragAndDrop'

const Image_upload = () => {
  return (
    <div className='w-full space-y-5 m-10 shadow-lg  '>
     <h1 className="font-bold text-lg flex  text-center justify-center   " >Upload Image</h1>
    <div className=' flex justify-between '>
  
        <ImageUpload/>
        
        <ImageUploadDrag/>
      
    </div>
    </div>
  )
}

export default Image_upload