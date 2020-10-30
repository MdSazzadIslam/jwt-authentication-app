import React, { useState } from "react";
import authService from "../services/authService";

import "./Auth.css";

const Registration = () => {
  const [userName, setuserName] = useState(null);
  const [userPass, setuserPass] = useState(null);

  const login = async (e, userName, userPass) => {
    e.preventDefault(); // preventing browser to reload the component
    try {
      await authService.registration(userName, userPass);
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
          onChange={(e) => setuserName("userName", e.target.value)}
        />
        <br />
        <input
          type="text"
          id="userPass"
          placeholder="Password"
          name="userPass"
          value={userPass}
          onChange={(e) => setuserPass("userPass", e.target.value)}
        />
        <br />
        <button class="button" type="submit">
          Registration
        </button>
      </form>
    </div>
  );
};

export default Registration;
