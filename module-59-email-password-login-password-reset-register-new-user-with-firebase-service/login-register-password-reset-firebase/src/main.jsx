import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

const router=createBrowserRouter([
  {
    path:'/',element: <App/>,
    children:[
      {
        path:'login',element: <Login/>
      },
      {
        path:'register',element: <Register/>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
