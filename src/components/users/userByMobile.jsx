import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useUserQuery } from '../../utils/graphql';
import TabbleOfUsersOrUser from './tabble';

const UserByMobile = () => {
    const [mobile,setMobile]=useState('0')
    const [user,setUser]=useState([])
    const{data,loading}=useUserQuery({variables:{where:{mobile: mobile}}})
 if (data?.user)   console.log(data?.user,"data.user")
 
   console.log(mobile,"mobile")
    
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
    const onSubmit = async (dataOnSubmit) => {
        if(onSubmit){setMobile(dataOnSubmit.mobile)
             console.log(mobile, "onSubmit");
              console.log(data,"mobile")}

  const userArray = [Object.fromEntries(Object.entries(data.user))];
              console.log(userArray,"user array")
              setUser(userArray)

    }
    if(loading)return<div>Loading....</div>
  return (
    <div className=' m-5'>
        <div>
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex space-x-2'>
                  <div>
            <input placeholder=' Enter mobile Number'
                  type="number"
                  className="p-3  input input-bordered input-secondary w-64"
                  {...register("mobile", { required: true,minLength:10,maxLength:10 })}/>
                   <p className="text-red-500">
                  {" "}
                  {errors.mobile && <span>Please Enter 10 digits</span>}
                </p>
                </div>
            <button className='btn bg-red-500' type='onSubmit'>Submit</button>
            </div>
            </form>
     {data?.user?.mobile===mobile &&     <TabbleOfUsersOrUser users={user}/>}
     {mobile!=='0' && data?.user?.mobile!==mobile  && <p className='text-red-500'> Sorry there is no such User</p>}
        </div>

    </div>
  )
}

export default UserByMobile