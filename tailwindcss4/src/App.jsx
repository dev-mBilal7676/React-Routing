import { useState } from "react";
import "./App.css";
import "./index.css";

export default function App() {
  const colors = JSON.parse(localStorage.getItem("color"));
  const [red, setRed] = useState(colors && colors.red ? colors.red : 0);
  const [green, setGreen] = useState(colors && colors.green ? colors.green : 0);
  const [blue, setBlue] = useState(colors && colors.blue ? colors.blue : 0);
  const save = () => {
    console.log("saved");
    localStorage.setItem("color", JSON.stringify({ red, green, blue }));
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "10px",
      }}
    >
      <h1>Color Mixture</h1>
      <div
        style={{
          backgroundColor: "rgb(" + red + "," + green + "," + blue + ")",
          width: "150px",
          height: "150px",
          margin: "20px",
          border: "2px solid black",
          borderRadius: "10px",
        }}
      ></div>
      <label htmlFor="">Red</label>
      <input
        type="range"
        value={red}
        onChange={(event) => setRed(event.target.value)}
        min={0}
        max={256}
      />
      <br />
      <br />
      <label htmlFor="">Green</label>
      <input
        type="range"
        value={green}
        onChange={(event) => setGreen(event.target.value)}
        min={0}
        max={256}
      />
      <br />
      <br />
      <label htmlFor="">Blue</label>
      <input
        type="range"
        value={blue}
        onChange={(event) => setBlue(event.target.value)}
        min={0}
        max={256}
      />
      <br />
      <br />
      <button
        className="px-5 py-1 border border-gray-500 rounded bg-blue-600 text-white hover:bg-blue-700"
        onClick={save}
      >
        Save{" "}
      </button>
      <br />
      <br />
      <h1>Colors Combination Code</h1>
      <br />
      <h2>
        RGB Color:({red}, {green}, {blue})
      </h2>
    </div>
  );
}

//USE API IN REACT 19
// import "./App.css";
// import React, { Suspense, use } from "react";
// import "./index.css";
// const fetchData = () =>
//   fetch("http://localhost:3000/students").then((response) => response.json());
// console.log(fetchData());
// const usersResources = fetchData();
// export default function App() {
//   return (
//     <div>
//       <h1>Use API in React 19</h1>
//       <Suspense fallback={<p>Loading.....</p>}>
//         <Users usersResources={usersResources} />
//       </Suspense>
//     </div>
//   );
// }
// const Users = ({ usersResources }) => {
//   const userData = use(usersResources);
//   console.log(userData);

//   return (
//     <>
//       <h1>User List</h1>
//       <ul>
//         {userData.map((user) => (
//           <li>
//             {" "}
//             {user.name} — <br />
//             {user.age} <br />- {user.email}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// import { lazy, Suspense, useState } from "react";
// // import User from "./User.jsx";
// import "./index.css";
// // import "./App.css";
// const User = lazy(() => import("./User.jsx"));
// export default function App() {
//   const [load, setLoad] = useState(false);
//   return (
//     <div>
//       <h1>Lazy Loading in React</h1>
//       {load ? (
//         <Suspense fallback={<h1>Loading.........</h1>}>
//           <User />
//         </Suspense>
//       ) : null}
//       <button
//         className="px-4 py-2 border border-gray-500 rounded bg-blue-600 text-white hover:bg-blue-700"
//         onClick={() => setLoad(true)}
//       >
//         Load Program
//       </button>
//     </div>
//   );
// }

//useReducer
// import "./index.css";
// import "./App.css";
// import { useReducer } from "react";
// const emptyData = {
//   email: "",
//   name: "",
//   password: "",
//   city: "",
//   address: "",
// };
// const reducer = (data, action) => {
//   return { ...data, [action.type]: action.val };
// };
// export default function App() {
//   const [state, dispatch] = useReducer(reducer, emptyData);
//   console.log(state);

//   return (
//     <div>
//       <h1>useReducer Hook in React</h1>
//       <input
//         onChange={(event) =>
//           dispatch({ val: event.target.value, type: "email" })
//         }
//         className="border border-gray-400 rounded px-2 py-1"
//         type="text"
//         placeholder="Enter Email"
//       />
//       <br />
//       <br />
//       <input
//         onChange={(event) =>
//           dispatch({ val: event.target.value, type: "name" })
//         }
//         className="border border-gray-400 rounded px-2 py-1"
//         type="text"
//         placeholder="Enter Your  Name"
//       />
//       <br />
//       <br />
//       <input
//         onChange={(event) =>
//           dispatch({ val: event.target.value, type: "password" })
//         }
//         className="border border-gray-400 rounded px-2 py-1"
//         type="text"
//         placeholder="Enter Password"
//       />
//       <br />
//       <br />
//       <input
//         onChange={(event) =>
//           dispatch({ val: event.target.value, type: "city" })
//         }
//         className="border border-gray-400 rounded px-2 py-1"
//         type="text"
//         placeholder="Enter City"
//       />
//       <br />
//       <br />
//       <input
//         onChange={(event) =>
//           dispatch({ val: event.target.value, type: "address" })
//         }
//         className="border border-gray-400 rounded px-2 py-1"
//         type="text"
//         placeholder="Enter Address"
//       />
//       <br />
//       <br />
//       <button className="px-4 py-2 border border-gray-500 rounded bg-blue-600 text-white hover:bg-blue-700">
//         Add Detail
//       </button>
//       <br />
//       <br />
//       <ul className="list-disc pl-6 text-gray-700">
//         <li>Email: {state.email}</li>
//         <li>Name: {state.name}</li>
//         <li>Password: {state.password}</li>
//         <li>City: {state.city}</li>
//         <li>Address: {state.address}</li>
//       </ul>
//     </div>
//   );
// }

