import React, { createContext, useEffect, useState } from "react";
import {
  deleteTweet,
  editTweet,
  getTweets,
  newTweet,
  upVoteTweet,
} from "../components/Supabase";
import { Tweet } from "./../components/tweet";
import { CurrentUserDate } from "../components/CurrentUserDate";

export interface UserContextProps {
  text: string;
  setText: (text: string) => void;
  submitTweet: () => void;
  inputHandler: (e: any) => void;
  tweets: any;
  fetchData: () => void;
  confirmEdit: (tweet) => void;
  onClickHandler: (tweet) => void;
  setEdit: (edit: any) => void;
  edit: any;
  upVoteHandler: any;
  size: number;
}
export const userContext = createContext<UserContextProps | undefined>(
  undefined
);

export const Context = ({ children }: any) => {
  const [text, setText] = useState("");
  const [tweets, setTweets] = useState<any[] | null>([]);
  const [edit, setEdit] = useState(null);
  const { currentDate } = CurrentUserDate();
  const fetchData = async () => {
    const data = await getTweets();
    setTweets(data);
  };
 const size = 15; 
  const confirmEdit = async (tweet) => {
    await editTweet(text, tweet);
    fetchData();
  };
  const upVoteHandler = async (tweet) => {
    if (!tweet.upVotes) {
      await upVoteTweet(tweet, 1);
    } else if (tweet.upVotes === 1) {
      await upVoteTweet(tweet, 0);
    }
    fetchData();
  };

  const submitTweet = async () => {
    if (text.trim() === "") return;
    else {
      await newTweet(text, currentDate);
      setText("");
      fetchData();
    }
  };
  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const onClickHandler = (tweet) => {
    deleteTweet(tweet);
    setTimeout(() => {
      fetchData();
    }, 40);
    fetchData();
    console.log("delete on context");
  };
  return (
    <userContext.Provider
      value={{
        size,
        onClickHandler,
        upVoteHandler,
        confirmEdit,
        submitTweet,
        fetchData,
        inputHandler,
        text,
        tweets,
        setText,
        setEdit,
        edit,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
