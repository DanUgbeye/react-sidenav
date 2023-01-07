import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut, FiSettings } from "react-icons/fi";
import useProfileDropdown from "../../hooks/useProfileDropdown.hook";

export interface ProfileDropdownProps {}

export default function ProfileDropdown(props: ProfileDropdownProps) {
  const { profileDropdownExpanded, closeProfileDropdown } =
    useProfileDropdown();

  return (
    <div
      className={` ${
        profileDropdownExpanded
          ? " flex translate-y-0 opacity-100 "
          : " opacity-0 translate-y-[-40%] pointer-events-none "
      } text-sm absolute top-[72px] right-4 flex-col rounded-lg p-2 bg-gray-100 dark:bg-gray-800 shadow-round-md shadow-gray-300 dark:shadow-gray-600 gap-y-2 transition-all duration-300 w-[175px] `}
    >
      <NavLink
        to={"/profile"}
        onClick={() => closeProfileDropdown()}
        className="rounded-lg h-10 flex gap-x-2 items-center px-4 hover:text-green-500 "
      >
        <FaRegUser size={"12px"} />
        <span>Profile</span>
      </NavLink>

      <NavLink
        to={"/settings"}
        onClick={() => closeProfileDropdown()}
        className="rounded-lg h-10 flex gap-x-2 items-center px-4 hover:text-green-500 "
      >
        <FiSettings size={"12px"} />
        <span>Settings</span>
      </NavLink>

      {/* DIVIDER */}
      <div className={` w-full h-[1px] bg-gray-400 `}></div>

      <button
        onClick={() => closeProfileDropdown()}
        className=" rounded-lg h-10 flex gap-x-2 items-center px-4 hover:text-orange-400 "
      >
        <FiLogOut size={"12px"} />
        <span>Log out</span>
      </button>
    </div>
  );
}
