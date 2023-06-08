import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './footer/Footer'
  



const Root = () => {

  return (
    <div>


<Navbar/>


<div className='   h-96  mb-44 '>


<Outlet/>

</div>

<Footer/>
    </div>
  )
}

export default Root