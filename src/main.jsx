import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayouts from './assets/Layouts/HomeLayouts.jsx';
import CategoryNews from './Pages/CategoryNews.jsx';

const router = createBrowserRouter([
  {
  path: "/",
  element:<HomeLayouts></HomeLayouts>,
  children: [
    {
      index: true,
        element: <Navigate to="category/01" />,
      
    },
    {
      path: "/category/:id",
      element: <CategoryNews></CategoryNews>,
      loader: ({ params })=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
    },
  ],
  },

{
    path: "/news",
    element: <h1>News Layout</h1>,
},
{
    path: "auth",
    element: <h1>Login</h1>
},
{
    path: "*",
    element: <h1>Error</h1>
},
  ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     
  </StrictMode>,
)
