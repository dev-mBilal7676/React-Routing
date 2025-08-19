import { Link } from "react-router";

export default function UsersList() {
  const userData = [
    { id: 1, name: "Bilal" },
    { id: 2, name: "Aliyan" },
    { id: 3, name: "Abdul Khaliq" },
    { id: 4, name: "Zain" },
    { id: 5, name: "Yasir" },
  ];
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>UsersList Page</h1>
      {userData.map((item) => (
        <div>
          <h3>
            <Link to={"/users/" + item.id}>{item.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}
