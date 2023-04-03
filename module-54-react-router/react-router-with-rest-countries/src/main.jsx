import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home'
import Countries from './components/Countries'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import loadCountries from './utilities/loadCountries'
import Country from './components/Country'
import loadCountryByName from './utilities/loadCountryByName'
import SingleCountry from './components/SingleCountry'

const router=createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element: <Home></Home>,
    }
    ,
    {
      path:"home/",
      element: <Home />,
    },
    {
      path:"countries/",
      element: <Countries></Countries>,
      loader: loadCountries,
    },
    {
      path:"countries/:name",
      element:<SingleCountry />,
      loader:loadCountryByName,
    }
  ]
},


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
