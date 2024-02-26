"use client";

import React from "react";
import Form from "@/app/components/Form";

const SignIn = () => {
  return (
    <div className="wrapper">
      <Form
        endpoint="/api/signin"
        title="Logga in på Kebappen"
        redirect="/admin/dashboard"
      />
    </div>
  );
};

export default SignIn;
