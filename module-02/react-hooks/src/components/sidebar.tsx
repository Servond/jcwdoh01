"use client";
import { useRouter } from "next/navigation";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import AuthContext from "@/context/authContext";

const menus = [
  {
    label: "Login",
    path: "/login",
    icon: <ArrowPathIcon className="size-6" />,
  },
];

export default function SideBar() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const onMenuItemClick = (path: string) => () => {
    router.push(path);
  };

  return (
    <div className="p-10 w-[25rem] h-screen bg-gray-500 text-center cursor-pointer justify-between">
      <div>LOGO</div>
      <div>
        <ul>
          {menus.map((menu, idx) => (
            <div
              key={idx}
              className="flex flex-row gap-4 cursor-pointer hover:bg-gray-600 p-4 rounded-md"
              onClick={onMenuItemClick(menu.path)}
            >
              {menu.icon}
              {menu.label}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="standard-button"
          onClick={onMenuItemClick("/register")}
        >
          Register
        </button>
        <button className="standard-button" onClick={onMenuItemClick("/login")}>
          Login
        </button>
        <button className="standard-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
