import React from "react";
import style from "../style";
import { arrowUp } from "../assets";
function GetStarted() {
  return (
    <div
      className={`${style.flexCenter} w-[140px] h-[140px] rounded-full cursor-pointer bg-blue-gradient p-[2px]`}
    >
      <div
        className={`${style.flexCenter} flex-col w-[100%] h-[100%]  bg-primary rounded-full`}
      >
        <div className={`${style.flexStart} flex-row`}>
          <p className="font-medium font-poppins text-[18px] leading-[23px]">
            <span className="text-gradient">Get </span>
          </p>
          <img
            src={arrowUp}
            alt="arrow up"
            className={`w-[24px] h-[24px] object-contain`}
          />
        </div>
        <p className="font-medium font-poppins text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
