import React, { useEffect, useState } from "react";

export default function Main_logic() {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
        const date = new Date();
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="display_content"
        className="flex gap-4 text-4xl font-bold text-center text-white mt-6 justify-center"
      >
        <div className="text-[50px]">{time.hours}</div>
        <span className="animate-pulse flex items-center">:</span>
        <div className="text-[50px]">{time.minutes}</div>
        <span className="animate-pulse flex items-center">:</span>
        <div className="text-[50px]">{time.seconds}</div>
        <p className="flex items-center">{time.hours > 12 ? "PM" : "AM"}</p>
      </div>
    </>
  );
}
