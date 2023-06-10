import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 selectorproducts:[

 ]


 }


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

 
    AddtoCart: (state, action) => {
      const productWithQuntit={...action.payload,"quntity":1}
 
state.selectorproducts.push(productWithQuntit)

    },
    increaseProduct: (state, action) => {
        // state.value += action.payload
    const increasedproduct=state.selectorproducts.find((item)=>{

return item.id===action.payload.id

    })
    increasedproduct.quntity+=1


      },
    decreaseProduct: (state, action) => {
      const decreasedproduct=state.selectorproducts.find((item)=>{

        return item.id===action.payload.id
        
            })
            decreasedproduct.quntity-=1

// delete the product
            if (decreasedproduct.quntity===0) {
             const newArry=state.selectorproducts.filter((item)=>{
return  item.id !== action.payload.id



              })
              state.selectorproducts=newArry
              
            }
        
        
      
      },
      deletproduct: (state, action) => {
        
        const newArry=state.selectorproducts.filter((item)=>{
          return  item.id !== action.payload.id
          
          
          
                        })
                        state.selectorproducts=newArry
      },
  },

},)
// Action creators are generated for each case reducer function
export const { deletproduct,decreaseProduct, AddtoCart,increaseProduct, } = counterSlice.actions

export default counterSlice.reducer