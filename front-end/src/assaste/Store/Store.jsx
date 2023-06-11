import React from 'react'

import './Srote.css'

import { useSelector, useDispatch } from 'react-redux'
import { useGetproductsByNameQuery } from '../../redux/ProdutsApi'
import { AddtoCart, decreaseProduct, deletproduct, increaseProduct } from 'redux/MyData'


const Store = () => {
  const { data, error, isLoading } = useGetproductsByNameQuery();
  const {selectorproducts,selectorproductsMyid} = useSelector((state) => state.counter)
  const dispatch = useDispatch()




if(isLoading){

return(
<div className="loader"></div>

)


}
  if(data){


    return (
      <div className=' flex flex-wrap   gap-9  justify-center    '>
  
  
  {data.map((item,index) => {
          return (
            <div key={item.id} className=' Card shadow-2x     w-96  text-center my-12   '>
            <h1>{item.productName}</h1>
            <img src={item.imageLink} alt="" />

            <div className='  pb-3 mt-14 flex justify-between'>
             {selectorproductsMyid.includes(item.id) ?(
 <>     <button   onClick={() => {
  dispatch(increaseProduct(item))
}
} className= ' m-10  text-3xl '> +</button>

<h1 onClick={() => {
  dispatch(deletproduct(item))
}
}>delet</h1>

<h1>{selectorproductsMyid.quntity}</h1>
<button onClick={(() => {
  dispatch(decreaseProduct(item))
}
)} className='text-3xl'>-</button>  </>
             ) :  (
              <>
              <button onClick={() => {
                dispatch(AddtoCart(item))
              }
              }>  addtocart  </button>
              </>
             ) }


            
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