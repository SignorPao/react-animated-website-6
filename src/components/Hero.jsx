import React from "react";

// import data
import { hero } from "../data";

// import icons
import { HiOutlineChevronDown } from "react-icons/hi";

const Hero = () => {
  // destructure hero data
  const { title, subtitle, btnText, compText, image } = hero;

  return (
    <section
      id="home"
      className="min-h-[700px] 2xl:min-h-[900px] py-12 mt-[88px] lg:mt-0"
    >
      <div className="container mx-auto min-h-[700px] 2xl:min-h-[900px] flex justify-center items-center">
        <div className="flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row lg:gap-x-[30px] items-center justify-center text-center lg:text-left">
          {/* text */}
          <div className="flex-1">
            <h1
              className="title mb-2 lg:mb-5"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {title}
            </h1>
            <p
              className="lead mb-5 lg:mb-10"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            {/* btn & compText */}
            <div
              className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn btn-sm 2xl:btn-md btn-accent flex justify-center items-center lg:gap-x-4">
                {btnText}
                <HiOutlineChevronDown />
              </button>
              <span className="text-light lg:lead lg:mb-0">{compText}</span>
            </div>
          </div>

          {/* image */}
          <div
            className="flex-1 2xl:flex 2xl:justify-end"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img src={image} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
