import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './features/users/Presentation/Pages/Login/Login'
import CreateUser from './features/users/Presentation/Pages/Createuser/Createuser'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/createuser',
    element: <CreateUser></CreateUser>,
  }
])


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
