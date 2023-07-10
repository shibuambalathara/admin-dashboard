

import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useStatesQuery, useUserQuery, useUsersSearchQuery } from '../../utils/graphql';
import TabbleOfUsersOrUser from './tabble';


const UsersByState = () => {
    const [state,setState]=useState('0')
    const [user,setUser]=useState([])
    const {data:states}=useStatesQuery()
    const{data,loading}=useUsersSearchQuery({variables:{where:{state:{contains:state}}}})
 if (data?.users)   console.log(data?.users,"data.users")
 
   
    console.log(state,"state")
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors },
      } = useForm();
    const onSubmit = async (dataOnSubmit) => {
        // if(onSubmit){setMobile(dataOnSubmit.mobile)
        //      console.log(mobile, "onSubmit");
        //       console.log(data,"mobile")}

  // const userArray = [Object.fromEntries(Object.entries(data.user))];
  //             console.log(userArray,"user array")
  //             setUser(userArray)

    }
    if(loading)return<div>Loading....</div>
  return (
    <div className='m-5'>
        <div>
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex space-x-2'>
                  <div>
            {/* <input placeholder=' Enter mobile Number'
                  type="number"
                  className="p-3  input input-bordered input-secondary w-64"
                  {...register("mobile", { required: true,minLength:10,maxLength:10 })}/> */}
                     <select
                {...register("state", { required: true })}
                placeholder="select"
                className="input input-bordered input-secondary  w-64 m-2"
                onChange={(e) => {
                  const value = e.target.value;
                  setValue("state",value);
                  setState(value)
               
                }}
              >
                <option value="">Select State </option>
                {states?.states?.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
             
              </select>
                   <p className="text-red-500">
                  {" "}
                  {errors.mobile && <span>Please Enter 10 digits</span>}
                </p>
                </div>
       
            </div>
            </form>
     {data?.users[0]?.id &&     <TabbleOfUsersOrUser users={data?.users}/>}
   
        </div>

    </div>
  )
}

export default UsersByState