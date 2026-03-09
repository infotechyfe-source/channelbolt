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
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        
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
    <div className="bg-white rounded shadow-md hover:shadow-xl transition p-6 sm:p-8 relative border border-gray-100 flex flex-col justify-between">

      <div className={`absolute top-0 left-0 w-full h-1 ${barColor} rounded-t-3xl`} />

      <Icon className={`${iconColor} text-3xl sm:text-4xl mb-4 sm:mb-6`} />

      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>

      <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">{description}</p>

      <ul className="space-y-2 sm:space-y-3 text-sm mb-4 sm:mb-6">
        {features.map((feat, i) => (
          <li key={i} className="flex items-center gap-2">
            <feat.icon size={16} className={feat.color} />
            {feat.text}
          </li>
        ))}
      </ul>

      <Link
        to={link}
        className="mt-auto block text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition"
      >
        {linkText}
      </Link>
    </div>
  );
}