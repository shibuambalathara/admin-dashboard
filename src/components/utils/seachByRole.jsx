import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const SeachByRole = ({setRole}) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        getValues,
        setValue,
        formState: { errors },
      } = useForm();
  return (
    <div className='flex justify-between'>
    <div className="align-middle">
<p className="my-auto">   Search By Role</p>

         <select
    {...register("role", { required: true })}
    placeholder="select"
    className="input input-bordered input-secondary  w-64 "
    onChange={(e) => {
      const value = e.target.value;
      setValue("role",value);
      setRole(value)
   
    }}
  >
    <option value="">Select Role </option>
    {/* {states?.states?.map((item) => (
      <option key={item.name} value={item.name}>
        {item.name}
      </option>
    ))} */}
  <option value="admin">Admin </option>
  <option value="staff">Staff </option>
  <option value="dealer">Dealer </option>
 
  </select>
    
    </div>
    <div>
    </div>

</div>
  )
}

export default SeachByRole