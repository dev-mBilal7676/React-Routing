import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function UserEdit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const url = "http://localhost:3000/students/" + id;
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  const updateUserData = async () => {
    console.log(name, age, email);
    let response = await fetch(url, {
      method: "Put",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response) {
      alert("User Data Updated");
      navigate("/list");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <br />
      <br />
      {/* INPUT FIELD 1 */}
      <h1>Name:</h1>
      <input
        style={{
          border: "2px solid black",
        }}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="User Name"
      />
      {/* INPUT FIELD 2 */}
      <br />
      <br />
      <h1>Age:</h1>
      <input
        style={{
          border: "2px solid black",
        }}
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="User Age"
      />
      {/* INPUT FIELD 3 */}
      <br />
      <br />
      <h1>Email:</h1>
      <input
        style={{
          border: "2px solid black",
        }}
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="User Email"
      />
      <br />
      <br />
      {/* BUTTON */}
      <button
        onClick={updateUserData}
        style={{
          border: "1px solid black",
          backgroundColor: "lightgray",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <b>Update Uesr Detail</b>
      </button>
    </div>
    // <div className="home-sty">
    //   <h1
    //     style={{
    //       fontSize: "40px",
    //       color: "seashell",
    //     }}
    //   >
    //     Edit User Detail
    //   </h1>
    //   {/* /////H2//// */}
    //   <h2
    //     style={{
    //       color: "rebeccapurple",
    //       fontSize: "20px",
    //     }}
    //   >
    //     Please Add the Information About New Uesr
    //   </h2>
    //   {/* //INPUT FIELD// */}
    //   <div className="input-field">
    //     <h1>UserName : </h1>
    //     <input
    //       style={{
    //         border: "2px solid black",
    //         borderRadius: "5px",
    //       }}
    //       onChange={(event) => setName(event.target.value)}
    //       type="text"
    //       placeholder="Enter Name"
    //     />
    //     <br />
    //     <br />
    //     <h1>UserAge : </h1>
    //     <input
    //       style={{
    //         border: "2px solid black",
    //         borderRadius: "5px",
    //       }}
    //       onChange={(event) => setAge(event.target.value)}
    //       type="text"
    //       placeholder="Enter Age"
    //     />
    //     <br />
    //     <br />
    //     <h1>Email : </h1>
    //     <input
    //       style={{
    //         border: "2px solid black",
    //         borderRadius: "5px",
    //       }}
    //       onChange={(event) => setEmail(event.target.value)}
    //       type="text"
    //       placeholder="Enter Email"
    //     />
    //     <br />
    //     <br />
    //     <button
    //       style={{
    //         border: "2px solid black",
    //         borderRadius: "5px",
    //       }}
    //       onClick={createUser}
    //     >
    //       Submit
    //     </button>
    //   </div>
    // </div>
  );
}
