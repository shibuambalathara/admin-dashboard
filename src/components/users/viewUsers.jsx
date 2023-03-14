import { Button } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const ViewUsers = () => {
    const navigate=useNavigate()
  return (
    <div className='m' >
<Button onClick={()=>navigate('/add-user')} className="m-5 justify-end  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Add User
</Button>
  </div>
  )
}

export default ViewUsers