import React, { PropsWithChildren } from "react";

export interface BackdropProps extends PropsWithChildren {
  show: boolean;
}
export default function Backdrop({ children, show }: BackdropProps) {
  return (
    <div
      className={`${
        show
          ? " fixed inset-0 bg-black/30 md:bg-transparent h-full w-full "
          : "  "
      } `}
    >
      {children}
    </div>
  );
}
