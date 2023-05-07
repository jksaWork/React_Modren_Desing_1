import React from "react";
import style from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

function Hero() {
  return (
    <section
      className={`flex justify-center  ${style.paddingX} ${style.paddingY} items-center  sm:flex-row flex-col`}
    >
      <div
        className={`${style.flexStart}  flex-1  flex-col xl:p-0 sm:px-16 px-6`}
      >
        {/* Discount Area */}
        <div className="flex flex-row md:flex-col items-center bg-discount-gradient rounded-[10px] py-[3px] px-[6px] mb-2">
          <img src={discount} alt="dicount" className="w-[32px] h-[32px]" />
          <p className={`${style.paragraph} ml-2`}>
            {" "}
            <span className="text-white"> 20% </span> Discount for{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        {/* Next Genration Payment Method */}
        <div className="flex flex-row  flex-end justify-between items-start w-full">
          <div>
            <h1 className="flex-1  text-white  font-poppins font-semibold ss:text-[52px] text-[42px] leading-[70px]">
              The Next <br className="sm:block hidden"></br>
              <span className="text-gradient">Genration </span> Payment Method
            </h1>
            <p className={`${style.paragraph} mt-5 max-w-[470px]`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div className="ss:flex hidden mr-0 md:mr-4">
            <GetStarted />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center align-center md:my-0 my-2 relative">
        <img src={robot} alt="" className="w-[100%] h-[100%] relative z-[5] " />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className="md:hidden flex mr-0 md:mr-4">
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
