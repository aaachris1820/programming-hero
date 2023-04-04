import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './error components/Error';
import Home from './components/Home';
import Categories from './components/Categories';
import { categoryLoader,categoriesLoader } from './Loaders/categoryLoader';
import CategoryFoods from './components/CategoryFoods';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"categories/",
        element: <Categories></Categories>,
        loader: categoriesLoader,
      },
      {
        path:"/:categoryName/",
        element: <CategoryFoods/>,
        loader: categoryLoader,

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
