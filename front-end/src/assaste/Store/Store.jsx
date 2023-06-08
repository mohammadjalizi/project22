import React from 'react'

import './Srote.css'
import { useSelector, useDispatch } from 'react-redux'

import { useGetproductsByNameQuery } from '../../redux/ProdutsApi'
const receviedDateFromAPI = [{}, {}, {}, {}];

const Store = () => {
  const { data, error, isLoading } = useGetproductsByNameQuery();

  const {selectorproducts} = useSelector((state) => state.counter)


console.log(data)
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
            <div className=' Card shadow-2x     w-96  text-center my-12   '>
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