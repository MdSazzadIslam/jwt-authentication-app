import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/authService";

import "./Auth.css";

const Login = () => {
  const history = useHistory();
  const [userName, setuserName] = useState(null);
  const [userPass, setuserPass] = useState(null);

  const login = async (e, userName, userPass) => {
    e.preventDefault(); // preventing browser to reload the component
    try {
      await authService
        .login(userName, userPass)
        .then((respose) => {
          console.log(respose.data);
          history.push("/Dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="login">
      <form
        onSubmit={(e) => {
          login(e, userName, userPass);
        }}
      >
        <input
          type="text"
          id="userName"
          placeholder="Name"
          name="userName"
          value={userName}
          onChange={(event) => setuserName(("userName", event.target.value))}
        />
        <br />
        <input
          type="password"
          id="userPass"
          placeholder="Password"
          name="userPass"
          value={userPass}
          onChange={(e) => setuserPass(("userPass", e.target.value))}
        />
        <br />
        <button class="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
