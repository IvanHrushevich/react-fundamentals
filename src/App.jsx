import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./router/router";

import "./styles/App.css";

function App() {
  const isAuth = false;
  const routes = isAuth ? privateRoutes : publicRoutes;
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
