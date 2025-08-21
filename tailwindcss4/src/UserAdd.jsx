import { useState } from "react";

export default function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const createUser = async () => {
    console.log(name, age, email);
    const url = "http://localhost:3000/students";
    let response = await fetch(url, {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response) {
      alert("Added New User");
    }
  };
  return (
    <div className="home-sty">
      <h1
        style={{
          fontSize: "40px",
          color: "seashell",
        }}
      >
        Add User
      </h1>
      {/* /////H2//// */}
      <h2
        style={{
          color: "rebeccapurple",
          fontSize: "20px",
        }}
      >
        Please Add the Information About New Uesr
      </h2>
      {/* //INPUT FIELD// */}
      <div className="input-field">
        <h1>UserName : </h1>
        <input
          style={{
            border: "2px solid black",
            borderRadius: "5px",
          }}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter Name"
        />
        <br />
        <br />
        <h1>UserAge : </h1>
        <input
          style={{
            border: "2px solid black",
            borderRadius: "5px",
          }}
          onChange={(event) => setAge(event.target.value)}
          type="text"
          placeholder="Enter Age"
        />
        <br />
        <br />
        <h1>Email : </h1>
        <input
          style={{
            border: "2px solid black",
            borderRadius: "5px",
          }}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Enter Email"
        />
        <br />
        <br />
        <button
          style={{
            border: "2px solid black",
            borderRadius: "5px",
          }}
          onClick={createUser}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
