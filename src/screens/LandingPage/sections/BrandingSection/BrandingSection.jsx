import React from "react";
import { Button } from "../../../../components/ui/button";
import VectorImage from "./Vector.png";
import Vector1Image from "./Vector1.png";
import Vector2Image from "./Vector2.png";

export const BrandingSection = () => {
  return (
    <section
      className="
        relative w-full min-h-[100svh] overflow-hidden pt-20 bg-[#110f0f]
        bg-left-top bg-repeat-x bg-[length:auto_100%]
        sm:bg-center sm:bg-no-repeat sm:bg-cover
      "
      style={{ backgroundImage: `url(${VectorImage})` }}
    >
      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-8 lg:pl-32">
        <div className="flex flex-col items-start justify-center gap-8 max-w-2xl w-full text-left">
          <h1
  className="font-bold text-white leading-[0.85] 
             text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
            Attract <br />
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-[#8B7BCF] bg-clip-text text-transparent">
              NewLeads
            </span>{" "}
            <br />
            like never <br />
            before
          </h1>


          <p className="font-[Agrandir-Regular] font-normal text-[#ffffff99]
                        text-[0.875rem] sm:text-[1rem] md:text-[1.125rem]
                        leading-[1.25rem] sm:leading-[1.5rem] md:leading-[1.75rem]
                        w-full max-w-full sm:max-w-xl break-words text-left">
            We Help Dubai Businesses Add AED 50K–AED 500K/Month in Sales
            <br className="hidden sm:block" />
            Without Hiring More Staff or Burning Cash on Ads.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 w-full max-w-md">
            <a href="#contact-us">
            <Button className="w-auto h-auto px-4 py-2 
                   bg-yellow text-black font-bold 
                   rounded-[30px] transition-colors 
                   duration-300 hover:bg-black hover:text-yellow 
                   text-sm sm:text-base">
              BOOK 1:1 DISCOVERY CALL
            </Button>
            </a>  
          </div>
        </div>
      </div>

      {/* Decorative vectors (hidden on small to avoid overflow/whitespace) */}
      <img
        className="absolute w-[823px] h-[607px] top-[300px] left-[-341px]"
        alt="Vector"
        src={Vector1Image}
      />
      <img
        className="absolute w-[352px] h-[597px] -top-0 right-0"
        alt="Vector"
        src={Vector2Image}
      />
    </section>
  );
};