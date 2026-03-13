/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo, useEffect, useRef, Fragment } from "react";

import { useTranslation } from "react-i18next";
import { ChevronDown, Filter, X } from "lucide-react";
import SocialCard from "../components/SocialCard";
import TrendingSection from "../components/TrendingRow";
import heromarketImg from "../assets/hero-market.jpg"
import FilterPanel from "../components/FilterPanel";
import { useSearchParams } from "react-router-dom";
import { Query } from "appwrite";
import { databases, DATABASE_ID, COLLECTION_ID } from "../lib/appwrite";
import type { Platform } from "../types/platform";

type Listing = {
  $id: string;
  niche: string;
  platform: Platform;
  followers: number;
  engagement: number;
  price?: number;
  status: "approved" | "sold" | "pending" | "rejected";
};

export default function Marketplace() {
  const { t } = useTranslation();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const searchTerm = "";
  const [sortBy, setSortBy] = useState<"price" | "followers" | "engagement">("price");
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activePlatform, setActivePlatform] = useState<
    "All" | "Instagram" | "Facebook" | "YouTube"
  >("All");
  const platformTabs = ["All", "Instagram", "Facebook", "YouTube", "Facebook NonMonetised"];
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [followersRange, setFollowersRange] = useState<string | null>(null);
  const [price, setPrice] = useState(Infinity);
  const [engagement, setEngagement] = useState<string[]>([]);

  const calculatePrice = (listing: Listing) =>
    listing.price ?? Math.round(listing.followers / 10);

  const [searchParams] = useSearchParams();
  const niche = searchParams.get("niche");
  const tabsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [Query.equal("status", "approved")]
        );
        setListings(response.documents);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  useEffect(() => {

    const fetchListings = async () => {

      const queries = [];

      if (niche) {
        queries.push(Query.equal("niche", niche));
      }

      const res = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        queries
      );

      setListings(res.documents);
    };

    fetchListings();

  }, [niche]);

  // ================= FILTER + SORT =================
  const filteredListings = useMemo(() => {
    return listings
      .filter((l: Listing) => {
        const matchesSearch =
          l.niche?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          l.platform?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesActivePlatform =
          activePlatform === "All" || l.platform === activePlatform;

        const matchesSidebarPlatform =
          platforms.length === 0 || platforms.includes(l.platform);

        const matchesPrice =
          price === Infinity || calculatePrice(l) <= price;

        const matchesEngagement =
          engagement.length === 0 ||
          engagement.some((e) =>
            e === "high"
              ? l.engagement > 5
              : e === "medium"
                ? l.engagement >= 2 && l.engagement <= 5
                : l.engagement < 2
          );

        const matchesFollowers =
          !followersRange ||
          (followersRange === "Under 10K" && l.followers < 10000) ||
          (followersRange === "10K – 50K" &&
            l.followers >= 10000 &&
            l.followers <= 50000) ||
          (followersRange === "50K – 100K" &&
            l.followers > 50000 &&
            l.followers <= 100000) ||
          (followersRange === "100K – 500K" &&
            l.followers > 100000 &&
            l.followers <= 500000) ||
          (followersRange === "500K+" && l.followers > 500000);

        return (
          matchesSearch &&
          matchesActivePlatform &&
          matchesSidebarPlatform &&
          matchesPrice &&
          matchesEngagement &&
          matchesFollowers
        );
      })
      .sort((a: Listing, b: Listing) => {
        if (sortBy === "price")
          return calculatePrice(a) - calculatePrice(b);

        if (sortBy === "followers")
          return b.followers - a.followers; // descending better UX

        return b.engagement - a.engagement;
      });
  }, [
    listings,   // (very important)
    searchTerm,
    activePlatform,
    platforms,
    price,
    engagement,
    sortBy,
    followersRange,
  ]);

  useEffect(() => {
    setPlatforms([]);
    setFollowersRange(null);
    setPrice(Infinity);
    setEngagement([]);
    setActivePlatform("All");
  }, []);

  const scrollToTab = (index: number) => {
    const container = tabsRef.current;
    if (!container) return;

    const tab = container.children[index] as HTMLElement;

    tab?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* PAGE TITLE SKELETON */}
          <div className="mb-10 animate-pulse">
            <div className="h-8 w-64 bg-gray-300 rounded mb-3" />
            <div className="h-4 w-96 bg-gray-200 rounded" />
          </div>

          {/* FILTER BAR SKELETON */}
          <div className="flex gap-4 mb-8 animate-pulse">
            <div className="h-10 w-40 bg-gray-200 rounded-lg" />
            <div className="h-10 w-32 bg-gray-200 rounded-lg" />
            <div className="h-10 w-36 bg-gray-200 rounded-lg" />
          </div>

          {/* CARD GRID SKELETON */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse"
              >
                {/* Cover Image */}
                <div className="h-40 bg-gray-200" />

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div className="h-4 w-32 bg-gray-300 rounded" />
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded" />

                  <div className="flex justify-between items-center pt-4">
                    <div className="h-6 w-20 bg-gray-300 rounded" />
                    <div className="h-8 w-24 bg-gray-300 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }

  return (
    <>
      {/* =================HERO ================= */}
      <div className="relative w-full h-68 overflow-hidden mb-4">

        {/* Background Image */}
        <img src={heromarketImg} alt="Marketplace"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <h1 className="text-3xl md:text-6xl font-bold">
            {t("marketplace")}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            {t(
              "exploreAccounts",
              "Explore verified social media accounts ready for growth."
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
        <div className="grid grid-cols-12 gap-6">

          {/* ========== DESKTOP ASIDE ========== */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <div className="bg-white text-[#4A5565] rounded-2xl shadow-sm p-5 sticky top-2">
              <FilterPanel
                platforms={platforms}
                setPlatforms={setPlatforms}
                followersRange={followersRange}
                setFollowersRange={setFollowersRange}
                price={price}
                setPrice={setPrice}
                engagement={engagement}
                setEngagement={setEngagement}
              />
            </div>
          </aside>

          {/* ========== MAIN CONTENT ========== */}
          <section className="col-span-12 lg:col-span-9 xl:col-span-10 space-y-6">

            {/* ================= TOP BAR ================= */}
            <div className="bg-white rounded-2xl shadow-sm p-4 lg:bg-transparent lg:p-0 lg:shadow-none">

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* LEFT SIDE */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:flex-1">

                  {/* MOBILE → Filter + Sort */}
                  <div className="grid grid-cols-2 gap-3 lg:hidden">

                    {/* FILTER BUTTON */}
                    <button
                      onClick={() => setShowMobileFilters(true)}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-sm"
                    >
                      <Filter size={16} />
                      Filters
                    </button>

                    {/* SORT DROPDOWN */}
                    <div className="relative">
                      <select
                        title="sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
                      >
                        <option value="price">Sort: Price</option>
                        <option value="followers">Sort: Followers</option>
                        <option value="engagement">Sort: Engagement</option>
                      </select>

                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>

                  </div>

                  {/* PLATFORM TABS */}
                  <div className="overflow-x-auto no-scrollbar">
                    <div
                      ref={tabsRef}
                      className="flex bg-gray-200/50 p-1 rounded-xl whitespace-nowrap w-max"
                    >
                      {platformTabs.map((label, index) => (
                        <button
                          key={label}
                          onClick={() => {
                            setActivePlatform(label as any);
                            scrollToTab(index);
                          }}
                          className={`px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${activePlatform === label
                            ? "text-white bg-blue-600 shadow-sm"
                            : "text-gray-500 hover:text-gray-800"
                            }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* DESKTOP → SORT */}
                <div className="hidden lg:flex items-center gap-3">

                  <span className="text-sm text-gray-500">Sort by:</span>

                  <div className="relative w-40">
                    <select
                      title="sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-10 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="price">Price</option>
                      <option value="followers">Followers</option>
                      <option value="engagement">Engagement</option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>

                </div>

              </div>
            </div>

            {/* Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredListings.map((listing, index) => (
                <Fragment key={listing.$id}>

                  <SocialCard
                    $id={listing.$id}
                    handle={listing.handle}
                    platform={listing.platform}
                    niche={listing.niche}
                    followers={listing.followers}
                    engagement={listing.engagement}
                    revenue={listing.revenue}
                    price={calculatePrice(listing)}
                    coverImage={listing.coverImage}
                    avatar={listing.avatar}
                    includeEmail={listing.includeEmail}
                    payoutAvailable={listing.payoutAvailable}
                    status={listing.status}
                  />

                  {(index + 1) % 6 === 0 && (
                    <TrendingSection
                      key={`trending-${index}`}
                      listings={listings}
                      calculatePrice={calculatePrice}
                    />
                  )}

                </Fragment>
              ))}

              {filteredListings.length === 0 && (
                <p className="text-gray-500 col-span-full text-center">
                  {t("noAccountsFound", "No accounts found for this search.")}
                </p>
              )}
            </div>

          </section>
        </div>
      </div>

      {/* ========== MOBILE FILTER DRAWER ========== */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-100 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-4xl p-6 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between mb-6 border-b pb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                title="close"
                onClick={() => setShowMobileFilters(false)}
                className="p-2 bg-gray-100 rounded-full"><X size={20} /></button>
            </div>
            <FilterPanel
              platforms={platforms}
              setPlatforms={setPlatforms}
              followersRange={followersRange}
              setFollowersRange={setFollowersRange}
              price={price}
              setPrice={setPrice}
              engagement={engagement}
              setEngagement={setEngagement}
            />
            <button
              onClick={() => setShowMobileFilters(false)}
              className="w-full mt-8 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200"
            >
              Show {filteredListings.length} Results
            </button>
          </div>
        </div>
      )}
    </>
  );
}

