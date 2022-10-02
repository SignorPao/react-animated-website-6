import React, { useState } from "react";

// import data
import { product } from "../data";

// import images
import ArrowImg from "../assets/product/arrow.svg";

const Cards = () => {
  // index state
  const [index, setIndex] = useState(1);

  // destructure product data
  const { cards } = product;
  return (
    <>
      {/* cards */}
      <div className="flex items-center justify-center flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]">
        {cards.map((card, cardIndex) => {
          // destructure card
          const { icon, title, subtitle, delay } = card;
          return (
            <div
              key={cardIndex}
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-delay={delay}
            >
              <div
                className={`${
                  index === cardIndex && "bg-white shadow-2xl"
                } w-[350px] h-[350px] flex flex-col items-center justify-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}
                onClick={() => setIndex(cardIndex)}
              >
                {/* card icon */}
                <div className="mb-6">
                  <img src={icon} alt="icon" />
                </div>

                {/* card title */}
                <div className="mb-3 text-[30px] font-medium">{title}</div>

                {/* card subtitle */}
                <p className="mb-6 text-light">{subtitle}</p>

                {/* arrow image */}
                {index === cardIndex && <img src={ArrowImg} />}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
