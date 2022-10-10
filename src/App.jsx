import Posts from "./pages/Posts";
import About from "./pages/About";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./styles/App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
