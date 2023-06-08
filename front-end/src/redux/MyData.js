import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 selectorproducts:[
    {
        id: 1,
        productName: "T-shirt",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
        price: 100,
        imageLink: "https://res.cloudinary.com/dlz1h6dhr/image/upload/v1680872470/online%20store/1_mrh258.jpg",
      },
      {
        id: 1,
        productName: "T-shirt",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
        price: 100,
        imageLink: "https://res.cloudinary.com/dlz1h6dhr/image/upload/v1680872470/online%20store/1_mrh258.jpg",
      },
 ]


 }


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

 
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  incrementByAmount } = counterSlice.actions

export default counterSlice.reducer