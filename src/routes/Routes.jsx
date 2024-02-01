import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import ErrorPage from "../components/Errorpage/ErrorPage";
import DetailsPage from "../components/DetailsPage/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: 'summary/:id',
        element: <DetailsPage></DetailsPage>
    },
    ],
  },
]);
