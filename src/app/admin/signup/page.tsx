"use client";

import React, { useState } from "react";
import "./signup.scss";

type Props = {};

const Signup = (props: Props) => {
  const [credentials, setCredentials] = useState({
    email: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(credentials),
    })
      .then((res) => res.text())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="login-contain">
          <h1>Skapa konto på Kebappen</h1>
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              value={credentials.email}
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

export default Signup;
