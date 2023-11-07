import React from "react";


export const TweetUI = ({tweet}:any) => {
  return (
    <article
      onClick={() => console.log(tweet.id)}
      key={tweet.id}
      className="bg-black min-w-[598px] max-w-[598px] border-b  border-[#2f3336] flex w-full p-4 gap-4"
    >
      <UserImg />
      <div className="w-full">
        <div className="flex gap-4 ">
          <span>
            User13 <span className="text-[#959698]">@User0138</span>
          </span>
          <span
            onClick={() => console.log(showTime)}
            className="text-[#959698]"
          >
            {tweet.datePosted}
          </span>
        </div>
        <div className="w-full">{tweet.name}</div>

        <div className="mt-2 flex   items-center w-full justify-between">
          <BiMessageRounded size={size} className="text-[#7a7a7a]" />
          <AiOutlineRetweet size={size} className="text-[#7a7a7a]" />
          <span className="flex hover:cursor-pointer items-center gap-2">
            {tweet.upVotes === 1 ? (
              <AiFillHeart
                className="text-red-500"
                size={size}
                onClick={() => upVoteHandler(tweet)}
              />
            ) : (
              <AiOutlineHeart
                size={size}
                onClick={() => upVoteHandler(tweet)}
                className="text-[#7a7a7a]"
              />
            )}

            <span className="text-[#7a7a7a]">{tweet.upVotes}</span>
          </span>

          <SiSimpleanalytics size={size} className="text-[#7a7a7a]" />
          <span className="flex gap-4 text-[#7a7a7a] ">
            <BsBookmark size={size} />
            <FiShare size={size} />
          </span>
        </div>
      </div>
    </article>
  );
};
