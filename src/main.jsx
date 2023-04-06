import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchFood from './components/SearchFood/SearchFood';
import FoodDetail from './components/FoodDetails/FoodDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'searchFood/:searchFoodName',
        element: <SearchFood></SearchFood>,
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.searchFoodName}`)
      },
      {
        path: 'foodDetails/:foodId',
        element: <FoodDetail></FoodDetail>,
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
