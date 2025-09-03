import { Card, CardContent } from "../../../../components/ui/card"
import frame4Image from "./frame4.png";
import frame5Image from "./frame5.png";
import frame6Image from "./frame6.png";
import frame7Image from "./frame7.png";
import frame8Image from "./frame8.png";
import frame9Image from "./frame9.png";

export const ServicesSection = () => {
  const services = [
    {
      icon: frame4Image,
      title: "Branding",
      description: "an aesthetic, people pleasing brand which would be relevant.",
    },
    {
      icon: frame5Image,
      title: "Website Design",
      description: "modern, trust-building websites designed to impress premium clients.",
    },
    {
      icon: frame6Image,
      title: "LinkedIn Personal Branding",
      description: "turn your LinkedIn into a client magnet that positions you as the authority in Dubai.",
    },
    {
      icon: frame7Image,
      title: "Social Media Management",
      description: "daily content that looks luxury and converts.",
    },
    {
      icon: frame8Image,
      title: "Organic Content Engine",
      description: "reels, carousels, posts that bring inbound leads",
    },
    {
      icon: frame9Image,
      title: "Lead Generation Systems",
      description: "Dubai-focused pipelines that book your calendar with high-quality prospects.",
    },
  ]

  return (
    <section className="flex flex-col items-center gap-4 bg-[#110e0e] px-4 py-10 sm:px-6 md:px-12 lg:px-[70px] md:py-[75px]">
      <div className="flex flex-col w-full max-w-[1300px] items-center gap-10 px-0 sm:px-6 md:px-10 lg:px-[111px]">
        
        {/* Heading */}
        <div className="flex flex-col w-full max-w-[634px] items-center">
          <h2 className="w-full text-center font-bold text-white 
                         text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">
            We Offer
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-3 p-4 sm:p-5 rounded-lg overflow-hidden 
                         border border-[#a0aebf] bg-transparent"
            >
              <CardContent className="p-0 flex flex-col gap-3 w-full">
                
                {/* Icon */}
                <img
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  alt={`${service.title} icon`}
                  src={service.icon || "/placeholder.svg"}
                />

                {/* Title */}
                <h3 className="w-full font-bold text-white 
                               text-[clamp(1.125rem,2.5vw,1.75rem)] leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="w-full text-[#ffffff99] 
                              text-[clamp(0.85rem,2vw,1rem)] leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
