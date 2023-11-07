import { Suspense, useContext, useEffect, useState } from "react";
import { Tweet } from "./components/tweet";
import { ComposeTweet } from "./components/ComposeTweet/ComposeTweet";
import { getTweets, supabase } from "./components/Supabase";
import {  userContext } from "./context/Context";
import { SideBar } from "./components/UI/sideBar";
import { RightBar } from "./components/UI/RightBar";
function App() {
  const { text, tweets, submitTweet, fetchData } = useContext(userContext);

  useEffect(() => {
    fetchData();
    console.log("fetch submit");
  }, []);
  console.log(tweets);
  return (
    <>
      <div className="flex relative bg-black text-white h-screen     ">
        <SideBar />

        <div className="p-4 flex-col xsm:ml-[14%] xl:ml-[32.5%] ">
          <ComposeTweet />
          <div className="flex  flex-row">
            <div className="flex  min-w-[598px] max-w-[598px] w-full flex-col border-y border-r min-w- border-[#2f3336]  text-white  items-center">
              {tweets.length === 0 ? (
                <p>Loading</p>
              ) : (
                tweets.map((tweet) => (
                  <Tweet
                    key={tweet.id}
                    text={text}
                    tweet={tweet}
                    supabase={supabase}
                    getTweets={getTweets}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <RightBar />
      </div>
    </>
  );
}

export default App;
