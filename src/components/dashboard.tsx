/** @format */

import {
  BellIcon,
  DownloadIcon,
  EllipsisVertical,
  SearchIcon
} from "lucide-react";
import Todoicon from "../assets/todo.png";

import Calender from "../assets/calender.png";

import { CardComponent } from "./analytics";
import { TaskTracker } from "./taskTrack";

const DashboardSection = () => {
  const cardData = [
    {
      count: 1,
      icon: Todoicon,
      title: "Marketing",
      memoryUsage: "120MB",
      color: " #f9e79f"
    },
    {
      count: 2,
      icon: Todoicon,
      title: "Branding",
      memoryUsage: "120MB",
      color: "#f39c12"
    },
    {
      count: 3,
      icon: Calender,
      title: "My Gallery",
      memoryUsage: "120MB",
      color: "#f5cba7"
    }
  ];
  return (
    <div className="w-full bg-amber-50 rounded-3xl h-full py-10 overflow-y-auto">
      <div className="  top-0 w-[90%]  mx-auto rounded-3xl flex lg:flex-row flex-col lg:items-center items-start gap-x-10 justify-between gap-y-3">
        <div className="flex justify-center items-center gap-x-2">
          <p>Overview</p>
          <p className="border py-1 px-1.5 rounded-full bg-red-500 text-white">
            185 GB
          </p>
        </div>
        <div className="flex justify-center items-center lg:w-[25%] h-[50px] rounded-2xl bg-white px-4 focus-within:ring-2 focus-within:ring-gray-300">
          <SearchIcon />
          <input
            type="text"
            title="search"
            placeholder="Search Something"
            className="px-4 py-2 text-start border-none outline-none w-full bg-transparent"
          />
        </div>

        <div className="flex justify-center gap-x-2 items-center">
          <div className="border rounded-2xl p-2">
            <BellIcon />
          </div>
          <div className="border rounded-2xl p-2">
            <DownloadIcon />
          </div>
          <button
            title="upload"
            className="bg-green-300 w-[150px] border rounded-2xl p-2 text-white font-bold"
          >
            Upgrade Plan
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col w-full justify-between gap-x-5 px-10 my-20 items-center">
        <div className=" w-[40%] text-start space-y-5 ">
          <p className="text-4xl font-black">Manage your training folders</p>
          <p className="text-gray-600 text-2xl font-medium">
            Create folders to sort files and have quick access to your routines
          </p>
        </div>
        <div className="w-full">
          <TaskTracker />
          <div className="w-full h-[300px] grid lg:grid-cols-3 grid-cols-1 gap-x-10 ">
            {cardData.map((item) => (
              <div
                className="w-full   rounded-4xl p-5"
                style={{
                  backgroundColor: item.color
                }}
              >
                <div className="flex justify-between text-white">
                  <p>{item.count}</p>
                  <EllipsisVertical />
                </div>
                <div className="flex flex-col items-start mt-10">
                  <div className="border rounded-full bg-white">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <div className="my-5 text-start">
                    <p className="text-white font-medium text-2xl">
                      {item.title}
                    </p>
                    <p className="text-gray-600 font-bold">
                      {item.memoryUsage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_2fr] gap-5 px-10 ">
        <div>
          <CardComponent />
        </div>
        <div className="w-full bg-amber-500 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default DashboardSection;
