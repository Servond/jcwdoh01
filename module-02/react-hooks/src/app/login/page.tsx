"use client";

import { useContext, useState } from "react";
import AuthContext from "@/context/authContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex flex-col justify-center justify-items-center gap-4">
      <label>Email:</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button
        className="standard-button"
        onClick={() => login({ email, password })}
      >
        Submit
      </button>
    </div>
  );
}
