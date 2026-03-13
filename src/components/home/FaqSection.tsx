"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the verification process work?",
    answer:
      "Every account goes through our rigorous 3-step verification process: 1) Owner identity verification, 2) Account authenticity check including follower quality and engagement metrics, 3) Legal ownership documentation review. Only accounts that pass all checks are listed on our marketplace.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes. All transactions are protected through secure escrow. Funds are only released once ownership transfer is completed and verified.",
  },
  {
    question: "How long does the transfer process take?",
    answer:
      "Most transfers are completed within 24–72 hours depending on platform policies and seller responsiveness.",
  },
  {
    question: "What happens if there's an issue with my purchase?",
    answer:
      "Our support team steps in immediately. Escrow protection ensures your funds remain secure until the issue is resolved.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col">
          <span className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium w-max">
            Got Questions?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-lg">
            Everything you need to know about buying and selling on our
            platform. Can't find what you're looking for?
          </p>

          <button className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base w-max">
            Contact Support
          </button>

          {/* Help Card */}
          <div className="mt-8 sm:mt-12 bg-gray-900 p-6 sm:p-8 rounded-3xl border border-gray-800">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Still need help?</h4>

            <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Email</p>
                <p>support@socialtrade.com</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Live Chat</p>
                <p>Available 24/7</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Response Time</p>
                <p>Under 2 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE ACCORDION */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 text-black rounded-2xl p-4 sm:p-6 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="font-semibold text-base sm:text-lg">{faq.question}</h3>

                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-500 text-white cursor-pointer">
                  {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {activeIndex === index && (
                <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}