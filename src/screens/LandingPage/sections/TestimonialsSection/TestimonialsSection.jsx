import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import frame2Image from "./frame2.png";
import Vector3Image from "./Vector3.png";

export const TestimonialsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setResponseMessage("");

  try {
    const res = await fetch(
      "https://labourlabs-backend-production.up.railway.app/api/leads/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", companyName: "", email: "", message: "" });

      
      window.location.href = "https://calendly.com/vihaanarora-50/30min";
    } else {
      setResponseMessage("Failed to send message.");
    }
  } catch (error) {
    console.error("Error:", error);
    setResponseMessage("Something went wrong.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section id="contact-us" className="flex flex-col items-start pt-0 pb-[30px] px-4 sm:px-6 lg:px-0 bg-black w-full">
      <div className="flex w-full max-w-[1440px] items-start gap-6 lg:gap-10 pt-[60px] pb-[30px] px-4 sm:px-6 lg:px-[100px] bg-black mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start gap-2.5 px-[7px] py-0 rounded-[7px]">
            <h2 className="w-fit font-bold text-white 
                           text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-[100px] py-0 bg-black mx-auto"
      >
        <div className="flex flex-col lg:flex-row w-full max-w-[1240px] items-center gap-8 lg:gap-2.5 pt-[60px] pb-20 px-6 sm:px-12 lg:px-[100px] bg-[#3b3b3b] rounded-[45px] overflow-hidden relative mx-auto">
          <img
            src={Vector3Image}
            alt="Decorative"
            className="hidden lg:block absolute top-0 right-0 w-[250px] h-auto object-contain pointer-events-none select-none"
          />

          {/* Mobile illustration */}
          <div className="lg:hidden w-full flex justify-center mb-6">
            <img
              className="w-[300px] sm:w-[400px] h-auto object-contain mix-blend-screen"
              alt="Contact illustration"
              src={frame2Image}
            />
          </div>

          {/* Form Fields */}
          <div className="flex flex-col items-start gap-6 lg:gap-10 flex-1 w-full">
            <div className="flex flex-col items-start gap-4 lg:gap-[25px] w-full">
              {/* Name */}
              <div className="flex flex-col items-start gap-[5px] w-full">
                <Label className="text-[#dfdfdf] font-medium text-sm sm:text-base md:text-lg">
                  Name
                </Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full max-w-[480px] px-[20px] sm:px-[30px] py-[14px] sm:py-[18px] 
                             bg-[#dfdfdf] rounded-[14px] border 
                             text-sm sm:text-base md:text-lg text-[#0c0d14]"
                  placeholder="Name"
                  required
                />
              </div>

              {/* Company */}
              <div className="flex flex-col items-start gap-[5px] w-full">
                <Label className="text-[#dfdfdf] font-medium text-sm sm:text-base md:text-lg">
                  Company Name
                </Label>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full max-w-[480px] px-[20px] sm:px-[30px] py-[14px] sm:py-[18px] 
                             bg-[#dfdfdf] rounded-[14px] border 
                             text-sm sm:text-base md:text-lg text-[#0c0d14]"
                  placeholder="Company Name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col items-start gap-[5px] w-full">
                <Label className="text-[#dfdfdf] font-medium text-sm sm:text-base md:text-lg">
                  Email*
                </Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full max-w-[480px] px-[20px] sm:px-[30px] py-[14px] sm:py-[18px] 
                             bg-[#dfdfdf] rounded-[14px] border 
                             text-sm sm:text-base md:text-lg text-[#0c0d14]"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col items-start gap-[5px] w-full">
                <div className="flex items-center space-x-1">
  <Label className="text-[#dfdfdf] font-medium text-xs sm:text-sm md:text-base">
    Message
  </Label>
  <span className="text-[#dfdfdf] font-normal text-xs sm:text-sm md:text-base">
    (optional)
  </span>
</div>

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full max-w-[480px] h-[100px] sm:h-[120px] lg:h-[140px] 
                             px-[20px] sm:px-[30px] py-[14px] sm:py-[18px] 
                             bg-[#dfdfdf] rounded-[14px] border 
                             text-sm sm:text-base md:text-lg text-[#0c0d14]"
                  placeholder="Message"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="w-full flex justify-center lg:justify-start">
              <Button
                type="submit"
                disabled={loading}
                className="w-auto lg:w-full lg:max-w-[480px] 
                           px-[28px] sm:px-[35px] py-4 sm:py-5 
                           bg-[#ffb219] rounded-[14px] hover:bg-[#ffb219]/90 
                           font-bold text-black text-base sm:text-lg md:text-xl"
              >
                {loading ? "Sending..." : "CONNECT"}
              </Button>
            </div>

            {responseMessage && (
              <p className="text-white mt-4 text-sm sm:text-base md:text-lg">
                {responseMessage}
              </p>
            )}
          </div>

          {/* Desktop illustration */}
          <div className="hidden lg:block relative flex-shrink-0">
            <img
              className="w-[400px] md:w-[500px] h-auto object-contain mix-blend-screen"
              alt="Contact illustration"
              src={frame2Image}
            />
          </div>
        </div>
      </form>
    </section>
  );
};
