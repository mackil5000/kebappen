"use client";

import React, { useState } from "react";
import "./signup.scss";
import { useRouter } from "next/navigation";

type Props = {};

const Signup = (props: Props) => {
  const [disabled, setDisabled] = useState(false);

  const router = useRouter();

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
    setDisabled(true);
    event.preventDefault();

    const signup = async () => {
      try {
        const res = await fetch("/api/signup", {
          method: "POST",
          body: JSON.stringify(credentials),
        });

        const data = await res.json();
        if (data.success) {
          router.push("/admin/login");
        }
      } catch (err) {
        console.error("din jävla sopa");
      } finally {
        setDisabled(false);
      }
    };

    signup();
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
            <SubmitButton disabled={disabled} />
          </form>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return <nav></nav>;
};

type SBProps = { disabled: boolean };

const SubmitButton = ({ disabled }: SBProps) => {
  console.log(disabled);
  return <input type="submit" value="Skicka" disabled={disabled} />;
};

export default Signup;
