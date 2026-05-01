"use client";

import "./styles/index.css";
import BaseInput from "@/components/base/input/index";
import BaseButton from "@/components/base/button";
import BaseTitleBar from "@/components/base/titleBar";

import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, seLoading] = useState(false);

  const handleLogin = async () => {
    seLoading(true);
    console.log({ username, password });
  };

  return (
    <div className="login-container">
      <BaseTitleBar
        title="Login With Next Js"
        subTitle="Authentication with username and password"
      />
      <BaseInput
        error={usernameError}
        label="Username"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <BaseInput
        error={passwordError}
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <BaseButton onClick={handleLogin} loading={loading} className="mt-10">
        Login
      </BaseButton>
    </div>
  );
}

export default LoginPage;
