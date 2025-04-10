"use client";
import { useRouter } from "next/navigation";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/16/solid";

const menus = [
  {
    label: "Purchase Order",
    path: "/purchase-order",
    icon: <ArrowPathRoundedSquareIcon className="size-8" />,
  },
];

export default function SideBar() {
  const router = useRouter();

  const handleListItemClick = (path: string) => () => {
    router.push(path);
  };

  return (
    <div className="w-[30rem] h-screen justify-center justify-items-center bg-gray-200 text-black text-center">
      <ul className="p-12">
        <div
          className="mb-10 text-4xl cursor-pointer"
          onClick={handleListItemClick("/")}
        >
          LOGO
        </div>
        {menus.map((menu, idx) => (
          <div
            key={idx}
            className="rounded-lg flex flex-row gap-4 hover:bg-gray-400 cursor-pointer p-4 text-2xl "
            onClick={handleListItemClick(menu.path)}
          >
            {menu.icon}
            {menu.label}
          </div>
        ))}
      </ul>
    </div>
  );
}
