import React from 'react'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='  flex justify-between py-4 bg-pink-500 text-black  '>
<div className=' flex '> 
 <li on onClick={()=>{

navigate('/home')

 }}>home</li>
 <li>about</li>
 <li onClick={()=>{

navigate("/store")

 }}>  store  </li>
 <li></li>
 </div>   
 <h1>mohammadjal</h1>      
    </div>
  )
}

export default Navbar