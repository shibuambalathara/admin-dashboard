import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useUserQuery } from '../../utils/graphql';
import TabbleOfUsersOrUser from './tabble';

const UserByMobile = () => {
    const [mobile,setMobile]=useState('0')
    const [user,setUser]=useState([])
    const{data}=useUserQuery({variables:{where:{mobile: mobile}}})
 
   
    
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
        
      

    }
  return (
    <div className=' m-5'>
        <div>
            Enter mobile Number
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex space-x-2'>
            <input
                  type="number"
                  className="p-3  input input-bordered input-secondary w-40"
                  {...register("mobile", { required: true,minLength:10,maxLength:10 })}/>
                   <p className="text-red-500">
                  {" "}
                  {errors.mobile && <span>10 digit number required</span>}
                </p>
            <button className='btn bg-red-500' type='onSubmit'>Submit</button>
            </div>
            </form>
     {/* {data.user&&       <TabbleOfUsersOrUser users={user}/>} */}
        </div>

    </div>
  )
}

export default UserByMobile