import React from "react";
import { Facebook, Twitter, Youtube } from "lucide-react";

export const FooterSection = () => {
  const navigationItems = [
    "Home",
    "News",
    "About us",
    "Contact",
  ];

  return (
    <footer className="w-full bg-black py-14">
      <div className="flex flex-col items-center gap-7">
        <nav className="flex items-center gap-14">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#d0daf5] text-sm text-center tracking-[0] leading-normal hover:opacity-80 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-8 mt-10">
          <a href="#">
            <Facebook className="w-5 h-5 text-[#d0daf5] group-hover:text-black" />
          </a>

          <a href="#">
            <Twitter className="w-5 h-5 text-[#d0daf5] group-hover:text-black" />
          </a>

          <a href="#">
            <Youtube className="w-5 h-5 text-[#d0daf5] group-hover:text-black" />
          </a>
        </div>
      </div>
    </footer>
  );
};
