import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
//  const {email}=useSelector((state)=>state.yetkiSlice)
  
  return useSelector((state)=>state.yetkiSlice.email)==="esra" ? (<Outlet/>): <Navigate to="/login"/>
  
  
 
}

export default PrivateRouter
