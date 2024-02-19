"use client";

import React, { useState } from "react";
import "./login.scss";

type Props = {};

const Login = (props: Props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setCredentials({
      ...credentials,
      [key]: value,
    });
  };

  console.log(credentials);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted!");
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="login-contain">
          <h1>Logga in på Kebappen</h1>
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              value={credentials.username}
              type="text"
              placeholder="Användarnamn"
              onChange={handleInputChange}
            />
            <input
              name="password"
              value={credentials.password}
              type="password"
              placeholder="Lösenord"
              onChange={handleInputChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return <nav></nav>;
};

export default Login;
