import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import SocialCard from '../components/SocialCard';
import { useState } from "react";

// Mock data
interface Listing {
  id: number;
  handle: string;
  niche: string;
  platform: "Instagram" | "YouTube" | "Facebook";
  followers: number;
  engagement: number;
  location: string;
  revenue: number;
  price: number;
  coverImage: string;
  avatar: string;
}

const recommendedListings: Listing[] = [
  {
    id: 1,
    handle: '@fashionista_style',
    niche: 'Fashion & Lifestyle',
    platform: 'Instagram',
    followers: 312000,
    engagement: 9.4,
    location: 'United States',
    revenue: 3200,
    price: 15200,
    coverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    handle: 'Tech Review Hub',
    niche: 'Technology',
    platform: 'YouTube',
    followers: 189000,
    engagement: 11.2,
    location: 'United Kingdom',
    revenue: 5800,
    price: 22500,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    handle: 'Modern Architecture',
    niche: 'Design & Home',
    platform: 'Facebook',
    followers: 425000,
    engagement: 8.7,
    location: 'Canada',
    revenue: 4100,
    price: 28500,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
  },
];

export default function RecommendedListings() {
  const navigate = useNavigate();
  const [selectedNiche, setSelectedNiche] = useState("All");

  const niches = ["All", ...new Set(recommendedListings.map(a => a.niche))];

  const filteredListings = selectedNiche === "All"
    ? recommendedListings
    : recommendedListings.filter(a => a.niche === selectedNiche);

  return (
    <section className="bg-[#0A0A0A] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-white font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#E5EEFF] text-[#2563EB] text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider mb-2 sm:mb-3">
              Trending
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 tracking-tight">
              Recommended Listings
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Premium social assets vetted for growth potential and authentic engagement.
            </p>
          </div>

          {/* Filters & Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <select
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="bg-white text-black px-3 sm:px-5 py-2 rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            >
              {niches.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <button
              onClick={() => navigate("/marketplace")}
              className="bg-blue-500 px-4 sm:px-5 py-2 rounded-2xl font-semibold hover:bg-blue-600 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View All
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {filteredListings.map(account => (
            <div key={account.id} className="sm:min-h-[300px] md:min-h-[320px] lg:min-h-[350px]">
              <SocialCard
                id={account.id}
                handle={account.handle}
                platform={account.platform}
                niche={account.niche}
                followers={account.followers}
                engagement={account.engagement}
                revenue={account.revenue}
                price={account.price}
                coverImage={account.coverImage}
                avatar={account.avatar}
                includeEmail={true}
                 // card smaller on mobile
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}