import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import frame10Image from "./frame10.png";
import frame11Image from "./frame11.png";
import frame12Image from "./frame12.png";
import frame13Image from "./frame13.png";

const Card = ({ children, className }) => (
  <div className={`rounded-lg border ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const ContactFormSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const testimonials = [
    {
      name: "Brooklyn",
      company: "manam",
      avatar: frame10Image,
      testimonial:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar...",
    },
    {
      name: "Esther",
      company: "Offmax",
      avatar: frame11Image,
      testimonial: "Vitae tellus bibendum nibh integer auctor pretium sed...",
    },
    {
      name: "Arlene",
      company: "bloopixel",
      avatar: frame12Image,
      testimonial:
        "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor...",
    },
    {
      name: "Jane",
      company: "unpexel",
      avatar: frame13Image,
      testimonial:
        "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec...",
    },
    {
      name: "Robert",
      company: "techcorp",
      avatar: frame13Image,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...",
    },
    {
      name: "Sarah",
      company: "designco",
      avatar: frame13Image,
      testimonial:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
    },
  ];

  // ✅ Define items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 678) return 2; // Small screens → 2
      if (window.innerWidth < 1024) return 2; // Medium screens → 2
      return 4; // Large screens → 4
    }
    return 4;
  };

  // ✅ Update itemsPerPage on mount & resize
  useEffect(() => {
    const updateItems = () => setItemsPerPage(getItemsPerPage());
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="flex flex-col items-center gap-6 px-4 md:px-[70px] py-16 md:py-20 bg-black">
      <div className="flex flex-col w-full max-w-[1300px] items-center gap-10 md:gap-14">
        {/* ✅ Header with title on left, buttons on right */}
        <header className="flex items-center justify-between w-full">
          <h2 className="font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug">
            Hear what our customers say :)
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-yellow bg-transparent hover:bg-[#1a1a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-yellow" />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-yellow bg-transparent hover:bg-[#1a1a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-yellow" />
            </button>
          </div>
        </header>

        {/* ✅ Testimonials Grid */}
        <div className="flex items-start justify-center gap-4 md:gap-6 w-full overflow-hidden">
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={currentIndex + index}
              className="flex-1 bg-[#0f0f0f] border-[#a0aebf] min-w-0"
            >
              <CardContent className="flex flex-col items-start justify-center gap-4 p-4 sm:p-6">
                <div className="flex flex-col items-start w-full gap-4">
                  {/* Avatar + Info */}
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col items-start flex-1 min-w-0">
                      <div className="flex-1 font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl leading-snug truncate">
                        {testimonial.name}
                      </div>
                      <div className="w-full font-medium text-[#ffffff99] text-xs sm:text-sm md:text-base truncate">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <p className="w-full font-normal text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ✅ Pagination Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-[#ffffff33]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
