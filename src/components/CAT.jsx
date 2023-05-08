import React from "react";
import style from "../style";
import Button from "./Button";

function CAT() {
  return (
    <div
      class={`${style.flexCenter} justify-between ${style.padding} ${style.marginY} sm:flex-row flex-col `}
    >
      <div className="flex flex-col flex-1">
        <h1 className={`${style.heading2}`}> Let’s try our service now!</h1>
        <p className={`${style.paragraph}`}>
          {" "}
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div class="sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button />
      </div>
    </div>
  );
}

export default CAT;
