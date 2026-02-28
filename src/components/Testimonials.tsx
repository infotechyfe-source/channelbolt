import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Content Strategist, TechFlow Media",
      text: "The escrow service gave me complete peace of mind. Sold my YouTube channel for a fair price and the funds were released immediately after the buyer confirmed receipt.",
      deal: "$42,500 — YouTube Channel Sold",
      platform: "youtube",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Marketer, Growth Hacking Agency",
      text: "I've bought three Facebook pages through this platform. The verification process is rigorous—no bots, just real organic growth. Highly recommended for scaling quickly.",
      deal: "$12,000 — 3 Facebook Pages",
      platform: "facebook",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Park",
      role: "Entrepreneur, E-com Ventures",
      text: "Finding a niche-specific Instagram account was impossible until I found this marketplace. The filters helped me find an account with 80% female audience in the beauty niche.",
      deal: "$8,500 — Instagram Page Purch",
      platform: "instagram",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Aman Verma",
      role: "Instagram Buyer",
      text: "ChannelBolt helped me buy a verified Instagram page safely. The process was smooth and secure.",
      deal: "$5,200 — Instagram Page Purchased",
      platform: "instagram",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Priya Sharma",
      role: "YouTube Seller",
      text: "Sold my monetized YouTube channel within 5 days. Very professional platform!",
      deal: "$18,400 — YouTube Channel Sold",
      platform: "youtube",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg"
    },
    {
      name: "Rahul Mehta",
      role: "Facebook Page Owner",
      text: "Secure deal and instant support. Highly recommend this marketplace.",
      deal: "$7,800 — Facebook Pages Sold",
      platform: "facebook",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      name: "Neha Kapoor",
      role: "Digital Entrepreneur",
      text: "Great listings and verified accounts. I’ve already purchased two pages.",
      deal: "$11,300 — Mixed Platforms",
      platform: "instagram",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      name: "Arjun Singh",
      role: "Crypto Influencer",
      text: "The escrow system made everything trustworthy. 10/10 experience.",
      deal: "$9,500 — Instagram & YouTube",
      platform: "youtube",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-[#fcfcfc] py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Security Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
            <ShieldCheck size={14} className="text-blue-600" />
            Bank-Level Security
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Trusted by <span className="text-blue-600">Buyers and Sellers</span> Worldwide
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of entrepreneurs who trust our verified marketplace for safe, transparent, and instant digital asset transfers.
          </p>
        </div>

        {/* Carousel + Navigation */}
        <div className="relative flex items-center justify-center">

          {/* Left / Right Buttons */}
          <button
            onClick={prev}
            type="button"
            title="Previous testimonial"
            aria-label="Previous testimonial"
            className="absolute left-0 md:left-[-40px] top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition shadow-lg cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            type="button"
            title="Next testimonial"
            aria-label="Next testimonial"
            className="absolute right-0 md:right-[-40px] top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition shadow-lg cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards */}
          <div className="w-full flex justify-center relative h-[380px] sm:h-[420px] md:h-[440px]">
            {testimonials.map((testimonial, index) => {
              let position: "center" | "left" | "right" | "hidden" = "hidden";
              if (index === currentIndex) position = "center";
              else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) position = "left";
              else if (index === (currentIndex + 1) % testimonials.length) position = "right";

              return (
                <motion.div
                  key={index}
                  custom={direction}
                  initial="hidden"
                  animate={position}
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, x: 0, zIndex: 0 },
                    center: { opacity: 1, scale: 1, x: 0, zIndex: 10 },
                    left: { opacity: 0.5, scale: 0.9, x: -380, zIndex: 5 },
                    right: { opacity: 0.5, scale: 0.9, x: 380, zIndex: 5 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 md:w-80 lg:w-96 bg-white border border-gray-200 rounded-[40px] p-6 sm:p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img src={testimonial.avatar} alt="" className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-gray-400 text-[10px] sm:text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-[13px] sm:text-sm sm:leading-relaxed mb-4 sm:mb-6">
                    "{testimonial.text}"
                  </p>
                  {testimonial.deal && (
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Verified Deal</span>
                        <span className="text-gray-700 font-bold text-xs sm:text-sm tracking-tight">{testimonial.deal}</span>
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle2 className="text-green-500" size={16} />
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              className={`h-1.5 rounded-full ${i === currentIndex ? 'bg-blue-600' : 'bg-gray-200'}`}
              animate={{ width: i === currentIndex ? 24 : 12 }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}