import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './footer/Footer'
  



const Root = () => {

  return (
    <div>


<Navbar/>


<div className='   '>


<Outlet/>

</div>

<Footer/>
    </div>
  )
}

export default Root