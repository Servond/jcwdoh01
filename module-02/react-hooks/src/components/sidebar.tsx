"use client";
import { useRouter } from "next/navigation";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import AuthContext from "@/context/authContext";

const menus = [
  {
    label: "Use State",
    path: "/use-state",
    icon: <ArrowPathIcon className="size-6" />,
  },
  {
    label: "Use Effect",
    path: "/use-effect",
    icon: <ArrowPathIcon className="size-6" />,
  },
  {
    label: "Use Ref",
    path: "/use-ref",
    icon: <ArrowPathIcon className="size-6" />,
  },
  {
    label: "Use Memo",
    path: "/use-memo",
    icon: <ArrowPathIcon className="size-6" />,
  },
  {
    label: "Use Reducer",
    path: "/use-reducer",
    icon: <ArrowPathIcon className="size-6" />,
  },
  {
    label: "Use Callback",
    path: "/use-callback",
    icon: <ArrowPathIcon className="size-6" />,
  },
  {
    label: "Custom Hook",
    path: "/custom-hook",
    icon: <ArrowPathIcon className="size-6" />,
  },
  {
    label: "Global State",
    path: "/global-state",
    icon: <ArrowPathIcon className="size-6" />,
  },
  {
    label: "Local State",
    path: "/local-state",
    icon: <ArrowPathIcon className="size-6" />,
  },
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
    <div className="p-10 w-[25rem] h-screen bg-gray-500 text-center cursor-pointer">
      <ul>
        <div className="text-4xl mb-10" onClick={onMenuItemClick("/")}>
          Hello, {user.email}
        </div>
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
      <button className="standard-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
