import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants/index";
import { google, bill, apple } from "../assets/index";
import Button from "./Button";
function Billings() {
  return (
    <div
      className={`${layout.sectionReverse} pt-10 mt-10 justify-center flex-warp items-center`}
    >
      {/* services Content */}
      <div className="flex-1">
        <img
          src={bill}
          alt=""
          className={`w-[100%] h-[100%] relative z-[5] sm:p-10 ${layout.sectionImgReverse}`}
          alt="billing"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className="flex-1">
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:hidden block" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        {/* <Button styles={`mt-10`} /> */}
        <div className="flex flex-row justify-start mt-2 mb-3">
          <img src={google} alt="" className="w-[150px] mx-2" />
          <img src={apple} alt="" className="w-[150px] mx-2" />
        </div>
      </div>
    </div>
  );
}

// import React from 'react'

export default Billings;
