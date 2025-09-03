import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const WhyChooseUsSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      const response = await fetch(
        "https://labourlabs-backend-production.up.railway.app/api/leads/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage("Email submitted successfully!");
        setEmail("");
      } else {
        setMessage("Failed to submit.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-[70px] py-10 bg-[#110f0f]">
      <div className="flex flex-col w-full max-w-[1300px] items-center justify-center gap-6 sm:gap-8 px-6 sm:px-8 md:px-12 py-10 sm:py-14 md:py-20 bg-[#ffb219] rounded-xl">
        
        {/* Headline */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-bold text-[#0c0d14] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug sm:leading-[42px] md:leading-[50px] lg:leading-[56px] [font-family:'Agrandir-TextBold',Helvetica]">
            "If we don&apos;t generate at least 30 qualified leads for you in 60 days, we work FREE until we do."
          </h2>

          <p className="max-w-xl font-normal text-[#00000099] text-sm sm:text-base md:text-lg leading-relaxed [font-family:'Agrandir-Regular',Helvetica]">
            No one else in Dubai&apos;s market dares to offer this guarantee. We do.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-md">
          {/* Input */}
          <div className="flex-1 w-full">
            <div className="flex items-center w-full rounded-full border-2 border-solid border-[#b4b6b8] bg-[#fbfcfd] px-4 py-2">
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 [font-family:'Archivo',Helvetica] font-normal text-[#0c0d14] text-sm sm:text-base leading-5"
              />
            </div>
          </div>

          {/* Button */}
          <Button
            onClick={handleSubmit}
            className="flex items-center justify-center px-6 py-3 w-full sm:w-auto bg-black rounded-full hover:bg-black/90 h-auto"
          >
            <span className="[font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-sm sm:text-base">
              SEND
            </span>
          </Button>
        </div>

        {/* Message */}
        {message && (
          <p className="mt-3 text-sm sm:text-base text-black font-medium text-center">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};
