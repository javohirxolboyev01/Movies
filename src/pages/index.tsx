import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetail = lazy(() => import("./Movies/MovieDetail"));
const NotFound = lazy(() => import("./NotFound/NotFound"));

const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/movies/:id",
          element: <MovieDetail />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
};

export default React.memo(MainRoute);
