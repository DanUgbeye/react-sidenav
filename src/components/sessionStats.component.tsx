import React from "react";
import { sessionData } from "../app.interface";
import ClockThreeIcon from "../assets/svg/clockThree.svg";
import SessionData from "./sessionData.component";

export type collectedData = {
  today: sessionData;
  week: sessionData;
  month: sessionData;
};

export default function SessionStats({ data }: { data: collectedData }) {
  return (
    <div className=" rounded-xl bg-stone-100 p-6 mb-6 overflow-x-auto ">
      <h4 className=" font-medium text-lg mb-4 flex gap-x-2 ">
        <ClockThreeIcon className=" w-5 text-green-500 " />
        <span className="  ">Sessions</span>
      </h4>

      <table className=" rounded-lg border font-medium border-stone-200 px-6 text-stone-400 min-w-[400px] w-full overflow-x-auto  ">
        <thead className=" pt-6 pb-0  ">
          <td className=" p-4 "></td>
          <td className=" p-4 ">Sessions</td>
          <td className=" p-4 ">New Users</td>
          <td className=" p-4 ">Bounce Rate</td>
        </thead>

        <tr className=" py-6 text-stone-500 border-b border-stone-200  ">
          <td className=" text-stone-400 p-4">Today</td>
          <td className=" p-4">
            <SessionData data={data.today.sessions} />
          </td>
          <td className=" p-4">
            <SessionData data={data.today.newUsers} />
          </td>
          <td className=" p-4">
            <SessionData data={data.today.bounceRate} />
          </td>
        </tr>

        <tr className=" py-6 text-stone-500 border-b border-stone-200  ">
          <td className=" text-stone-400 p-4">This Week</td>
          <td className=" p-4">
            <SessionData data={data.week.sessions} />
          </td>
          <td className=" p-4">
            <SessionData data={data.week.newUsers} />
          </td>
          <td className=" p-4">
            <SessionData data={data.week.bounceRate} />
          </td>
        </tr>

        <tr className=" text-stone-500  ">
          <td className=" text-stone-400 p-4">This Month</td>
          <td className=" p-4">
            <SessionData data={data.month.sessions} />
          </td>
          <td className=" p-4">
            <SessionData data={data.month.newUsers} />
          </td>
          <td className=" p-4">
            <SessionData data={data.month.bounceRate} />
          </td>
        </tr>
      </table>
    </div>
  );
}
