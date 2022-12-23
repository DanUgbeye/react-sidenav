import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.component";
import SideNav from "../components/sidenav.component";
import useNav from "../hooks/useNav.hook";

export default function SecondaryLayout() {
  const { navExpanded, closeNav } = useNav();
  return (
    <main
      className=" bg-stone-200 text-stone-800 flex flex-col min-h-screen h-fit "
      onClick={() => navExpanded && closeNav()}
    >
      <SideNav />
      <section className=" md:ml-[200px] ">
        <Navbar />
        <section className=" px-8  ">
          <Outlet />
        </section>
      </section>
    </main>
  );
}
