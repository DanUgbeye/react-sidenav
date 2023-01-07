import React from "react";
import SquarePollVerticalIcon from "../../../components/svg/squarePollVertical.svg";

export type userData = {
  country: string;
  users: number;
}[];

export type newUserData = {
  country: string;
  newUsers: number;
}[];

export default function TopRatedCountries(props: {
  users: userData;
  newUsers: newUserData;
}) {
  return (
    <div className=" grid sm:grid-cols-2 gap-x-8 text-sm ">
      <div className=" rounded-xl bg-gray-100 dark:bg-gray-800 p-6 mb-6 ">
        <h4 className=" font-medium mb-4 flex ">
          <SquarePollVerticalIcon className=" w-5 text-green-400 mr-2 " />
          <span className=" inline-flex ">New Orders</span>{" "}
          <span className=" text-gray-400 ml-auto inline-flex pr-2 ">
            Top 5 Countries 
          </span>
        </h4>

        <div className=" rounded-lg border-gray-300 border p-2 ">
          <ul className="  ">
            {props.newUsers.map((data, index) => (
              <li key={index} className=" mb-2 py-1 px-2 flex ">
                <span className="  ">{data.country} </span>{" "}
                <span className=" ml-auto text-green-500 font-medium tracking-wider ">
                  +{data.newUsers}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" rounded-xl bg-gray-100  dark:bg-gray-800 p-6 mb-6  ">
        <h4 className=" font-medium mb-4 flex ">
          <SquarePollVerticalIcon className=" w-5 text-green-400 mr-2 " />
          <span className=" inline-flex ">All Users</span>{" "}
          <span className=" text-gray-400 ml-auto inline-flex pr-2 ">
            Top 5 Countries 
          </span>
        </h4>

        <div className=" rounded-lg border-gray-300 border p-2 ">
          <ul className="  ">
            {props.users.map((data, index) => (
              <li key={index} className=" mb-2 py-1 px-2 flex ">
                <span className="  ">{data.country} </span>{" "}
                <span className=" ml-auto font-medium tracking-wider ">
                  {data.users.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
