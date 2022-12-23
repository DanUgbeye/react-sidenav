import React from "react";
import { sessionValue } from "../app.interface";
import ArrowDownLeftIcon from "../assets/svg/arrowDownLeft.svg";
import ArrowUpRightIcon from "../assets/svg/arrowUpRight.svg";

export default function SessionData(props: {
  data: sessionValue;
}) {
  return (
    <>
      {props.data.value ? (
        <div className=" flex gap-2 ">
          <span className="  ">{props.data.value.toLocaleString()}</span>
          {props.data.trend === "UP" && (
            <ArrowUpRightIcon className=" text-green-400 w-4 " />
          )}
          {props.data.trend === "DOWN" && (
            <ArrowDownLeftIcon className=" text-red-400 w-4 " />
          )}
        </div>
      ) : (
        " - "
      )}
    </>
  );
}
