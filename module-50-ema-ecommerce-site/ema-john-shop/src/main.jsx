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
import Inventory from './components/Inventory'
import PrivateRoute from './components/PrivateRoute'


const router = createBrowserRouter([
  {
    path: '/',
    element:     <AuthContextProvider>
      <App></App>
    </AuthContextProvider>,
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
      },
      {
        path:'/inventory', element: <PrivateRoute>
          <Inventory></Inventory>
        </PrivateRoute>
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
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
