import React, { useContext, useEffect, useRef, useState } from "react";
import { deleteTweet, editTweet, supabase, upVoteTweet } from "./Supabase";
import { UserContextProps, userContext } from "../context/Context";
import { UserImg } from "./UserImg";
import { CurrentUserDate, CurrentUserTime } from "./CurrentUserDate";
import { AiOutlineHeart, AiOutlineRetweet, AiFillHeart } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { BsBookmark } from "react-icons/bs";
import { FiShare } from "react-icons/fi";

import { BiMessageRounded } from "react-icons/bi";
import { TweetUI } from "./UI/TweetUI";
import { Tweet } from "./tweet";
export const Tweet = ({ tweet }: any) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const { confirmEdit, upVoteHandler, setEdit, edit, inputHandler } =
    useContext(userContext) as UserContextProps;

  const { showTime } = CurrentUserTime();

  const handleEditClick = (tweetId: number) => {
    setEdit((prevEdit: number | null) =>
      prevEdit === tweetId ? null : tweetId
    );

    setTimeout(() => {
      if (ref.current) ref.current?.focus();
    }, 50);
  };
  const size = 15;
  return (
    <>
      {edit === tweet.id ? (
        <article key={tweet.id} className="bg-black  flex w-full  h-full gap-4">
          <UserImg />
          <div className="flex w-full h-full flex-col">
            <span className="">
              User13 <span className="text-[#959698]">@User0138</span>
            </span>
            <textarea
              onChange={inputHandler}
              className=" w-full  text-white h-full  bg-black resize-none "
              ref={ref}
              defaultValue={tweet.name}
            ></textarea>
            <button
              className="bg-yellow-400"
              onClick={() => confirmEdit(tweet)}
            >
              confirm edit
            </button>
            <button onClick={() => handleEditClick(tweet.id)}>cancel</button>
          </div>
        </article>
      ) : (
        <TweetUI tweet={tweet} />
      )}
    </>
  );
};
