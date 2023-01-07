import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useDarkMode from "../../hooks/useDarkMode.hook";

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={(e) => {
        toggleDarkMode();
      }}
      className=" rounded-lg h-10 flex gap-x-2 items-center ml-auto aspect-square justify-center hover:bg-gray-200/60 dark:hover:bg-gray-700/60 "
    >
      {darkMode ? (
        <MdLightMode size={"1.2rem"} className={" text-white  "} />
      ) : (
        <MdDarkMode size={"1.2rem"} className={" text-gray-800 "} />
      )}
    </button>
  );
}
