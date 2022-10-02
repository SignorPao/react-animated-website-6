import React, { useState } from "react";

// import data
import { pricing } from "../data";

// import icons
import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi";

const Pricing = () => {
  // index state
  const [index, setIndex] = useState(1);

  // destructure pricing data
  const { title, cards } = pricing;
  return (
    <section id="plans" className="section">
      <div className="container mx-auto">
        {/* title */}
        <h2
          className="h2 mb-10 lg:mb-20 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h2>

        {/* cards */}
        <div className="flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
          {cards.map((card, cardIndex) => {
            // destructure card
            const { icon, title, services, price, userAmount, btnText, delay } =
              card;

            // card
            return (
              <div
                key={cardIndex}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="300"
              >
                <div
                  className={`${
                    cardIndex === index ? "bg-white shadow-2xl" : "shadow-md"
                  } w-[350px] h-[400px] rounded-[12px] p-[40px] cursor-pointer transition-all`}
                  onClick={() => setIndex(cardIndex)}
                >
                  {/* card icon */}
                  <div className="mb-4">
                    <img src={icon} alt="icon" />
                  </div>

                  {/* card title */}
                  <div className="text-[32px] font-semibold mb-6">{title}</div>

                  {/* card services */}
                  <div className="flex flex-col gap-y-2 mb-4">
                    {services.map((service, index) => {
                      // desturcture service
                      const { name } = service;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-x-[10px]"
                        >
                          <HiCheck className="text-light" />
                          <div>{name}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* card price & amount */}
                  <div className="mb-6">
                    {/* price */}
                    <div>
                      <span className="text-2xl font-semibold">{price}/</span>
                      <span className="text-xl text-light font-light">
                        year
                      </span>
                    </div>
                    {/* userAmount */}
                    <div className="text-base text-light">{userAmount}</div>
                  </div>

                  {/* button */}
                  <button
                    className={`${
                      cardIndex === index
                        ? "bg-accent hover:bg-accentHover text-white"
                        : "border border-accent text-accent"
                    } btn btn-sm space-x-[14px]`}
                  >
                    <span>{btnText}</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
