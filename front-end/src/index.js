import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './redux/Store'
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
      {/* ... etc. */}
    </Route>
  )
  );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>

     <RouterProvider router={router} />   
     </Provider>

  </React.StrictMode>
);

