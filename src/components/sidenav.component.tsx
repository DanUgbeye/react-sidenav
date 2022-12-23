import React from "react";
import { NavLink } from "react-router-dom";
import useNav from "../hooks/useNav.hook";
import Backdrop from "./backdrop.component";

const navItems = [
  {
    name: "home",
    url: "/home",
    img: "???",
    imgAlt: "Home logo",
    active: false,
  },

  {
    name: "profile",
    url: "/profile",
    img: "???",
    imgAlt: "profile logo",
    active: false,
  },

  {
    name: "about",
    url: "/about",
    img: "???",
    imgAlt: "about logo",
    active: true,
  },
];

export default function SideNav() {
  const { navExpanded, closeNav } = useNav();

  return (
    <Backdrop show={navExpanded}>
      <section
        className={`${
          navExpanded
            ? " translate-x-0 "
            : " translate-x-[-200%] md:translate-x-0 "
        } "  md:block sm:h-full fixed left-0 w-[100%] max-w-[300px] md:max-w-[200px] md:w-[200px] bg-stone-100 top-0 transition-all duration-300 "`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" top-0 w-full md:sticky h-screen md:overflow-y-auto md:min-h-fit md:p-4 ">
          <h2 className="  text-2xl font-medium text-center my-3 sm:sticky top-0  ">
            Sidenav Project
          </h2>

          <div
            className={` overflow-hidden px-4 md:px-0 sm:block transition-all duration-300 `}
          >
            {/* {navItems.map((navItem, index) => (
              <NavLink key={index} {...navItem} onClick={closeNav} />
            ))} */}

            <NavLink
              to="/"
              onClick={closeNav}
              className={({ isActive }) => (`${isActive ? " " : ""} mb-4 flex gap-x-2 h-12 items-center text-lg rounded-lg font-medium px-2 transition-all duration-300`)}
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      </section>
    </Backdrop>
  );
}
