import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider } from 'react-router-dom'
import { navigationWrapper } from './core/navigation/navigationWrapper'

createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
    <RouterProvider router={navigationWrapper} />
  </React.StrictMode>
)

