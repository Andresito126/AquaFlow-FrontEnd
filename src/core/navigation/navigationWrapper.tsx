import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../../features/dashboard/presentation/pages/Dashboard-page";
import { MainContainerLayout } from "../../features/shared/layouts/mainContainer-layout";
import Login from "../../features/users/Presentation/Pages/Login/Login";
import CreateUser from "../../features/users/Presentation/Pages/Createuser/Createuser";
import { StadisticsPage } from "../../features/sensors/presentation/pages/Stadistics-page";
import { FilterPage } from "../../features/filter/presentation/pages/Filter-page";
import { AdminPage } from "../../features/admin/presentation/pages/Admin-page";
import NotificationsPage from "../../features/notifications/presentation/pages/Notifications-page";
import { ProtectedRoute } from "./ProtectedRoute";

export const navigationWrapper = createBrowserRouter([

  /* THIS IS WITHOUT THE SIDE BAR */
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },


  //ADMIN ROUTE

  
{
  path: "/admin",
  element: <ProtectedRoute allowedRoles={["Administrator"]} />,
  children: [
    {
      path: "",
      element: <AdminPage />,
    },
  ],
},

  //AUTHS ROUTES

  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <CreateUser></CreateUser>,
  },



  // PROTECTED ROUTES
  /* WITH THE SIDEBAR */

  {
    path: "/",
    element: (
      <ProtectedRoute allowedRoles={["Administrator", "Regular user"]} />
    ),
    children: [
      {
        path: "dashboard",
        element: <MainContainerLayout />,
        children: [{ path: "", element: <Dashboard /> }],
      },
    ],
  },

  {
    path: "/",
    element: (
      <ProtectedRoute allowedRoles={["Administrator", "Regular user"]} />
    ),
    children: [
      {
        path: "stadistics",
        element: <MainContainerLayout />,
        children: [{ path: "", element: <StadisticsPage /> }],
      },
    ],
  },

  {
    path: "/",
    element: (
      <ProtectedRoute allowedRoles={["Administrator", "Regular user"]} />
    ),
    children: [
      {
        path: "filter",
        element: <MainContainerLayout />,
        children: [{ path: "", element: <FilterPage /> }],
      },
    ],
  },

  {
    path: "/",
    element: (
      <ProtectedRoute allowedRoles={["Administrator", "Regular user"]} />
    ),
    children: [
      {
        path: "notifications",
        element: <MainContainerLayout />,
        children: [{ path: "", element: <NotificationsPage /> }],
      },
    ],
  },
]);
