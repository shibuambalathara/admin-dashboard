import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCreateExcelUploadMutation } from "../../utils/graphql";
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

    const excel = {
      file: { upload: dataOnSubmit?.uploadFile[0] },
      name: dataOnSubmit?.uploadFileName,
      event: { connect: { id: id } },
    };
    create({ variables: { data: excel } });
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


  return (
    <div className="flex flex-col items-start  ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label>Event Id</label>
            <input className="border"
              type="text"
              disabled
              value={id}
              {...register("eventId", { required: true })}
            ></input>
          </div>
          <label>File Name</label>
          <input
            type="text"
            {...register("uploadFileName", { required: true })}
          ></input>
          <p className="text-red-500">
            {" "}
            {errors.uploadFileName && <span>Downloadable file required</span>}
          </p>

          <label>Upload file</label>
          <input
            type="file"
            {...register("uploadFile", { required: true })}

            className="max-w-[560px] border-gray-400 rounded mt-2 py-2 px-2 outline-none shadow text-gray-700  hover:bg-white "

            className="  btn btn-outline btn-success border border-1 border-lime-800 text-black rounded  px-10 m-2 bg-slate-200"

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
        <div className="flex flex-col ml-5 mt-4 mb-5">
          <label>vehicles</label>
        <Select
        styles={customStyles}
          className="w-full text-black max-w-[560px] mt-2"
          options={data?.createExcelUpload?.vehicles.map((vehicle) => ({
            label: vehicle.registrationNumber,
          }))}
          isMulti
        />
        </div>
      </div>

          <div className=" flex space-x-10">
            <button className="btn btn-success"> Save </button>
          </div>
        </div>
      </form>
      <Select
        className="w-full text-black"
        options={data?.createExcelUpload?.vehicles.map((vehicle) => ({
          label: vehicle.registrationNumber,
        }))}
        isMulti
      />

    </div>
  );
};

export default ExcelUploadsComponent;
