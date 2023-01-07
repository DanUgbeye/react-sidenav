import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

export interface SideNavLinkProps extends PropsWithChildren {
  disabled?: boolean;
  to: string;
  onClick?: () => void;
}

export default function SideNavLink(props: SideNavLinkProps) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `${
          isActive
            ? " text-gray-600 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-600/50 before:opacity-100 duration-500 delay-100 text-[1rem] "
            : " text-gray-600 dark:text-gray-400 text-sm hover:text-[1rem] before:opacity-0 before:bg-transparent hover:bg-gradient-to-r hover:from-green-200/30 dark:hover:from-gray-200/10 hover:via-green-200/30 dark:hover:via-gray-200/10 hover:to-transparent hover:transition-all hover:duration:300 "
        } 
        before:rounded-full before:bg-green-400 before:w-1.5 before:aspect-square before:transition-opacity before:duration-300 rounded-2xl mb-2 flex gap-x-2 h-12 items-center  font-medium px-2 transition-all duration-300`
      }
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </NavLink>
  );
}
