import React from "react";

type NavLinkProps = {
  name: string;
  url: string;
  img: string;
  imgAlt: string;
  active?: boolean;
  onClick?: () => void;
};

export default function NavLink(props: NavLinkProps) {
  return (
    <div
      className={`${
        props.active ? "  " : "  "
      } "  mb-4 flex gap-x-2 h-12 items-center text-lg rounded-lg font-medium px-2 transition-all duration-300 "`}
      onClick={() => props.onClick ? props.onClick() : undefined}
    >
      {/* <img src={props.img} alt={props.imgAlt} className=" " /> */}
      <span className="  ">{props.name}</span>
    </div>
  );
}
