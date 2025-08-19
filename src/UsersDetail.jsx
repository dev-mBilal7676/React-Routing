import { Link, useParams } from "react-router";

export default function UsersDetail() {
  const paramsData = useParams();

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Users Detail Page</h1>
      <h1>User id is : {paramsData.id}</h1>
      <Link to="/users">
        <h2>Go Back</h2>
      </Link>
    </div>
  );
}
