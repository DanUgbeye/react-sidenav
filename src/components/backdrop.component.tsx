import React from "react";
import { ChildrenProp } from "../app.interface";

export default function Backdrop({
  children,
  show
}: ChildrenProp & { show: boolean }) {
  return (
    <div
      className={`${show ? " fixed inset-0 bg-black/30 md:bg-transparent pointer-events-none h-full w-full " : "  "} `}
    >
      {children}
    </div>
  );
}

