// src/routes/navigationWrapper.tsx
import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../../features/dashboard/pages/Dashboard-page";
import { MainContainerLayout } from "../../features/shared/layouts/mainContainer-layout";
import Login from "../../features/users/Presentation/Pages/Login/Login";
import CreateUser from "../../features/users/Presentation/Pages/Createuser/Createuser";
import { ProtectedRoute } from "./ProtectedRoute";

export const navigationWrapper = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/createuser',
    element: <CreateUser />,
  },
  {
    path: '/',
    element: <ProtectedRoute allowedRoles={["Administrator", "Regular user"]} />,
    children: [
      {
        path: 'dashboard',
        element: <MainContainerLayout />,
        children: [
          { path: '', element: <Dashboard /> },
        ]
      }
    ]
  }
]);
