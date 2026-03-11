/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { databases, DATABASE_ID } from "../../lib/appwrite";

// TESTIMONIAL COLLECTION
const TESTIMONIAL_COLLECTION_ID = import.meta.env.VITE_APPWRITE_TESTIMONIAL_COLLECTION_ID;

export default function Testimonials() {

  const staticTestimonials = [
    {
      name: "Michael Chen",
      role: "Content Strategist, TechFlow Media",
      text: "The escrow service gave me complete peace of mind. Sold my YouTube channel for a fair price and the funds were released immediately after the buyer confirmed receipt.",
      deal: "₹42,500 — YouTube Channel Sold",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Marketer, Growth Hacking Agency",
      text: "I've bought three Facebook pages through this platform. The verification process is rigorous—no bots, just real organic growth.",
      deal: "₹12,000 — 3 Facebook Pages",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Park",
      role: "Entrepreneur, E-com Ventures",
      text: "Finding a niche-specific Instagram account was impossible until I found this marketplace.",
      deal: "₹8,500 — Instagram Page Purchase",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  ];

  const [dbTestimonials, setDbTestimonials] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const fetchTestimonials = async () => {

      try {

        const res = await databases.listDocuments(
          DATABASE_ID,
          TESTIMONIAL_COLLECTION_ID
        );

        const mapped = res.documents.map((t: any) => ({
          name: t.userName,
          role: "Verified Buyer",
          text: t.text,
          deal: "Verified Purchase",
          avatar: `https://ui-avatars.com/api/?name=${t.userName}`
        }));

        setDbTestimonials(mapped);

      } catch (err) {
        console.log(err);
      }

    };

    fetchTestimonials();

  }, []);

  const testimonials = [...staticTestimonials, ...dbTestimonials];

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-[#fcfcfc] py-4 px-4 sm:px-6 lg:px-16 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* SECURITY BADGE */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
            <ShieldCheck size={14} />
            Bank-Level Security
          </div>
        </div>

        {/* HEADER */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Trusted by <span className="text-blue-600">Buyers and Sellers</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto">
            Join thousands of entrepreneurs who trust our verified marketplace.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center">

          <button
            title="left"
            onClick={prev}
            className="absolute left-0 md:-left-10 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 text-white p-3 rounded-full cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            title="right"
            onClick={next}
            className="absolute right-0 md:-right-10 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 text-white p-3 rounded-full cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>

          {/* CARDS */}
          <div className="w-full flex justify-center relative h-90">

            {testimonials.map((testimonial, index) => {

              let position: "center" | "left" | "right" | "hidden" = "hidden";

              if (index === currentIndex) position = "center";
              else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) position = "left";
              else if (index === (currentIndex + 1) % testimonials.length) position = "right";

              return (
                <motion.div
                  key={index}
                  animate={position}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, x: 0 },
                    center: { opacity: 1, scale: 1, x: 0 },
                    left: { opacity: 0.5, scale: 0.9, x: -380 },
                    right: { opacity: 0.5, scale: 0.9, x: 380 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-80 bg-white border border-gray-200 rounded-[40px] p-8 shadow-lg"
                >

                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      className="w-12 h-12 rounded-full"
                    />

                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>

                      <p className="text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>

                  </div>

                  <p className="text-gray-600 text-sm mb-6">
                    "{testimonial.text}"
                  </p>

                  {testimonial.deal && (
                    <div className="border-t pt-4 flex justify-between items-center">
                      <span className="text-sm font-bold">
                        {testimonial.deal}
                      </span>

                      <CheckCircle2 className="text-green-500" size={18} />
                    </div>
                  )}

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              className={`h-1.5 rounded-full ${i === currentIndex ? "bg-blue-600" : "bg-gray-200"}`}
              animate={{ width: i === currentIndex ? 24 : 12 }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}