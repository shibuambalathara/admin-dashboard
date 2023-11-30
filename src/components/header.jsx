import { Button } from '@material-tailwind/react'


import {useNavigate} from 'react-router-dom'
import { useUserauthenticationQuery } from '../utils/graphql'

const Header = () => {
  const {data,refetch}=useUserauthenticationQuery()
 
  const navigate=useNavigate()

  const logOUtHandler=async()=>{
    localStorage.removeItem("token")
    window.location.reload();
 
    navigate('/login')
  }
  const loginHandler=()=>{

   
    navigate('/login')
  }
  return (
 
  <div className="navbar  bg-base-100 shadow-lg">
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
          <img src="../download-image.jpg" alt='Autobse'/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
       {data ?<>
        <li>{data.authenticatedItem?.username} </li>
        <li>Role: {data?.authenticatedItem?.role}</li>
       {data.authenticatedItem.role==='staff' && <li>State: {data?.authenticatedItem?.state}</li>}
        <li><button className='text-white  px-2 py-1  bg-red-500  rounded border'onClick={logOUtHandler}>Logout</button></li>
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