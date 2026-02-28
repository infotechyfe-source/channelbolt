/* ================= TYPES ================= */

export type Platform = "Instagram" | "YouTube" | "Facebook";

export type Listing = {
  id: number;
  handle: string;
  platform: Platform;
  niche: string;
  followers: number;
  engagement: number;
  revenue: number;
  price?: number;
  coverImage: string;
  avatar: string;
  includeEmail?: boolean;
};

/* ================= DATA ================= */

export const allListings: Listing[] = [
  {
    id: 1,
    handle: "@fashionista_style",
    platform: "Instagram",
    niche: "Fashion & Lifestyle",
    followers: 312000,
    engagement: 9.4,
    revenue: 3200,
    price: 15200,
    coverImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    includeEmail: true,
  },
  {
    id: 2,
    handle: "@urban_fitlife",
    platform: "Instagram",
    niche: "Fitness & Health",
    followers: 184000,
    engagement: 7.8,
    revenue: 2800,
    price: 12400,
    coverImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    includeEmail: true,
  },
  {
    id: 3,
    handle: "Tech Review Hub",
    platform: "YouTube",
    niche: "Technology",
    followers: 189000,
    engagement: 11.2,
    revenue: 5800,
    price: 22500,
    coverImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    includeEmail: true,
  },
  {
    id: 4,
    handle: "Modern Architecture",
    platform: "Facebook",
    niche: "Design & Home",
    followers: 425000,
    engagement: 8.7,
    revenue: 4100,
    price: 28500,
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    includeEmail: true,
  },
  {
    id: 5,
    handle: "@foodie_delight",
    platform: "Instagram",
    niche: "Food & Beverages",
    followers: 98000,
    engagement: 12.1,
    revenue: 1500,
    price: 9800,
    coverImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    avatar:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 6,
    handle: "@travel_nomad",
    platform: "Instagram",
    niche: "Travel & Adventure",
    followers: 265000,
    engagement: 10.3,
    revenue: 4200,
    price: 19800,
    coverImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    includeEmail: true,
  },
  {
    id: 7,
    handle: "Crypto Explained",
    platform: "YouTube",
    niche: "Finance & Crypto",
    followers: 142000,
    engagement: 6.5,
    revenue: 3700,
    price: 17500,
    coverImage:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=200",
    includeEmail: true,
  },
  {
    id: 8,
    handle: "@daily_motivation",
    platform: "Facebook",
    niche: "Motivation & Quotes",
    followers: 510000,
    engagement: 5.2,
    revenue: 4600,
    price: 31000,
    coverImage:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200",
  },
];