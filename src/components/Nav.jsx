import React from "react";

// import data
import { nav } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-10">
        {nav.map((item, index) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={index}>
              <a href={`#${href}`} className="hover:text-accent transition">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
