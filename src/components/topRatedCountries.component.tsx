import React from "react";
import SquarePollVerticalIcon from "../assets/svg/squarePollVertical.svg";

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
    <div className=" grid sm:grid-cols-2 gap-x-8  ">
      <div className=" rounded-xl bg-stone-100 p-6 mb-6 ">
        <h4 className=" font-medium text-lg mb-4 flex ">
          <SquarePollVerticalIcon className=" w-5 text-green-400 mr-2 " />
          <span className=" text-lg inline-flex ">New Orders</span>{" "}
          <span className=" text-stone-400 text-lg ml-auto inline-flex pr-2 ">
            Top 5 Countries 
          </span>
        </h4>

        <div className=" rounded-lg border-stone-300 border p-2 ">
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

      <div className=" rounded-xl bg-stone-100 p-6 mb-6  ">
        <h4 className=" font-medium text-lg mb-4 flex ">
          <SquarePollVerticalIcon className=" w-5 text-green-400 mr-2 " />
          <span className=" text-lg inline-flex ">All Users</span>{" "}
          <span className=" text-stone-400 text-lg ml-auto inline-flex pr-2 ">
            Top 5 Countries 
          </span>
        </h4>

        <div className=" rounded-lg border-stone-300 border p-2 ">
          <ul className="  ">
            {props.users.map((data, index) => (
              <li key={index} className=" mb-2 py-1 px-2 flex ">
                <span className="  ">{data.country} </span>{" "}
                <span className=" ml-auto  font-medium tracking-wider ">
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
