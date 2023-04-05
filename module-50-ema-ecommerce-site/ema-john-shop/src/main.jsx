import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Products from './Products'
import { loadProducts } from './data loaders/dataLoaders'
import OrderReview from './components/OrderReview'
 

const router=createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'order',
        element: <Products />,
        loader: loadProducts
      },
      {
        path:'order-review',
        element: <OrderReview />
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
