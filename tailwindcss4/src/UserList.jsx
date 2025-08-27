import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router";
export default function UserList() {
  //State
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const url = "http://localhost:3000/students";
  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);
  //Fetch Data
  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };

  const deleteUser = async (id) => {
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });
    response = await response.json();
    if (response) {
      alert("User Recode was Deleted");
      getUserData();
    }
  };
  const editUser = (id) => {
    navigate("/edit/" + id);
  };
  return (
    <div>
      <h1 style={{ fontSize: "30px" }}>
        Make Routers and Pages for add User and User List UI
      </h1>
      <ul className="user-list user-list-header">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
        <li>Edit</li>
      </ul>
      {/* MAP Function */}
      {!loading ? (
        userData.map((user, index) => (
          <ul key={index} className="user-list">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <li>
              <button
                style={{
                  border: "2px solid gray",
                  borderRadius: "4px",
                  padding: "2px",
                  backgroundColor: "lightgray",
                }}
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </li>
            <li>
              <button
                style={{
                  border: "2px solid gray",
                  borderRadius: "4px",
                  padding: "2px",
                  backgroundColor: "lightgray",
                  width: "60px",
                }}
                onClick={() => editUser(user.id)}
              >
                Edit
              </button>
            </li>
          </ul>
        ))
      ) : (
        <h1>Data Loading...</h1>
      )}
    </div>
  );
}
