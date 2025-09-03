import React from "react";
import { Button } from "../../../../components/ui/button";
import frameImage from "./frame.png";

export const LeadGenerationSection = () => {
  const benefits = [
    "A full growth team for less than the cost of one in-house hire.",
    "Dubai-tailored content that connects with high-net-worth clients.",
    "A 24/7 sales system that runs while you sleep.",
    "A guaranteed pipeline—if it doesn't pay for itself in 30 days, we fix it free.",
  ];

  return (
    <section className="flex w-full items-center px-4 sm:px-6 lg:px-0 py-12 sm:py-20 lg:py-[115px] bg-black">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:hidden w-full">
          <h2 className="[font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-2xl sm:text-3xl tracking-[0] leading-tight text-center">
            Why choose us
          </h2>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <img
            className="w-full h-auto max-w-[704px] object-contain"
            alt="Growth marketing illustration showing person with telescope"
            src={frameImage}
          />
        </div>

        <div className="flex flex-col flex-1 items-start gap-6 lg:gap-8 w-full">
          <div className="flex flex-col w-full items-start gap-4">
            <h2 className="hidden lg:block [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[56px]">
              Why choose us
            </h2>

            <div className="flex flex-col items-start justify-center gap-6 lg:gap-[30px] w-full">
              <p className="[font-family:'Agrandir-Regular',Helvetica] font-normal text-[#ffffff99] text-base sm:text-lg tracking-[0.36px] leading-6">
                When you work with us, you don&apos;t just get "marketing." You
                get:
              </p>

              <div className="flex flex-col items-start gap-5 lg:gap-2.5 w-full">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2.5 w-full">
                    <div className="w-[15px] h-[15px] bg-[#ffa800] -rotate-45 flex-shrink-0 mt-1" />
                    <p className="[font-family:'Agrandir-Regular',Helvetica] font-normal text-[#ffffff99] text-base sm:text-lg tracking-[0.36px] leading-6 flex-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto flex lg:block justify-center lg:justify-start">
            <Button
              variant="outline"
              className="border border-solid border-[#ffa800] bg-transparent hover:bg-[#ffa800]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-[1000px] h-auto"
            >
              <span className="[font-family:'Agrandir-TextBold',Helvetica] font-bold text-[#ffa800] text-xs sm:text-sm tracking-[0] leading-[normal]">
                EXPLORE ABOUT US
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
