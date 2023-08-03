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
import TabbleOfUsersOrUser from '../components/users/tabbleData';

const Users = () => {

  const [inputData,setInputData]=useState('0')

  const [stateData,setStateData]=useState('0')
  const[usersData,setUsersData]=useState([])
  const navigate=useNavigate()

const handleInputData=(data:any)=>{
  setInputData(data)
}




const handleState=(state:string)=>{
  setStateData(state)
}
const handledata=(data:any)=>{
setStateData('')
 setUsersData(data)

  console.log(data,"daaaaaaaaa")
  console.log(usersData,"users Data")
}

useEffect(() => {
 
  console.log(usersData, 'users Data');
}, [usersData]);



  return (
    <div className='w-full'>
              <div className=" w-full ">
<div className='text-end'>


        <button 
          onClick={() => navigate("/add-user")}
          className="m-5  w-fit  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add User
        </button>
        </div>
        <div className="text-center font-extrabold my-1  text-2xl w-full">
              {" "}
              Users Data Table{" "}
            </div>
      </div>
      <div className="flex my-2 justify-evenly">

        <SearchByNumber inputData={handleInputData} /> 
        <SearchByDate setDate={handleInputData}/>
        <SeachByRole setRole={handleInputData}/>
        {/* <SearchByState setState={handleInputData}/> */}
      
      </div>
        <UserByMobile  mobile={inputData} fetchData={handledata}/>
        <UsersByDate startDate={inputData} fetchData={handledata}/>
        <UsersByRole role={inputData}  fetchData={handledata}/>
        {/* <UsersByState state={inputData}  fetchData={handledata}/> */}
    {    usersData.length<1 &&    <ViewUsers/>}
        <div>
      
      {usersData.length>0  && <TabbleOfUsersOrUser users={usersData} />}
   
    </div> 
 
        
    </div>
  )
}

export default Users