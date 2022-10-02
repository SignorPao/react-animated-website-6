import React from "react";

// import data
import { copyright } from "../data";

const Copyright = () => {
  // destructure copyright data
  const { link1, link2, copyText, social } = copyright;

  // get current year
  const year = new Date().getFullYear();

  return (
    <div
      className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="1200"
    >
      {/* links */}
      <div className="flex gap-x-3 text-sm">
        <a href={link1.href} className="hover:text-accent transition">
          {link1.name}
        </a>
        <a href={link2.href} className="hover:text-accent transition">
          {link2.name}
        </a>
      </div>

      {/* copyrightText */}
      <div className="text-sm flex flex-col gap-y-2 items-center lg:flex-row lg:gap-x-1">
        <span>
          {year} {copyText}
        </span>
        <span>
          Created by{" "}
          <a
            href="https://github.com/SignorPao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            @signorPao
          </a>
        </span>
      </div>

      {/* social icons */}
      <ul className="flex gap-x-[12px]">
        {social.map((item, index) => {
          // destructure item
          const { icon, href } = item;
          return (
            <li key={index}>
              <a href={href}>
                <img src={icon} alt="social" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
