import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Activity from "../pages/Activity/Activity/Activity";
import About from "../pages/About/About/About";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'activity',
          element: <Activity></Activity>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },
  ]);