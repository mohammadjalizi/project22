
import './App.css'

import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './assaste/Root';
import Header from './assaste/Header/Header';
import Store from './assaste/store/Store';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
 
      <Route path="/home" element={<Header />} />
     
      <Route path="/store" element={<Store />} />
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
