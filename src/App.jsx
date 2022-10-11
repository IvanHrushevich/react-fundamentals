import { RouterProvider } from "react-router-dom";

import { router } from "./router/router";

import "./styles/App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
