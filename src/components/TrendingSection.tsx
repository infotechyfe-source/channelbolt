import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialCard from "../components/SocialCard";
import { useEffect, useState } from "react";
import { databases, DATABASE_ID, COLLECTION_ID } from "../lib/appwrite";
import { Query } from "appwrite";

interface Listing {
  $id: string;
  handle: string;
  niche: string;
  platform: "Instagram" | "YouTube" | "Facebook";
  followers: number;
  engagement: number;
  revenue: number;
  price: number;
  coverImage: string;
  avatar: string;
}

export default function RecommendedListings() {
  const navigate = useNavigate();
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedNiche, setSelectedNiche] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [
            Query.limit(3), // only 3 recommended
            Query.orderDesc("$createdAt"),
          ]
        );

        setListings(response.documents as unknown as Listing[]);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const niches = [
    "All",
    ...new Set(listings.map((a) => a.niche)),
  ];

  const filteredListings =
    selectedNiche === "All"
      ? listings
      : listings.filter((a) => a.niche === selectedNiche);

  if (loading) {
    return (
      <section className="py-20 text-center text-white bg-[#0A0A0A]">
        Loading listings...
      </section>
    );
  }

  return (
    <section className="bg-[#0A0A0A] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#E5EEFF] text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Trending
            </span>
            <h2 className="text-3xl font-bold mb-3">
              Recommended Listings
            </h2>
            <p className="text-gray-400">
              Premium social assets vetted for growth potential.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <select
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="bg-white text-black px-4 py-2 rounded-xl text-sm"
            >
              {niches.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <button
              onClick={() => navigate("/marketplace")}
              className="bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 flex items-center gap-2 cursor-pointer"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        {filteredListings.length === 0 ? (
          <p className="text-gray-400 text-center">
            No listings available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((account) => (
              <SocialCard
                key={account.$id}
                $id={account.$id}
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
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}