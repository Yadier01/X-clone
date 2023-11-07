import React from "react";
import {
  AiFillHome,
  AiOutlineUnorderedList,
  AiOutlineUser,
} from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { BsSearch, BsPeople, BsBookmark } from "react-icons/bs";
import { FaBell, FaFeatherAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { UserHeader } from  "./UserHeader"
export const SideBar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen border-r border-[#2f3336] justify-end p-4 w-1/6 hidden xsm:flex xl:w-1/3 pr-4 text-white">
      <div className="flex flex-col w-1/3 items-center xl:items-start h-full mr-8 gap-8 text-2xl ">
        <span>
          <RiTwitterXFill />
        </span>

        <span className="md:text gap-4  items-center flex ">
          <AiFillHome />
          <span className="hidden text-start xl:flex ">Home</span>
        </span>

        <span className="md:text gap-4   items-center flex ">
          <span>
            <BsSearch />
          </span>
          <span className="hidden xl:flex">Explore</span>
        </span>

        <span className="md:text gap-4 items-center   flex ">
          <FaBell />
          <span className="hidden xl:flex">Notification</span>
        </span>
        <span className="md:text gap-4 items-center flex   ">
          <SlEnvolope />
          <span className="hidden xl:flex">Message</span>
        </span>
        <span className="md:text gap-4 items-center flex   ">
          <AiOutlineUnorderedList />
          <span className="hidden xl:flex">List</span>
        </span>
        <span className="md:text    gap-4 items-center flex ">
          <BsBookmark />
          <span className="hidden xl:flex">Bookmarks</span>
        </span>
        <span className="md:text gap-4 items-center    flex ">
          <BsPeople />
          <span className="hidden xl:flex">Communities</span>
        </span>
        <span className="md:text gap-4 items-center flex    ">
          <RiTwitterXFill />
          <span className="hidden xl:flex">Premium</span>
        </span>
        <span className="md:text gap-4 items-center flex   ">
          <AiOutlineUser />
          <span className="hidden xl:flex">Profile</span>
        </span>
        <span className="md:text gap-4 items-center flex  ">
          <CiCircleMore />
          <span className="hidden xl:flex">More</span>
        </span>

        <div className="w-full   mt-4">
          <p className="hidden xl:inline  w-full bg-[#1d9bf0] px-[40%] rounded-full py-2">
            Post
          </p>
          <div className=" xl:hidden  justify-center ml-1  bg-[#1d9bf0] item-center text-center  flex  p-3 rounded-full  w-[50px] h-[50px] ">
            <FaFeatherAlt className="bg-[#1d9bf0] text-center  " />
          </div>

        </div>

        <UserHeader/>
      </div>
    </div>
  );
};
