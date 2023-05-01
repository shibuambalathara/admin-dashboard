import React, { useEffect, useState } from 'react'
import { useForm,Controller } from "react-hook-form";
import { useParams,useNavigate } from 'react-router-dom';
import{ useSellerEditQuery, useEventTypesQuery, useSellerUpdateMutation, useCreateSellerMutation} from '../../utils/graphql'
import { ShowPopup } from '../alerts/popUps';

import Select from 'react-select'
const AddPayment = () => {
  
  const eventType=useEventTypesQuery()
  const {id}=useParams()

  
   
  const [AddSeller]=useCreateSellerMutation()
 const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    watch,reset,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async(dataOnSubmit) =>{ console.log(dataOnSubmit,"data")
 
  try {
    const result=AddSeller({variables:{data:
     {
       name:dataOnSubmit?.sellerCompanyName,
      //  billingContactPerson:dataOnSubmit?.billingContactPerson,
       contactPerson:dataOnSubmit?.ContactPerson,
       GSTNumbber:dataOnSubmit?.gst,
       mobile:dataOnSubmit?.mobile,
       nationalHead:dataOnSubmit?.nationalHead,
       
    //    vehicleCategory: {
    //      connect: dataOnSubmit?.eventId?.map((event) => ({id: event.value}))
    //    },

     }
     
   }})
    ShowPopup("Success!", `${dataOnSubmit?.sellerCompanyName} Added successfully!`,"success", 5000, true);
    navigate('/sellers')
 } catch (error) {
   console.log("the error in add seller",error);
   ShowPopup("Failed!", `${error?.message}`, "error", 5000, true);
 }



 reset()
 
 }




//   if (loading ) {

//     return <div>Loading............</div>;
//   }
  return (
    <div className="flex flex-col space-y-10 justify-center align-middle w-full bg-gray-50  my-10">
   
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full my-5 space-y-10">
      <h1 className='flex justify-center'>Add Seller </h1> 
         <div className="flex space-x-2 justify-around">
          
            <div className="w-1/3">
              <label htmlFor="">Seller  Name</label>
              <input    type="text" className="input input-bordered input-secondary w-full " {...register("sellerCompanyName", {required:true})}></input>
              <p className="text-red-500"> {errors.sellerCompanyName && <span>Seller Name Required</span>}</p>
            </div>

            <div className="w-1/3">
              <label htmlFor="">Contact Person Name</label>
              <input  type="text" className="input input-bordered input-secondary w-full " {...register("ContactPerson", {})}></input>
              <p className="text-red-500"> {errors.IdNumber && <span>Atleast 8 charators required</span>}</p>
            </div>
            
          </div>
          <div className="flex space-x-2 justify-around">
          
          <div className="w-1/3">
            <label htmlFor="">GST Number</label>
            <input  type="number" className="input input-bordered input-secondary w-full " {...register("gst", {})}></input>
            <p className="text-red-500"> {errors.amount && <span>Amount Required</span>}</p>
          </div>
       
            <div className="w-1/3">
          
            {/* <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  Event Type
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <Controller
  name="eventId"
  control={control}

  render={({ field }) => (
    <Select
      className="w-full text-black max-w-[560px] mt-2"
      options={eventType?.data?.eventTypes?.map((event) => ({
        label: event.name,
        value: event.id
      }))}
      {...field}
      isMulti
      getOptionValue={(option) => option.value}
    />
  )}
/>
               
                <p className="text-red-500"> {errors.event&& <span>Event Name required</span>}</p> 

              </div>            <p className="text-red-500"> {errors.description && <span>Atleast 8 charators required</span>}</p> */}
          </div>
        </div>

          <div className="flex space-x-2 justify-around">
          
          <div className="w-1/3">
            <label htmlFor="">Contact person Mobile</label>
            <input   type="number" className="input input-bordered input-secondary w-full " {...register("mobile", {})}></input>
            <p className="text-red-500"> {errors.amount && <span>Amount Required</span>}</p>
          </div>
       
            <div className="w-1/3">
            <label htmlFor="">National Head</label>
            <input   type="text" className="input input-bordered input-secondary w-full " {...register("nationalHead", { })}></input>
            {/* <p className="text-red-500"> {errors.description && <span>Atleast 8 charators required</span>}</p> */}
          </div>
        </div>

  
<div className=" flex justify-center my-5">
          <button
            type="submit" 
            className="btn btn-outline btn-primary px-10"
          >Save  </button>
        </div>
        </form>
    </div>
  )
}

export default AddPayment