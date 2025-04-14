"use client";
import AuthContext from "@/context/authContext";
import { IUser } from "@/context/authContext";
import { useState, useEffect } from "react";

export default function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });

  const login = (props: IUser) => {
    setUser(props);
    sessionStorage.setItem("user", props.email);
  };

  const logout = () => {
    setUser({ email: "", password: "" });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("user");

    if (token) setUser({ email: token, password: "" });
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
