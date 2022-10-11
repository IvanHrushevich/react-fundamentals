import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./router/router";
import { AuthContext } from "./context/index";

import "./styles/App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const routes = isAuth ? privateRoutes : publicRoutes;
  const router = createBrowserRouter(routes);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
