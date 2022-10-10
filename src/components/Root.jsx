import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="navbar">
        <div className="navbar_links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Root;
