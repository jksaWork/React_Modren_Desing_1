import React from "react";
import style from "../style";
import { stats } from "../constants/index";
function Stats() {
  return (
    <section
      className={`flex justify-around items-center flex-row  flex-warp mb:mb-20 md-6`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={` flex-1 flex  items-center flex-row  mb:mb-20 md-6`}
        >
          <h4
            className="font-poppines font-semibold xs:text-[40px] text-[30px]
          xs:leading-[53px]
          leading-[43px]
          text-white"
          >
            {stat.value}
          </h4>
          <p
            className="font-poppines font-semibold xs:text-[17px] text-[15px]
          xs:leading-[26px]
          leading-[21px]
          text-gradient uppercase ml-3"
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
