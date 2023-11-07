import React, { useContext } from "react";
import { UserContextProps, userContext } from "../../context/Context";
import { UserImg } from "../UserImg";
import { ComposeIcons } from "./ComposeIcons";
export const ComposeTweet = () => {
  const { submitTweet, size, inputHandler, text } = useContext(
    userContext
  ) as UserContextProps;

  return (
    <div className="flex w-full max-w-[598px] p-4  border-r  border-[#2f3336]  bg-black row-end-auto  justify-center mb-1">
      <UserImg />
      <div className="flex w-full flex-col ml-2">
        <textarea
          onChange={inputHandler}
          placeholder="Whats happening!"
          className=" ml-3 w-full text-white  bg-black resize-none "
        ></textarea>
        <div className="flex justify-between items-center">
          <ComposeIcons />
          <button
            onClick={submitTweet}
            className={`px-4 py-1 font-bold text-white rounded-full ${
              text === "" ? "bg-blue-400" : " bg-blue-500"
            } `}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
