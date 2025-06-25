import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../../features/dashboard/pages/Dashboard-page";
import { MainContainerLayout } from "../../features/shared/layouts/mainContainer-layout";

export const navigationWrapper = createBrowserRouter([

    /* THIS IS WITHOUT THE SIDE BAR */
//   {
//     path: "/login",
//     element: <Login />,
//   },


/* WITH THE SIDEBAR */
  {
    path: "/",
    element: <MainContainerLayout/>,
    children: [
      { path: "dashboard", element: <Dashboard /> },
    ],
  },


]);
