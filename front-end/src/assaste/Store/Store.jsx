import React from 'react'


import { useGetproductsByNameQuery } from '../../redux/ProdutsApi'
const receviedDateFromAPI = [{}, {}, {}, {}];

const Store = () => {
  const { data, error, isLoading } = useGetproductsByNameQuery();
console.log(data)
  if(data){


    return (
      <div className=' flex flex-wrap   gap-9  justify-center    '>
  
  
  {data.map((item) => {
          return (
            <div className='  shadow-2x  bg-slate-200   w-96  text-center my-12   '>
            <h1>{item.productName}</h1>
            <img src={item.imageLink} alt="" />
  
            
            </div>
          );
        })}
  </div>
  
  
   
    )

  }
}

export default Store