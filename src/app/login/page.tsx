"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push(
      "https://api.instagram.com/oauth/authorize?client_id=2878233172317869&redirect_uri=https://localhost:3000/api/auth&scope=user_profile,user_media&response_type=code"
    );
  };
  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Login;
