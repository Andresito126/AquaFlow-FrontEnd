import "./index.css";
import "./core/i18n/i18n";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { navigationWrapper } from "./core/navigation/navigationWrapper";
import { SidebarProvider } from "./features/shared/layouts/sideBar/SidebarContext";

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registrado:', registration.scope);
        
        // checa si hay una nueva version
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('new version, aca vamos a mostrar un toast o aalgo.');
                
              }
            });
          }
        });
      })
      .catch((error) => {
        console.error('Error registrando SW:', error);
      });
  });
}

createRoot(document.getElementById("root")!).render(
  <SidebarProvider>
    <RouterProvider router={navigationWrapper} />
  </SidebarProvider>
);
