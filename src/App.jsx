import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Collage from "./Collage";
import NavBar from "./NavBar";
import ErrorPage from "./ErrorPage";
import Student from "./Student";
import Department from "./Department";
import CollageDetail from "./CollageDetail";

import UsersList from "./UsersList";
import UsersDetail from "./UsersDetail";

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UsersDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/collage" element={<Collage />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="collagedetail" element={<CollageDetail />} />
        </Route>

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
