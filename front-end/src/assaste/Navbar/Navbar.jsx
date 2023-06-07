import React from 'react'
import { useNavigate } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='  flex justify-between py-4  bg-teal-800 text-black  '>
<div className=' flex '> 
 <li on onClick={()=>{

navigate('/home')

 }}>home</li>
 <li  onClick={() => {
   navigate('/store')
 }
 }>about</li>

 <li> store  </li>
 <li></li>
 </div>   
 <h1>mohammadjal</h1>      
    </div>
  )
}

export default Navbar