import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants/index";
import { google, card, apple } from "../assets/index";
import Button from "./Button";
function BillingCard() {
  return (
    <div
      className={`${layout.sectionReverse} pt-10  justify-center flex-warp items-center`}
    >
      {/* services Content */}

      <div className="flex-1 sm:p-10">
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
        <Button styles="mt-10" />
      </div>
      <div className="flex-1">
        <img
          src={card}
          alt=""
          className={`w-[100%] h-[100%] relative z-[5]  sm:p-20 ${layout.sectionImgReverse}`}
          alt="billing"
        />
      </div>
    </div>
  );
}

export default BillingCard;
