import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context/index";

function Root() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <>
      <div className="navbar">
        <MyButton onClick={logout}>Log out</MyButton>
        <div className="navbar_links">
          <Link to="/about" style={{ marginRight: 20 }}>
            About
          </Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Root;
