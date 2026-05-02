"use client";
import "./styles/index.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { authController } from "../controller";

import BaseInput from "@/components/base/input/index";
import BaseButton from "@/components/base/button";
import BaseTitleBar from "@/components/base/titleBar";

import Alert from "../components/alert";

interface TFormData {
  username: string;
  password: string;
}

function LoginPage() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, seLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleValidation = (formData: TFormData) => {
    if (!formData.username) setUsernameError("Username is required");
    else setUsernameError("");
    if (!formData.password) setPasswordError("Password is required");
    else setPasswordError("");
  };

  const handleLogin = async () => {
    const formData = { username, password };
    seLoading(true);
    handleValidation(formData);
    if (username && password) {
      const response: boolean | undefined = await authController.login({
        username,
        password,
      });
      if (response) router.push("/admin/users");
      else setErrorMessage("Username | Password Not valid");
    }
    seLoading(false);
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

      {errorMessage ? (
        <div className="mt-10">
          <Alert>{errorMessage}</Alert>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoginPage;
