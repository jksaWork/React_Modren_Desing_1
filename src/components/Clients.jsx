import React from "react";
import { clients } from "../constants";
import style from "../style";

export default function Clients() {
  return (
    <div className={`flex ${style.flexCenter} justify-between flex-wrap m-2`}>
      {clients.map((cleint, index) => (
        <div
          className="flex-1 min-w-[150px] max-w-[250px] mx-1 my-2"
          key={cleint.id}
        >
          <img src={cleint.logo} alt="client logo image" />
        </div>
      ))}
    </div>
  );
}
