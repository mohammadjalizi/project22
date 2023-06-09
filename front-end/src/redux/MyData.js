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
        console.log("doneeee")
      },
    decreaseProduct: (state, action) => {
        // state.value += action.payload
        console.log("doneeee")
      },
  },
  
},)
// Action creators are generated for each case reducer function
export const { decreaseProduct, AddtoCart,increaseProduct, } = counterSlice.actions

export default counterSlice.reducer