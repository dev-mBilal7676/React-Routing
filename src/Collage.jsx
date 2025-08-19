import { Link, NavLink, Outlet } from "react-router";

export default function Collage() {
  return (
    <div className="collage" style={{ textAlign: "center" }}>
      <h1>Collage Page</h1>
      <h3>
        <Link to="/">Go Back to Home</Link>
      </h3>
      <NavLink className="link" to="">
        Students
      </NavLink>
      <NavLink className="link" to="department">
        Department
      </NavLink>
      <NavLink className="link" to="collagedetail">
        Collage Detail
      </NavLink>
      <Outlet />
    </div>
  );
}
