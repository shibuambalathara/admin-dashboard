

import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useStatesQuery, useUserQuery, useUsersSearchQuery } from '../../utils/graphql';
import TabbleOfUsersOrUser from './tabbleData';


const UsersByState = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
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
    
    if(loading)return<div>Loading....</div>
  return (
    <div className='m-5'>
        <div>
           
          
                <div className='flex justify-between'>
                  <div>
          
                     <select
                {...register("state", { required: true })}
                placeholder="select"
                className="input input-bordered input-secondary  w-64 "
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
                <div>
          {data?.users[0]?.id &&      <p className='text-red-500 font-bold'>  Number OF Users: {data?.users.length}</p> }
                </div>
       
            </div>
          
     {data?.users[0]?.id &&     <TabbleOfUsersOrUser users={data?.users}/>}
    
   
        </div>

    </div>
  )
}

export default UsersByState