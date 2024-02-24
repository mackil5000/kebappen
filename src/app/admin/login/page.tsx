"use client";

import React, { useState } from "react";
import "./login.scss";
import { useRouter } from "next/navigation";

interface LoginResponse {
  success: boolean;
  message: string;
}
type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    if (errorMessage !== null) setErrorMessage(null);
    const key = event.target.name;
    const value = event.target.value;
    setCredentials({
      ...credentials,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    async function authenticate() {
      const res = await fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      const data: LoginResponse = await res.json();

      if (data.success) {
        router.push("/admin/dashboard");
      } else {
        setErrorMessage(data.message);
      }
    }
    authenticate();
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="login-contain">
          <h1>Logga in på Kebappen</h1>
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
          {errorMessage ? (
            <p className="message-error">{errorMessage}</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return <nav></nav>;
};

export default Login;
