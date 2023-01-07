import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import useNav from "../../hooks/useNav.hook";
import useProfileDropdown from "../../hooks/useProfileDropdown.hook";
import DarkModeButton from "./DarkModeButton.component";
import ProfileDropdown from "./ProfileDropdown.component";

export default function Navbar() {
  const { openNav } = useNav();
  const { profileDropdownExpanded, openProfileDropdown, closeProfileDropdown } =
    useProfileDropdown();

  return (
    <div className=" bg-gray-100 dark:bg-gray-800 flex items-center px-6 py-2 mt-0 mb-8 md:ml-0.5 h-16 md:rounded-b-lg sticky top-0 right-0 ">
      <button
        className=" h-10 aspect-square grid place-items-center cursor-pointer left-6 top-3 md:hidden active:scale-[1.2] rounded-full transition-all "
        onClick={() => openNav()}
      >
        <SlMenu size={"20px"} className=" " />
      </button>

      {/* <div className=" w-[250px] bg-gray-200 rounded-lg h-10 px-2 items-center hidden  text-gray-400 font-normal ">
        Search
      </div> */}

      <div className="  ml-auto flex gap-x-4 ">
        <DarkModeButton />
        <div className=" flex gap-x-4 items-center h-10 p-1 ">
          <div className=" flex flex-col items-start">
            <span className=" font-medium text-sm ">Daniel Ugbeye</span>
            <span className=" text-sm text-gray-400 ">User</span>
          </div>
          <button
            onClick={() =>
              !profileDropdownExpanded
                ? openProfileDropdown()
                : closeProfileDropdown()
            }
            className=" flex gap-x-4 items-center hover:bg-gray-200/50 dark:hover:bg-gray-600/50 py-1 px-2 rounded-full "
          >
            <span className=" bg-green-300 dark:bg-green-500 dark:text-white h-[2.3rem] aspect-square grid place-items-center rounded-full font-medium border-2 dark:border-gray-800  outline outline-1 outline-green-400 hover:shadow-round-md hover:shadow-gray-300 ">
              DU
            </span>
            {/* <span className="  ">V</span> */}
            <FaAngleDown size={"1rem"} />
          </button>
        </div>
      </div>

      <ProfileDropdown />
    </div>
  );
}
