import { useEffect, useState } from 'react'
import{Outlet,Navigate}from 'react-router-dom'
const ProtectedRoute=()=>{
    // const userToken=localStorage.getItem("token")

    // console.log(auth,"auth")

const [userToken,setUserToken]=useState([])
const [istoken,setIsToken]=useState(true)
useEffect(()=>{
const localToken=localStorage.getItem("token")
if(localToken){
    setUserToken(localToken)
    console.log(localToken,"token")
    setIsToken(true)
}
},[])


    return(
        istoken?<Outlet/>:<Navigate to="login" />
    )

}
export default ProtectedRoute