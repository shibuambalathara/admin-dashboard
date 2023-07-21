




import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useStatesQuery, useUserQuery, useUsersSearchQuery } from '../../utils/graphql';
import TabbleOfUsersOrUser from './tabbleData';


const UsersByDate = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
    const [startDate,setDate]=useState('0')
    const [user,setUser]=useState([])
    const {data:states}=useStatesQuery()
    const{data,loading}=useUsersSearchQuery({variables:{where:{createdAt:{gte:startDate}}}})
 if (data?.users)   console.log(data?.users,"data.users")
 
   
    console.log(startDate,"state")
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors },
      } = useForm();
    const onSubmit = async (dataOnSubmit) => {


    }
    if(loading)return<div>Loading....</div>
  return (
    <div className='bg-gray-100'>
        <div>
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between'>
                
                  <div className="space-x-3 flex  align-middle">
         <p className="my-auto">   Search By Reg. Date</p>
                  <input type='date'
                placeholder=" Enter mobile Number"
              
                className="p-3  input input-bordered input-secondary w-64"
                {...register("startDate", {
                  required: true,
                 
                })}
                onChange={(e) => {
                    const value = e.target.value
                    const date=new Date(value)
                    const isoDate=date.toISOString()
                    
                  setValue("startDate",(value));
               setDate(isoDate)
                 
               
                }}
              />
                   <p className="text-red-500">
                  {" "}
                  {errors.mobile && <span>Please Enter 10 digits</span>}
                </p>
                </div>
                <div>
          {data?.users[0]?.id &&      <p className='text-red-500 font-bold'>  Number OF Users: {data?.users.length}</p> }
                </div>
            </div>
            </form>
     {data?.users[0]?.id &&     <TabbleOfUsersOrUser users={data?.users}/>}
    
   
        </div>

    </div>
  )
}

export default UsersByDate