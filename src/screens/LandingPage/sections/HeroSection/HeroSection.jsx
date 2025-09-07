import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const navigationItems = [{ label: "Services" }, { label: "Projects" }];

export const HeroSection = () => {
  return (
    <header
  className="fixed top-0 left-0 right-0 z-50 flex w-full flex-wrap items-center justify-between
             px-3 sm:px-6 md:px-10 lg:px-[4.375rem] py-2 md:py-5
             bg-[#0f0f0f66] backdrop-blur-[12px] border-b border-white/10"
>
  {/* Logo */}
  <div className="font-[Agrandir] font-bold text-white text-base sm:text-fluid-lg">
    LaymanLabs
  </div>

  {/* Nav + Button */}
  <div className="flex flex-wrap items-center gap-3 sm:gap-6 md:gap-8">
    <nav className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6">
      {navigationItems.map((item, index) => (
        <div
          key={index}
          className="font-bold text-white text-sm sm:text-fluid-sm tracking-[0.02rem] leading-5 
                     whitespace-nowrap cursor-pointer hover:text-[#ffa800] transition"
        >
          {item.label}
        </div>
      ))}
    </nav>

    <a href="#contact-us">
    <Button
      variant="outline"
      className="h-auto px-3 sm:px-5 md:px-6 py-1.5 sm:py-2.5
                 rounded-full border border-[#ffa800]
                 bg-transparent hover:bg-[#ffa800]/10"
    >
      <div className="font-[Agrandir-TextBold] font-bold text-yellow text-xs sm:text-sm">
        BOOK A CALL
      </div>
    </Button>
    </a>
  </div>
</header>

  );
};
