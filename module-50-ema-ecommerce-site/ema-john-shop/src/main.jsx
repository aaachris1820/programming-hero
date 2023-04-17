import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Products from './Products'
import { loadProducts } from './data loaders/dataLoaders'
import OrderReview from './components/OrderReview'
import Error404 from './components/Error404'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AuthContextProvider from './AuthContextProvider'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/order',
        element: <Products />,
        loader: loadProducts
      },
      {
        path: '/order-review',
        element: <OrderReview />
      },
      {
        path: '/login', element: <Login />
      },
      {
        path: '/signup', element: <SignUp />
      }

    ]
  },
  {
    path: '*',
    element: <Error404 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
