import React, { useContext } from "react";
import { BsImage } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { GrSchedule } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { UserContextProps, userContext } from "../../context/Context";
export const ComposeIcons = () => {
  const { size } = useContext(userContext) as UserContextProps;

  return (
    <div className="flex items-center ">
      <span className="hover:cursor-pointer hover:bg-blue-500/30 p-3 rounded-full">
        <BsImage className="text-[#1d9bf0]   " size={size} />
      </span>

      <span className="hover:cursor-pointer hover:bg-blue-500/30 p-3 rounded-full">
        <AiOutlineGif
          className="text-[#1d9bf0] hover:cursor-pointer"
          size={size}
        />
      </span>

      <span className="hover:cursor-pointer hover:bg-blue-500/30 p-3 rounded-full">
        <BiPoll className="text-[#1d9bf0] hover:cursor-pointer" size={size} />
      </span>

      <span className="hover:cursor-pointer hover:bg-blue-500/30 p-3 rounded-full">
        <CiFaceSmile
          className="text-[#1d9bf0] hover:cursor-pointer"
          size={size}
        />
      </span>

      <span className="hover:cursor-pointer hover:bg-blue-500/30 p-3 rounded-full">
        <GrSchedule className="bg-[#1d9bf0] hover:cursor-pointer" size={size} />
      </span>

      <span className="hover:cursor-pointer hover:bg-blue-500/30 p-3 rounded-full">
        <HiOutlineLocationMarker
          className="text-[#1d9bf0] hover:cursor-pointer"
          size={size}
        />
      </span>
    </div>
  );
};
