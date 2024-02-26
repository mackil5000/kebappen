import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface SubmitResponse {
  success: boolean;
  message: string;
}

type Props = {
  endpoint: string;
  title: string;
  redirect: string;
};

const Form = ({ endpoint, title, redirect }: Props) => {
  const [disabled, setDisabled] = useState(false);
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

    async function submit() {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        const data: SubmitResponse = await res.json();

        if (data.success) {
          router.push(redirect);
        } else {
          setErrorMessage("Sluta va så kass jävla hora");
        }
      } catch (err) {
        setErrorMessage("Servern är sur på dig");
      } finally {
        setDisabled(true);
      }
    }

    submit();
  };

  return (
    <div className="login-contain">
      <h1>{title}</h1>
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
      {errorMessage ? <p className="message-error">{errorMessage}</p> : null}
    </div>
  );
};

type SBProps = { disabled: boolean };

const SubmitButton = ({ disabled }: SBProps) => {
  console.log(disabled);
  return <input type="submit" value="Skicka" disabled={disabled} />;
};

export default Form;
