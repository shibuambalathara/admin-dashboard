import { Button } from '@material-tailwind/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  const onClickHandler=()=>{
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (
    <div className=' w-full flex '>
  <nav
    className=" w-full  flex justify-end  bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 m"
    data-te-navbar-ref>
      <div className='  m-2  w-fit'>
   <button className='text-white  px-2 py-1  bg-red-500  rounded border'onClick={onClickHandler}>Logout</button>
   </div>
  </nav>
    </div>
  )
}

export default Header