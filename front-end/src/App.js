
import './App.css'

import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './assaste/Root';


import Home from './assaste/Header/Home';
import Store from './assaste/Store/Store';
import Cart from './assaste/cart/Cart';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
 
      <Route path="/home" element={<Home />} />
     
      <Route path="/store" element={< Store/>} />
      <Route path="/cart" element={< Cart/>} />
    </Route>
  )
);



function App() {
  return (
    <div className="App">
   <RouterProvider router={router} />

    </div>
  );
}

export default App;
