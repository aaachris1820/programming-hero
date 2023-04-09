import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import Shop from './component/Shop'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'shop',
        element: <Shop/>,
        loader:()=>fetch('https://fakestoreapi.com/products?limit=15'),
      },
      {
        path:'cart',
        element: <Home/>
      },
      {
        path:'about',
        element: <Home/>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
