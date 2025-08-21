import { NavLink, Route, Routes } from "react-router";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "salmon",
          fontSize: "20px",
          padding: "10px",
        }}
      >
        <li>
          <NavLink to="/">
            <h1>
              <b>Home</b>
            </h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list">
            <h1>
              <b>User List</b>
            </h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/add">
            <h1>
              <b>Add User</b>
            </h1>
          </NavLink>
        </li>
      </ul>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
      </Routes>
    </div>
  );
}

// import { useEffect, useState } from "react";

// function App() {
//   const [usersData, setUsersData] = useState([]);
//   useEffect(() => {
//     getUserData();
//   }, []);
//   async function getUserData() {
//     const url = "https://dummyjson.com/user";
//     let response = await fetch(url);
//     response = await response.json();

//     setUsersData(response.users);
//   }
//   console.log(usersData);
//   return (
//     <div>
//       <h1 style={{ fontSize: "50px" }}>Fetch data from API</h1>
//       <ul
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           border: "1px solid #aaa",
//           margin: "0",
//           padding: "10px",
//           backgroundColor: "gray",
//           fontSize: "30px",
//         }}
//       >
//         <li>Name</li>
//         <li>Last Name</li>
//         <li>Age</li>
//         <li>Email</li>
//         <li>Phone</li>
//       </ul>
//       {usersData &&
//         usersData.map((user, index) => (
//           <ul
//             key={index}
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               border: "1px solid #aaa",
//               margin: "0",
//               padding: "10px",
//             }}
//           >
//             <li>{user.firstName}</li>
//             <li>{user.lastName}</li>
//             <li>{user.age}</li>
//             <li>{user.email}</li>
//             <li>{user.phone}</li>
//           </ul>
//         ))}
//     </div>
//   );
// }

// export default App;
