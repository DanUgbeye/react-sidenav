import React from "react";
import CloseIcon from "../assets/svg/close.svg";
import MenuIcon from "../assets/svg/menu.svg";
import useNav from "../hooks/useNav.hook";

export default function Navbar() {
  const { navExpanded, openNav, closeNav } = useNav();

  return (
    <div className=" rounded-none bg-stone-100 flex  items-center px-6 py-2 mt-0 mb-8 md:mt-4 md:rounded-lg md:mx-8 h-16 md:h-12 ">
      {!navExpanded && (
        <div
          className=" h-10 aspect-square grid place-items-center cursor-pointer fixed left-6 top-3 md:hidden  "
          onClick={() => openNav()}
        >
          <MenuIcon className=" h-6 " />
        </div>
      )}

      {navExpanded && (
        <div
          className=" h-10 aspect-square grid place-items-center cursor-pointer fixed left-6 top-3 md:hidden "
          onClick={() => closeNav()}
        >
          <CloseIcon className=" h-6 " />
        </div>
      )}

      <h1 className=" text-2xl font-semibold ml-16 md:ml-4 cursor-default ">Home</h1>

      <div className=" w-[250px] bg-stone-200 rounded-lg h-10 px-2 items-center hidden  text-stone-400 font-normal ">
        Search
      </div>
    </div>
  );
}
