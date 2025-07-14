import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../../features/dashboard/presentation/pages/Dashboard-page";
import { MainContainerLayout } from "../../features/shared/layouts/mainContainer-layout";
import Login from "../../features/users/Presentation/Pages/Login/Login";
import CreateUser from "../../features/users/Presentation/Pages/Createuser/Createuser";
import { StadisticsPage } from "../../features/sensors/presentation/pages/Stadistics-page";
import { FilterPage } from "../../features/filter/presentation/pages/Filter-page";

export const navigationWrapper = createBrowserRouter([

    /* THIS IS WITHOUT THE SIDE BAR */
//   {
//     path: "/login",
//     element: <Login />,
//   },

 {
    path: '/login',
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

  {
    path: "/",
    element : <MainContainerLayout/>,
    children: [
      {path: "stadistics", element: <StadisticsPage></StadisticsPage>}
    ]
  },

   {
    path: "/",
    element : <MainContainerLayout/>,
    children: [
      {path: "filter", element: <FilterPage/>}
    ]
  }


]);
