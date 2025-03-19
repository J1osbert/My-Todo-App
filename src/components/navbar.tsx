/** @format */

import { PlusCircleIcon } from "lucide-react";
import logo from "../assets/logo.png";
import ProfilePic from "../assets/profile.png";

const NavBarSection = () => {
  return (
    <div className="w-[20%] bg-gray-400 h-full rounded-l-3xl py-10 my-5 hidden lg:block">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <p className="text-2xl font-black text-white">TaskSprint</p>
      </div>

      <div className="items-center my-10 text-white text-center">
        <img
          src={ProfilePic}
          alt=""
          className="rounded-full w-[120px] h-[120px] mx-auto"
        />
        <p>John Packes Johnson</p>
        <p>johnpackesfitness@mail.com</p>
      </div>

      <div className="my-10">
        <p>John Packes Johnson</p>
        <p>johnpackesfitness@mail.com</p>
        <p>John Packes Johnson</p>
        <p>johnpackesfitness@mail.com</p>
        <p>John Packes Johnson</p>
        <p>johnpackesfitness@mail.com</p>
      </div>

      <div className=" border border-dashed w-[60%] min-h-[200px] rounded-3xl mx-auto p-5">
        <div className="bg-red-500 w-[95%] h-[200px] mx-auto rounded-3xl">
          <div className="py-10">
            <p>Add Files</p>
            <p>Up to 20GB</p>
            <div className="items-center">
              <PlusCircleIcon stroke="white" className="w-16 h-16 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <p>John Packes Johnson</p>
        <p>johnpackesfitness@mail.com</p>
        <p>John Packes Johnson</p>
        <p>johnpackesfitness@mail.com</p>
        <p>John Packes Johnson</p>
        <p>johnpackesfitness@mail.com</p>
      </div>
    </div>
  );
};

export default NavBarSection;
