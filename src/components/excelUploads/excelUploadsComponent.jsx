import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import {useCreateExcelUploadMutation} from '../../utils/graphql'
const ExcelUploadsComponent = () => {

// const [vehicles,setVehicles]=useState([])
  const{id}=useParams()
  const [create,{data}]=useCreateExcelUploadMutation()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = dataOnSubmit => {console.log(dataOnSubmit);

  const excel={
    file:{upload:dataOnSubmit?.uploadFile[0]},
    name:dataOnSubmit?.uploadFileName,
    event:{connect:{id:id}},

   
  }
  create({variables:{data:excel}})
}
if(data){
  console.log(data?.createExcelUpload?.vehicles ,"data............")
  // setVehicles([data?.createExcelUpload?.vehicles?.registrationNumber])

}


  return (
   

<div className="flex flex-col items-start  ">
<form onSubmit={handleSubmit(onSubmit)}>
              <label>File Name</label>
              <input type="text"  {...register("uploadFileName",{required:true})} ></input>
              <p className="text-red-500"> {errors.uploadFileName&& <span>Downloadable file required</span>}</p> 
                <label>Upload file</label>
                <input type="file"
                  {...register("uploadFile",{required:true})}
                 className="  btn btn-outline btn-success border border-1 border-lime-800 text-black rounded  px-10 m-2 bg-slate-200"></input>
              <p className="text-red-500"> {errors.uploadFile&& <span>Downloadable file required</span>}</p> 
              <div className=" flex space-x-10">
                <button className="btn btn-success"> Save </button>
               
              </div>
              </form>
            <Select className='w-full text-black'  options= {data?.createExcelUpload?.vehicles.map((vehicle)=>({label:vehicle.registrationNumber}))} isMulti/> 
          
    </div>
  )
}

export default ExcelUploadsComponent