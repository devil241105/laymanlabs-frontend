
import React, { useState, useEffect } from "react";
import { BrandingSection } from "./sections/BrandingSection/BrandingSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { LeadGenerationSection } from "./sections/LeadGenerationSection/LeadGenerationSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";

// 👇 import these so the Contact Card works
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import frame2Image from "./sections/TestimonialsSection/frame2.png";
import Vector3Image from "./sections/TestimonialsSection/Vector3.png";

export const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  // form state
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
  const hasSeenPopup = sessionStorage.getItem("popupShown");

  if (!hasSeenPopup) {
    const timer = setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true"); // mark as shown
    }, 30000); // 30 seconds delay

    return () => clearTimeout(timer);
  }
}, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      } else {
        setResponseMessage("Failed to send message.");
      }
    } catch (err) {
      setResponseMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-transparent w-full min-h-screen relative">
      <div className="w-full bg-[#fbfcfd]">
        <div className="flex flex-col w-full">
          <HeroSection />
          <BrandingSection />
          <ServicesSection />
          <LeadGenerationSection />
          <TestimonialsSection />
          <ContactFormSection />
          <WhyChooseUsSection />
          <FooterSection />
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-10 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition"
            >
              ✕
            </button>

            {/* Contact Form (popup card) */}
            <section className="flex flex-col items-start pt-0 pb-[30px] px-4 sm:px-6 lg:px-0 bg-black/ w-full">
              <div className="flex w-full max-w-[1440px] items-start gap-6 lg:gap-10 pt-[60px] pb-[30px] px-4 sm:px-6 lg:px-[100px] mx-auto">
                <h2 className="font-bold text-white text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">
                  Contact Us
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-[100px] py-0 mx-auto"
              >
                <div className="flex flex-col lg:flex-row w-full max-w-[1240px] items-center gap-20 lg:gap-2.5 pt-[60px] pb-20 px-6 sm:px-12 lg:px-[20px] bg-[#3b3b3b] rounded-[45px] overflow-hidden relative mx-auto">
                  <img
                    src={Vector3Image}
                    alt="Decorative"
                    className="hidden lg:block absolute top-0 right-0 w-[250px]"
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
                    <div className="flex flex-col items-start gap-4 w-full">
                      {/* Name */}
                      <div className="w-full">
                        <Label className="text-[#dfdfdf] font-medium">Name</Label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full max-w-[480px] bg-[#dfdfdf] rounded-[14px] px-4 py-3"
                          placeholder="Name"
                          required
                        />
                      </div>

                      {/* Company */}
                      <div className="w-full">
                        <Label className="text-[#dfdfdf] font-medium">
                          Company Name
                        </Label>
                        <Input
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full max-w-[480px] bg-[#dfdfdf] rounded-[14px] px-4 py-3"
                          placeholder="Company Name"
                        />
                      </div>

                      {/* Email */}
                      <div className="w-full">
                        <Label className="text-[#dfdfdf] font-medium">
                          Email*
                        </Label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full max-w-[480px] bg-[#dfdfdf] rounded-[14px] px-4 py-3"
                          placeholder="Email"
                          required
                        />
                      </div>

                      {/* Message */}
                      <div className="w-full">
                        <Label className="text-[#dfdfdf] font-medium">
                          Message*
                        </Label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full max-w-[480px] h-[120px] bg-[#dfdfdf] rounded-[14px] px-4 py-3"
                          placeholder="Message"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="w-full flex justify-center lg:justify-start">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-auto lg:w-full lg:max-w-[480px] bg-[#ffb219] hover:bg-[#ffb219]/90 text-black font-bold rounded-[14px] py-4"
                      >
                        {loading ? "Sending..." : "CONNECT"}
                      </Button>
                    </div>

                    {responseMessage && (
                      <p className="text-white mt-4">{responseMessage}</p>
                    )}
                  </div>

                  {/* Desktop illustration */}
                  <div className="hidden lg:block relative flex-shrink-0 p-0">
  <img
    className="w-[400px] md:w-[400px] object-contain mix-blend-screen"
    alt="Contact illustration"
    src={frame2Image}
  />
</div>

                </div>
              </form>
            </section>
          </div>
        </div>
      )}
    </main>
  );
};
