import React from 'react'
 
import { useSelector, useDispatch } from 'react-redux'
import { decreaseProduct, increaseProduct } from 'redux/MyData'
const data=[{},{},{}]
const Cart = () => {
    const {selectorproducts} = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    console.log(selectorproducts)
  return (

    <div>
        
{selectorproducts.map((item)=>{

return(

<div className=' flex justify-between bg-pink-300 shadow-2xl   my-36  m-auto '>


<h1>{item.id  }</h1>
<h2>{item.price}</h2>
<img  className=' max-w-xs '  src={item.imageLink} alt="" />
<div  className=' ml-48 '>
<button   onClick={() => {
  dispatch(increaseProduct())
}
} className= ' m-10  text-3xl '> +</button>
<h1> {item.quntity}  </h1>
<button onClick={(() => {
  dispatch(decreaseProduct())
}
)} className='text-3xl'>-</button>
    </div>
</div>

)


})}

    </div>

  )
  
}

export default Cart