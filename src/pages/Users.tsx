import React from 'react'
import ViewUsers from '../components/users/viewUsers'
import UserByMobile from '../components/users/userByMobile'
import { useNavigate } from 'react-router-dom';
import UsersByState from '../components/users/usersByState';
import UsersByDate from '../components/users/usersByDate';

const Users = () => {
  const navigate = useNavigate();
  return (
    <div className=' w-full '>
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
      <UserByMobile/>
      <UsersByState/>
      <UsersByDate/>
    <ViewUsers/>
    </div>
  )
}

export default Users