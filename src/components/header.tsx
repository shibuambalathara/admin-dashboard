import { Button } from '@material-tailwind/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useUserauthenticationQuery } from '../utils/graphql'

const Header = () => {
  const {data,refetch}=useUserauthenticationQuery()
  console.log(data,"authentication")
  const navigate=useNavigate()
  const onClickHandler=async()=>{
    localStorage.removeItem("token")
    window.location.reload();
  
    navigate('/login')
  }
  const loginHandler=()=>{

   
    navigate('/login')
  }
  return (
  //   <div className=' w-full flex '>
  // <nav
  //   className=" w-full  flex justify-end  bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 m"
  //   data-te-navbar-ref>
  //     <div className='  m-2  w-fit'>
  //  
  //  </div>
  // </nav>
  //   </div>
  <div className="navbar bg-base-100 shadow-lg">
  <div className="flex-1">
    {/* <a className="btn btn-ghost normal-case text-xl">AUTOBSE</a> */}
    <img src='AutoBSE_Logo.png' alt='AUTOBSE ' className='w-32'/>
  </div>
  <div className="flex-none gap-2">
    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div> */}
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/download-image.jpg" alt='Autobse'/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
       {data ?<>
        <li>{data.authenticatedItem?.username} </li>
        <li>Role: {data?.authenticatedItem?.role}</li>
        <li><button className='text-white  px-2 py-1  bg-red-500  rounded border'onClick={onClickHandler}>Logout</button></li>
        </>
 :        <li><button className='text-white  px-2 py-1  bg-red-500  rounded border'onClick={loginHandler}>Login</button></li>
}
        </ul>
    </div>
  </div>
</div>
  )
}

export default Header