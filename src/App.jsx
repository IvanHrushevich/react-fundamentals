import Posts from "./pages/Posts";
import About from "./pages/About";
import Root from "./components/Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "*",
          element: <h2>Page Not Found</h2>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
