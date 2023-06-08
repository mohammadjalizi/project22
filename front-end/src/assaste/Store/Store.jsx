import React from 'react'

import './Srote.css'


import { useGetproductsByNameQuery } from '../../redux/ProdutsApi'


const Store = () => {
  const { data, error, isLoading } = useGetproductsByNameQuery();

 




if(isLoading){

return(
<div className="loader"></div>

)


}
  if(data){


    return (
      <div className=' flex flex-wrap   gap-9  justify-center    '>
  
  
  {data.map((item) => {
          return (
            <div key={item.id} className=' Card shadow-2x     w-96  text-center my-12   '>
            <h1>{item.productName}</h1>
            <img src={item.imageLink} alt="" />

            <div className='  pb-3 mt-14 flex justify-between'>

              <button>AddtoCart</button>
<p>   {item.price}   </p>

              </div>
  
            
            </div>
          );
        })}
  </div>
  
  
   
    )

  }
}

export default Store