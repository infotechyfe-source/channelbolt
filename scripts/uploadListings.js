import { Client, Databases, ID } from "node-appwrite";

// 🔐 Use real values here (NOT VITE ones)
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("69a5598f002db1a96664")
  .setKey("standard_505ff2aaeed580bc793af11ed0dc1a0511ad2462b223a21acfb6cc8afb8eb7040530f5edfef2294a4eb4166846c0972ecb788c78a43ce94616330ba64d165752044b3559d66a99883f45cc7f1f254c17d54d23a1c48689e710eff8fc944c5dd8d263d6b6e3672214a8dd63cf856dab9f13ae25a8b0ddfbb168892ccd80b0a89f"); // from Appwrite Console

const databases = new Databases(client);

const DATABASE_ID = "69a55aa1001ac4d8ba49";
const COLLECTION_ID = "listings";

// 🗂 Paste your listings data here
const listings = [
  {
    
    handle: "@fashionista_style",
    platform: "Instagram",
    niche: "Fashion & Lifestyle",
    followers: 312000,
    engagement: 9.4,
    revenue: 3200,
    price: 15200,
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    includeEmail: true,
  },
   {
    
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
  // 👉 Add remaining objects here
];

async function upload() {
  for (const item of listings) {
    await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      item
    );
    console.log(`Uploaded: ${item.handle}`);
  }

  console.log("✅ All listings uploaded!");
}

upload();