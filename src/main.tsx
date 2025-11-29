import "./index.css";
import "./core/i18n/i18n";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { navigationWrapper } from "./core/navigation/navigationWrapper";
import { SidebarProvider } from "./features/shared/layouts/sideBar/SidebarContext";

createRoot(document.getElementById("root")!).render(
  <SidebarProvider>
    <RouterProvider router={navigationWrapper} />
  </SidebarProvider>
);
