import { NavLink, Outlet } from "react-router";
import "./header.css";
export default function NavBar() {
  return (
    <div>
      {" "}
      <div className="header">
        <div>
          <NavLink className="link" to="/">
            <h2>Logo</h2>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink className="link" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/collage">
              Collage
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Users">
              Users
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

{
  /* <Link to="/">
        <h2>Home Page</h2>
      </Link>
      <br />
      <br />
      <hr />
      <Link to="/about">
        <h2>About Page</h2>
      </Link>
      <br />
      <br />
      <hr />
      <Link to="/login">
        <h2>Login Page</h2>
      </Link> */
}
