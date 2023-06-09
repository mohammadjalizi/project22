import React from 'react'
import { useNavigate } from "react-router-dom";

import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
    const navigate = useNavigate();
    const {selectorproducts} = useSelector((state) => state.counter)

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
 <h2  onClick={()=>{

navigate('/cart')

 }}  className=' text-2xl cursor-pointer hover:text-cyan-300 '>cart
 <span className='  border shadow-2xl  ml-4'>{selectorproducts.length}</span>
 </h2>  
 <h1>mohammadjal</h1>    


 </div>

    </div>
  )
}

export default Navbar