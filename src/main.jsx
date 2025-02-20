import { Suspense } from "react";
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
        element: <Navigate to="category/01"/>,
      
    },
    {
      path: "/category/:id",
      element: <CategoryNews />,
      loader: async ({ params }) => {
        try {
          const response = await fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          );
          if (!response.ok) throw new Error("Failed to fetch data");
          return response.json();
        } catch (error) {
          console.error("API Fetch Error:", error);
          return { data: [] }; // Prevent hydration error
        }
      },
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
<Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
     
  </StrictMode>,
);
