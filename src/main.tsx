import './index.css'
import "./core/i18n/i18n";
import { createRoot } from 'react-dom/client'
import {RouterProvider } from 'react-router-dom'
import { navigationWrapper } from './core/navigation/navigationWrapper'

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={navigationWrapper} />
  
)

