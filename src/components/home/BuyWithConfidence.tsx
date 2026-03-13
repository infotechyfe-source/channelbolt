"use client";

import { Link } from "react-router-dom";
import {
  CheckCircle,
  ShieldCheck,
  Lock,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "lucide-react";

export default function BuyWithConfidence() {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Buy With Confidence
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Verified accounts. Secure ownership transfer.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* CARD 1 */}
        <Card
          Icon={InstagramIcon}
          iconColor="text-pink-500"
          title="Buy Instagram Pages"
          description="Discover verified Instagram pages with real followers, strong engagement, and niche-focused audiences."
          features={[
            { text: "Verified Sellers", icon: CheckCircle, color: "text-green-500" },
            { text: "Secure Ownership Transfer", icon: ShieldCheck, color: "text-blue-500" },
            { text: "Escrow Protected Payments", icon: Lock, color: "text-purple-500" },
          ]}
          link="/marketplace?platform=instagram"
          linkText="Browse Pages →"
          barColor="bg-linear-to-r from-pink-500 to-orange-500"
        />

        {/* CARD 2 */}
        <Card
          Icon={FacebookIcon}
          iconColor="text-blue-600"
          title="Buy Monetised Facebook Pages"
          description="Acquire revenue-ready Facebook pages with proven monetisation history and authentic audience engagement."
          features={[
            { text: "Verified Revenue Data", icon: CheckCircle, color: "text-green-500" },
            { text: "Secure Transfer", icon: ShieldCheck, color: "text-blue-500" },
            { text: "Buyer Protection", icon: Lock, color: "text-purple-500" },
          ]}
          link="/marketplace?platform=facebook"
          linkText="Explore Facebook Pages →"
          barColor="bg-blue-500"
        />

        {/* CARD 3 */}
        <Card
          Icon={YoutubeIcon}
          iconColor="text-red-500"
          title="Buy Monetised YouTube Channels"
          description="Own verified YouTube channels with active subscribers and monetised earnings ready to scale instantly."
          features={[
            { text: "Verified Earnings", icon: CheckCircle, color: "text-green-500" },
            { text: "Escrow Secure Payment", icon: ShieldCheck, color: "text-blue-500" },
            { text: "Instant Ownership Transfer", icon: Lock, color: "text-purple-500" },
          ]}
          link="/marketplace?platform=youtube"
          linkText="Browse Channels →"
          barColor="bg-red-500"
        />

        {/* CARD 4 */}
        <Card
          Icon={FacebookIcon}
          iconColor="text-blue-600"
          title="Facebook Non Monetized"
          description="Purchase high-engagement Facebook communities perfect for brands looking to expand reach and authority."
          features={[
            { text: "Authentic Audience", icon: CheckCircle, color: "text-green-500" },
            { text: "Secure Transfer", icon: ShieldCheck, color: "text-blue-500" },
            { text: "Verified Listings", icon: Lock, color: "text-purple-500" },
          ]}
          link="/marketplace?platform=facebook"
          linkText="Explore Communities →"
          barColor="bg-blue-400"
        />

      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */
function Card({
  Icon,
  iconColor,
  title,
  description,
  features,
  link,
  linkText,
  barColor,
}: {
  Icon: any;
  iconColor: string;
  title: string;
  description: string;
  features: { text: string; icon: any; color: string }[];
  link: string;
  linkText: string;
  barColor: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 sm:p-6 relative border border-gray-100 flex flex-col">

      {/* top color bar */}
      <div className={`absolute top-0 left-0 w-full h-1 ${barColor} rounded-t-xl`} />

      {/* icon */}
      <Icon className={`${iconColor} text-2xl sm:text-3xl mb-3 sm:mb-4`} />

      {/* title */}
      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
        {title}
      </h3>

      {/* description */}
      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
        {description}
      </p>

      {/* features */}
      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm mb-3 sm:mb-4">
        {features.map((feat, i) => (
          <li key={i} className="flex items-center gap-2">
            <feat.icon size={14} className={feat.color} />
            {feat.text}
          </li>
        ))}
      </ul>

      {/* button */}
      <Link
        to={link}
        className="mt-auto block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition"
      >
        {linkText}
      </Link>
    </div>
  );
}