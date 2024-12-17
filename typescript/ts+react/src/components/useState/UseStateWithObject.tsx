import { useState } from "react";

type User = {
  username: string;
  email: string;
  password: string;
};

const UseStateWithObject = () => {
  let intialState: User = {
    username: "",
    email: "",
    password: "",
  };

  const [userInfo, setUserInfo] = useState<User>(intialState);

  console.log(userInfo);
  return (
    <div>
      <div className="form">
        <h4>Form</h4>
        <div>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            onChange={(event) => {
              setUserInfo({
                ...userInfo,
                username: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            onChange={(event) => {
              setUserInfo({
                ...userInfo,
                email: event.target.value,
              });
            }}
          />
        </div>{" "}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            onChange={(event) => {
              setUserInfo({
                ...userInfo,
                password: event.target.value,
              });
            }}
          />
        </div>
        <button
          className="btn1"
          onClick={(event) => {
            event.preventDefault();
            console.log("Form Data : ", userInfo);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UseStateWithObject;
