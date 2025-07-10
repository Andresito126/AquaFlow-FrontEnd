import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../../features/dashboard/pages/Dashboard-page";
import { MainContainerLayout } from "../../features/shared/layouts/mainContainer-layout";
import Login from "../../features/users/Presentation/Pages/Login/Login";
import CreateUser from "../../features/users/Presentation/Pages/Createuser/Createuser";

export const navigationWrapper = createBrowserRouter([

    /* THIS IS WITHOUT THE SIDE BAR */
//   {
//     path: "/login",
//     element: <Login />,
//   },

 {
    path: '/',
    element: <Login />,
  },
  {
    path: '/createuser',
    element: <CreateUser></CreateUser>,
  },

  /* WITH THE SIDEBAR */
  
  {
    path: "/",
    element: <MainContainerLayout/>,
    children: [
      { path: "dashboard", element: <Dashboard /> },
    ],
  },


]);
