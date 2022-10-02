import React from "react";

// import data
import { cta } from "../data";

// import icons
import { HiOutlineChevronDown } from "react-icons/hi";

const CTA = () => {
  // destructure cta data
  const { title, subtitle, btnText, img1, img2 } = cta;
  return (
    <section className="section bg-cta bg-cover bg-left-top">
      <div className="max-w-[1150px] 2xl:max-w-[1490px] mx-auto px-[25px]">
        {/* text */}
        <div className="max-w-[920px] mx-auto text-center">
          <h2
            className="h2 text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {title}
          </h2>
          <p
            className="text-2xl 2xl:text-4xl text-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {subtitle}
          </p>
        </div>

        {/* btn & images */}
        <div className="flex justify-between">
          {/* image1 */}
          <img
            src={img1}
            alt="cta"
            className="hidden xl:flex"
            data-aos="zoom-out-right"
            data-aos-delay="700"
          />
          <button
            className="btn btn-md btn-white mt-[40px] 2xl:text-[22px] gap-x-[10px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {btnText} <HiOutlineChevronDown />
          </button>

          {/* image2 */}
          <img
            src={img2}
            alt="cta"
            className="hidden xl:flex"
            data-aos="zoom-out-left"
            data-aos-delay="700"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
