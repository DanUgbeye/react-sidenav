import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsInfoCircle, BsPeople } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import useNav from "../../hooks/useNav.hook";
import Backdrop from "./Backdrop.component";
import SideNavLink from "./SideNavLink.component";

export default function SideNav() {
  const { navExpanded, closeNav } = useNav();

  return (
    <Backdrop show={navExpanded}>
      <section
        className={`${
          navExpanded
            ? " translate-x-0 "
            : " translate-x-[-200%] md:translate-x-0 "
        } "  md:block sm:h-full fixed left-0 w-[100%] max-w-[250px] md:max-w-[200px] md:w-[200px] bg-gray-100 dark:bg-gray-800 top-0 transition-all duration-300 "`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" top-0 w-full md:sticky h-screen md:overflow-y-auto md:min-h-fit md:p-4 ">
          {/* SIDENAV HEADER */}
          <div className=" grid grid-cols-[40px,_auto] md:grid-cols-1 items-center mx-4 md:mx-0 gap-x-2 my-3 ">
            {/* CLOSE SIDENAV BUTTON */}
            <button
              className=" h-10 aspect-square grid place-items-center cursor-pointer md:hidden active:bg-gray-200/70 active:scale-[1.3] hover:bg-gray-200/40 rounded-full transition-all "
              onClick={() => closeNav()}
            >
              <BiLeftArrowAlt size={"24px"} className=" text-gray-800 dark:text-gray-300 " />
            </button>

            <h2 className=" text-xl font-medium text-green-500 top-0  ">
              Sidenav Project
            </h2>
          </div>

          {/* NAV LINKS */}
          <div
            className={` overflow-hidden px-4 md:px-0 sm:block mt-16 transition-all duration-300 `}
          >
            <div className="  ">
              <SideNavLink to="/" onClick={closeNav}>
                <RxDashboard size={"1.2rem"} className=" " />
                <span className="  ">Dashboard</span>
              </SideNavLink>

              <SideNavLink disabled={true} to="/stock" onClick={closeNav}>
                <RxDashboard size={"1.2rem"} className=" " />
                <span className="  ">Tasks</span>
              </SideNavLink>

              <SideNavLink disabled={true} to="/order" onClick={closeNav}>
                <RxDashboard size={"1.2rem"} className=" " />
                <span className="  ">Goals</span>
              </SideNavLink>

              <SideNavLink disabled={true} to="/employee" onClick={closeNav}>
                <BsPeople size={"1.2rem"} className=" " />
                <span className="  ">Mentors</span>
              </SideNavLink>
            </div>

            {/* DIVIDER */}
            <div className={` w-full h-[1px] bg-gray-300 my-4 `}></div>

            <div>
              <SideNavLink to="/subscriptions" onClick={closeNav}>
                <BsInfoCircle size={"1.2rem"} className=" " />
                <span className="  ">Subscriptions</span>
              </SideNavLink>

              <SideNavLink to="/about" onClick={closeNav}>
                <BsInfoCircle size={"1.2rem"} className=" " />
                <span className="  ">About</span>
              </SideNavLink>
            </div>
          </div>
        </div>
      </section>
    </Backdrop>
  );
}
