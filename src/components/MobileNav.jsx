import React from "react";

// import data
import { nav, header } from "../data";

const MobileNav = ({ click }) => {
  return (
    <div className="bg-accent/95 w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={index}>
              <a
                href={`#${href}`}
                className="link text-white text-xl"
                onClick={click}
              >
                {name}
              </a>
            </li>
          );
        })}
        <button className="text-accent text-xl btn btn-sm btn-white">
          {header.btnText}
        </button>
      </ul>
    </div>
  );
};

export default MobileNav;
