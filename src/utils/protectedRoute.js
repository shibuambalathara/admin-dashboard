import { useEffect, useState } from 'react'
import{Outlet,Navigate}from 'react-router-dom'
const ProtectedRoute=()=>{
     

     


const [istoken,setIsToken]=useState(true)
useEffect(()=>{
    const userToken=localStorage.getItem("token")

if(!userToken){
    setIsToken(false)
}
},[])


    return(
        istoken?<Outlet/>:<Navigate to="login" />
    )

}
export default ProtectedRoute