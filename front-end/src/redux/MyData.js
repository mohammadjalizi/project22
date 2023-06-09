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
 
state.selectorproducts.push(action.payload)

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