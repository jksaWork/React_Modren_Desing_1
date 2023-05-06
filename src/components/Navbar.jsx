import React from "react";
import { logo, menu, close } from "../assets/index";

import { navLinks } from "../constants/index";
function Navbar() {
  const [Toggle, setToggle] = React.useState(false);
  return (
    <nav className="w-full flex justify-center items-center  py-6 navbar">
      <img src={logo} className="w-[124] h-[32]" />
      <ul className="list-none sm:flex hidden flex-1 justify-end items-center">
        {navLinks.map((el, index) => (
          <li
            key={el.id}
            className={` text-white
            font-normal cursor-pointer font-poppins
            ${index == navLinks.length - 1 ? "mr-0" : "mr-10"}
          `}
          >
            <a href={`#${el.title}`} className="">
              {el.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Image Toolge  */}
      <div className="sm:hidden flex flex-1 justify-end  items-center">
        <img
          className="w-[28] h-[28] object-contain"
          src={Toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            Toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}
        >
          <ul className="list-none sm:hidden flex flex-1 justify-end flex-col items-center">
            {navLinks.map((el, index) => (
              <li
                key={el.id}
                className={` text-white
            font-normal cursor-pointer font-poppins
            ${index == navLinks.length - 1 ? "mr-0" : "mb-5"}
          `}
              >
                <a href={`#${el.title}`} className="">
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
