import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import SideNav from "../components/sidenav";
import useNav from "../hooks/useNav.hook";
import useProfileDropdown from "../hooks/useProfileDropdown.hook";

export default function SecondaryLayout() {
  const { navExpanded, closeNav } = useNav();
  const { profileDropdownExpanded, closeProfileDropdown} = useProfileDropdown();

  // handles closing open global states
  function handleGlobalClick() {
    navExpanded && closeNav();
    profileDropdownExpanded && closeProfileDropdown();
  }

  return (
    <main
      className=" bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-[#e4e4e4] flex flex-col min-h-screen h-full "
      onClick={() => handleGlobalClick()}
    >
      <section className=" md:ml-[200px] ">
        <Navbar />
        <section className=" px-4 md:px-8   ">
          <Outlet />
        </section>
      </section>
       <SideNav />
    </main>
  );
}
