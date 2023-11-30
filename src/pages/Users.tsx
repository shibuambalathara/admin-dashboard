import React, { useEffect, useState } from 'react'
import ViewUsers from '../components/users/viewUsers'
import UserByMobile from '../components/users/userByMobile'
import { useNavigate } from 'react-router-dom';
import UsersByState from '../components/users/usersByState';
import UsersByDate from '../components/users/usersByDate';
import SearchByNumber from '../components/utils/searchByNumber';
import SearchByDate from '../components/utils/SearchByDate';
import SeachByRole from '../components/utils/seachByRole';
import SearchByState from '../components/utils/searchByState';
import UsersByRole from '../components/users/usersByRole';
import TabbleOfUsersOrUser from '../components/users/tableData';

const Users = () => {

  const [inputData,setInputData]=useState('0')

  const [stateData,setStateData]=useState('0')
  const[usersData,setUsersData]=useState([])
  const navigate=useNavigate()

const handleInputData=(data:any)=>{
  setInputData(data)
}





const handledata=(data:any)=>{

 setUsersData(data)

}

useEffect(() => {
 

}, [usersData]);



  return (
    <div className='w-full'>
              <div className=" w-full ">
<div className='text-end'>


        <button 
          onClick={() => navigate("/add-user")}
          className="mt-5  w-fit  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add User
        </button>
        </div>
        <div className="text-center font-extrabold mb-1  text-2xl w-full">
              {" "}
              Users Data Table{" "}
            </div>
      </div>
      <div className=" md:flex my-2 justify-evenly M-5 shadow-xl">

        <SearchByNumber inputData={handleInputData} /> 
        <SearchByDate setDate={handleInputData}/>
        <SeachByRole setRole={handleInputData}/>
         <SearchByState setState={handleInputData}/> 
      
      </div>
      <UsersByState state={inputData}  fetchData={handledata}/> 
        <UserByMobile  mobile={inputData} fetchData={handledata}/>
        <UsersByDate startDate={inputData} fetchData={handledata}/>
        <UsersByRole role={inputData}  fetchData={handledata}/>
    
    {    usersData.length<1 &&    <ViewUsers/>}
        <div>
      
      {usersData.length>0  && <TabbleOfUsersOrUser users={usersData} />}
   
    </div> 
 
        
    </div>
  )
}

export default Users