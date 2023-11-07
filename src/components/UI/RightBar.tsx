import React from "react";

export const RightBar = () => {
  return (
    <div className="hidden lg:flex flex-col h-full border-l border-[#2f3336] ">
      <div className="p-8">
        <aside className="bg-[#25272b]   w-2/3 p-4 rounded-2xl">
          <h3 className="text-2xl mb-3 font-bold">Subscribe to Premium</h3>
          <p className="text-lg">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button className="bg-[#1d9bf0] py-2 px-3 rounded-full mt-2">
            Subscribe
          </button>
        </aside>
      </div>
      <div className="p-8">
        <div className="bg-[#25272b]   w-2/3 p-4 rounded-2xl">
          <h3 className="text-2xl">What's Happening</h3>
          <div className="text-lg  mt-4 flex flex-col gap-8">
            <span>
              <p>Chelsea</p>
            </span>
            <span>
              <h5 className="text-xs text-gray-500">
                NBA &#183; <span>Trending</span>
              </h5>
              <p>Clippers</p>
            </span>
            <span>
              <h5 className="text-xs text-gray-500">
                Vide Game &#183; <span>Trending</span>
              </h5>
              <p>Fortnite</p>
            </span>
            <span>
              <h5 className="text-xs text-gray-500">
                Athlete &#183; <span>Trending For You</span>
              </h5>
              <p>Cbum</p>
            </span>
            <span>
              <h5 className="text-xs text-gray-500">
                Scary &#183; <span>Trending</span>
              </h5>
              <p>OpenAi</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
