import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div>
        <h1>My Nav page</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
