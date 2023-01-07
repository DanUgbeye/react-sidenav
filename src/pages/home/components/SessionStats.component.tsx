import React from "react";
import { sessionData } from "../../../app.interface";
import ClockThreeIcon from "../../../components/svg/clockThree.svg";
import SessionData from "./SessionData.component";

export type collectedData = {
  today: sessionData;
  week: sessionData;
  month: sessionData;
};

export default function SessionStats({ data }: { data: collectedData }) {
  return (
    <div className=" text-sm rounded-xl bg-gray-100 dark:bg-gray-800 p-6 mb-6 overflow-hidden">
      <h4 className=" font-medium mb-4 flex gap-x-2 ">
        <ClockThreeIcon className=" w-5 text-green-500 " />
        <span className="  ">Sessions</span>
      </h4>

      <div className=" rounded-lg border border-gray-200 border-solid overflow-x-auto px-4 ">
        <table className=" rounded-lg font-medium  px-6 text-gray-400 min-w-[400px] w-full  ">
          <thead className=" pt-6 pb-0  ">
            <tr>
              <td className=" p-4 "></td>
              <td className=" p-4 ">Sessions</td>
              <td className=" p-4 ">New Users</td>
              <td className=" p-4 ">Bounce Rate</td>
            </tr>
          </thead>

          <tbody>
            <tr className=" py-6 text-gray-500 border-b border-gray-200  ">
              <td className=" text-gray-400 p-4">Today</td>
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

            <tr className=" py-6 text-gray-500 border-b border-gray-200  ">
              <td className=" text-gray-400 p-4">This Week</td>
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

            <tr className=" text-gray-500  ">
              <td className=" text-gray-400 p-4">This Month</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