//useActioonState
// import { useActionState } from "react";
// import "./index.css";

// export default function App() {
//   const handleLogin = (prevData, formData) => {
//     let name = formData.get("name");
//     let password = formData.get("password");
//     // console.log(name, password);
//     let regex = /^[A-Z0-9]+$/i;
//     if (!name || name.length > 10) {
//       return { error: "Name should be contain 10 characters.", name, password };
//     } else if (!regex.test(password)) {
//       return {
//         error: "Password can contain Numbers and Alphabets.",
//         name,
//         password,
//       };
//     } else {
//       return { message: "Login Successfully", name, password };
//     }
//   };
//   const [data, action, pending] = useActionState(handleLogin);
//   console.log(data);

//   return (
//     <div>
//       <h1>Validation with useActionState</h1>
//       {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
//       {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
//       <form action={action}>
//         <h1>
//           <b>Name : </b>
//         </h1>
//         {/* INPUT FIELD 1 */}
//         <input
//           style={{
//             border: "1px solid black",
//           }}
//           defaultValue={data?.name}
//           name="name"
//           type="text"
//           placeholder="Enter Name"
//         />
//         <br />
//         <br />

//         {/* INPUT FIELD 2 */}
//         <h1>
//           <b>Password : </b>
//         </h1>
//         <input
//           style={{
//             border: "1px solid black",
//           }}
//           defaultValue={data?.password}
//           name="password"
//           type="text"
//           placeholder="Enter Password"
//         />
//         <br />
//         <br />
//         {/* Btn */}
//         <button
//           style={{
//             border: "2px solid black",
//             width: "60px",
//             padding: "2px",
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

//Simple Validation
// import { useState } from "react";
// import "./App.css";
// export default function App() {
//   // NAME ERROR
//   const [name, setName] = useState("");
//   const [nameErr, setNameErr] = useState("");

//   const handleName = (event) => {
//     console.log(event.target.value);
//     if (event.target.value.length > 12) {
//       setNameErr("Please enter valid username under 15 characters.");
//     } else {
//       setNameErr("");
//     }
//   };
//   // PASSWORD ERROR
//   const [password, setPassword] = useState("");
//   const [passErr, setPassErr] = useState("");

//   const handlePassword = (event) => {
//     const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//     if (regex.text(event.target.value)) {
//       setNameErr();
//     } else {
//       setNameErr(
//         "Please enter valid Password.Only Number and Alphabet allowed."
//       );
//     }
//   };
//   return (
//     <div className="Validation">
//       <h1>
//         <b>Name : </b>
//       </h1>
//       {/* INPUT FIELD 1 */}
//       <input
//         className={nameErr ? "error" : "input-field-all"}
//         type="text"
//         onChange={handleName}
//         placeholder="Enter Name"
//       />
//       <br />
//       <span className="red-color">{nameErr && nameErr}</span>
//       <br />

//       {/* INPUT FIELD 2 */}
//       <h1>
//         <b>Password : </b>
//       </h1>
//       <input
//         className={passErr ? "error" : "input-field-all"}
//         onChange={handlePassword}
//         type="text"
//         placeholder="Enter Password"
//       />
//       <br />
//       <span className="red-color">{passErr && passErr}</span>
//       <br />
//       {/* Btn */}
//       <button disabled={passErr || nameErr} className="Btn">
//         Login
//       </button>
//     </div>
//   );
// }

// import { NavLink, Route, Routes } from "react-router";
// import UserList from "./UserList";
// import UserAdd from "./UserAdd";
// import Home from "./Home";
// import UserEdit from "./UserEdit";

// export default function App() {
//   return (
//     <div>
//       <ul
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           backgroundColor: "salmon",
//           fontSize: "20px",
//           padding: "10px",
//         }}
//       >
//         <li>
//           <NavLink to="/">
//             <h1>
//               <b>Home</b>
//             </h1>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/list">
//             <h1>
//               <b>User List</b>
//             </h1>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/add">
//             <h1>
//               <b>Add User</b>
//             </h1>
//           </NavLink>
//         </li>
//       </ul>
//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/list" element={<UserList />} />
//         <Route path="/add" element={<UserAdd />} />
//         <Route path="/edit/:id" element={<UserEdit />} />
//       </Routes>
//     </div>
//   );
// }

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
