import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./router/router";
import { AuthContext } from "./context/index";

import "./styles/App.css";
import Loader from "./components/UI/loader/Loader";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const routes = isAuth ? privateRoutes : publicRoutes;
  const router = createBrowserRouter(routes);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      {isLoading ? <Loader /> : <RouterProvider router={router} />}
    </AuthContext.Provider>
  );
}

export default App;
