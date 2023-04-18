import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCreateExcelUploadMutation } from "../../utils/graphql";
import { ShowPopup } from "../alerts/popUps";
const ExcelUploadsComponent = () => {
  // const [vehicles,setVehicles]=useState([])
  const { id } = useParams();
  const [create, { data }] = useCreateExcelUploadMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (dataOnSubmit) => {
    console.log(dataOnSubmit);

   try {
     const excel = {
       file: { upload: dataOnSubmit?.uploadFile[0] },
       name: dataOnSubmit?.uploadFileName,
       event: { connect: { id: id } },
     };
     create({ variables: { data: excel } });
     ShowPopup(
      "Success!",
      `${dataOnSubmit?.uploadFileName} Excel File Added successfully!`,
      "success",
      5000,
      true
    );
   } catch (error) {
    console.log("error in excel uploads",error.message);
    ShowPopup(
      "Failed!",
      `${error.message} `,
      "error",
      5000,
      true
    );
   }
  };

  if (data) {
    console.log(data?.createExcelUpload?.vehicles, "data............");
    // setVehicles([data?.createExcelUpload?.vehicles?.registrationNumber])
  }


  const customStyles = {
    control: (provided,state) => ({
      ...provided,
      backgroundColor: '#E0E0E0',
      color: 'white',
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
      '&:hover': {
        backgroundColor: 'white',
        cursor: 'pointer',
        outline: 'none',
        border:"none"
      }
      
    }), 
  };

  return (
    <div className="w-full h-fit py-20 ">
     
      <div className="  max-w-5xl mx-auto  flex flex-col bg-stale-200  border-1 bg-slate-100">
      <div className=" max-w-5xl  bg-slate-200 py-8 flex justify-center items-center">
        <h1 className="font-bold ">ADD EXCEL</h1>
      </div>
      <div className="mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5 space-x-5">
          <div className="flex flex-col ml-5">
            <label>File Name</label>
            <input
             className="max-w-[560px] bg-gray-200 border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700 hover:bg-white "
              type="text"
              {...register("uploadFileName", { required: true })}
            ></input>
            <p className="text-red-500">
              {" "}
              {errors.uploadFileName && <span>Downloadable file required</span>}
            </p>
          </div>
          <div className="flex flex-col">
          <label>Upload file</label>
          <input
            type="file"
            {...register("uploadFile", { required: true })}
            className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "
          ></input>
          <p className="text-red-500">
            {" "}
            {errors.uploadFile && <span>Downloadable file required</span>}
          </p>
          </div>
          <div className=" flex  mt-5 mb-5">
            <button className="btn btn-success px-10"> Save </button>
          </div>
          </div>
        </form>
        </div>
 
      </div>
    </div>
  );
};

export default ExcelUploadsComponent;