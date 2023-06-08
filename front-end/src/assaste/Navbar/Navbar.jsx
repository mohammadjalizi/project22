import React from 'react'
import { useNavigate } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className=' w-full flex justify-between py-4  bg-teal-800 text-black  '>
<div className=' flex '> 
 <li on onClick={()=>{

navigate('/home')

 }}>خانه</li>
 
 <li  onClick={() => {
   navigate('/store')
 }
 }>فروشگاه</li>

 <li> store  </li>
 <li></li>
 </div>   
 <div className='   w-44 py-4 flex justify-between '>
 <h2>cart</h2>  
 <h1>mohammadjal</h1>    


 </div>

    </div>
  )
}

export default Navbar