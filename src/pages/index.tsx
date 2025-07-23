import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetail = lazy(() => import("./Movies/MovieDetail"));
const ActorDetail = lazy(() => import("./Movies/ActorDetail"));
const WishlistPage = lazy(() => import("./WishlistPage/WishlistPage"));
const Search = lazy(() => import("./Search/Search"));
const Login = lazy(() => import("./login/Login"));
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
          path: "/actor/:id",
          element: <ActorDetail />,
        },
        {
          path: "/wishlist",
          element: <WishlistPage />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/login",
          element: <Login />,
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
