import { createBrowserRouter, Navigate } from "react-router-dom";

import Root1 from "../components/Root";
import Root from "../components/Root";
import About from "../pages/About";
import Post from "../pages/Post";
import Posts from "../pages/Posts";

export const router = createBrowserRouter([
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
]);
