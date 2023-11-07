import React from "react";
import { UserImg } from "../UserImg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
export const UserHeader = () => {
  return (
    <div className="flex justify-between  h-full  hover:bg-slate-600 gap-3 ">
      <div className="text-base flex  gap-4 mb-4 items-end">
        <UserImg />
        <div className="hidden xl:block">
        <p>User</p>
        <p>@User</p>
        </div>
      </div>
      <BiDotsHorizontalRounded  className="self-end hidden xl-block " />
    </div>
  );
};
