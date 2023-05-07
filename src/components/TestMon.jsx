import React from "react";
import style from "../style";
import { feedback } from "../constants/index";
import { quotes } from "../assets/index";

function TestMon() {
  return (
    <div>
      {/* Pepole Saying Section */}
      <div className="md:flex block flex-warp items-center justify-center">
        <h2 className={`${style.heading2} p-10 flex-1 `}>
          What people are saying about us
        </h2>
        <p className={`${style.paragraph}  p-10  flex-1`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      {/*  Test Moails Client  */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((feed, index) => (
          <FeadBackCard {...feed} key={feed.id} />
        ))}
      </div>
    </div>
  );
}
function FeadBackCard({ title, content, name, img }) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestMon;
