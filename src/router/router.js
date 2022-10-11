import { Navigate } from "react-router-dom";

import Root from "../components/Root";
import About from "../pages/About";
import Post from "../pages/Post";
import Posts from "../pages/Posts";
import Login from "../pages/Login";

export const publicRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Navigate to="/login" />,
      },
    ],
  },
];

export const privateRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Navigate to="/posts" />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "*",
        element: <Navigate to="/posts" />,
      },
    ],
  },
];
