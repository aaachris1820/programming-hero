import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AuthContextWrapper from './components/contexts/AuthContextWrapper';
import Home from './components/Home';

const router=createBrowserRouter([
  {
    path:'/',element: <App></App>,children:[
      {
        path:'/',element: <Home/>
      },
      {
        path:'/register', element: <Register/>
      },
      {
        path:'/login', element: <Login/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextWrapper>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextWrapper>
        
  </React.StrictMode>,
)
