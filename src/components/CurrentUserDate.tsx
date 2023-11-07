import { useState } from "react";

export const CurrentUserDate = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  return { currentDate };
};

export const CurrentUserTime = () => {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return { showTime };
};
