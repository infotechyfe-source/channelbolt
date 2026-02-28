import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronLeft, ChevronRight, Filter, Flame } from "lucide-react";
import SocialCard from "../components/SocialCard";
import heromarketImg from "../assets/hero-market.jpg"
import { allListings } from "../data/listings";
import type { Listing } from "../data/listings";
type Platform = "Instagram" | "YouTube" | "Facebook";

// ================= PAGE =================
export default function Marketplace() {
  const { t } = useTranslation();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const searchTerm = "";
  const [sortBy, setSortBy] = useState<"price" | "followers" | "engagement">("price");
  const [activePlatform, setActivePlatform] = useState<
    "All" | "Instagram" | "Facebook" | "YouTube"
  >("All");
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [followersRange, setFollowersRange] = useState<string | null>(null);
  const [price, setPrice] = useState(50000);
  const [engagement, setEngagement] = useState<string[]>([]);

  const calculatePrice = (listing: Listing) =>
    listing.price ?? Math.round(listing.followers / 10);

  // ================= FILTER + SORT =================
  const filteredListings = useMemo(() => {
    return allListings
      .filter((l) => {
        const matchesSearch =
          l.niche.toLowerCase().includes(searchTerm.toLowerCase()) ||
          l.platform.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesActivePlatform =
          activePlatform === "All" || l.platform === activePlatform;

        const matchesSidebarPlatform =
          platforms.length === 0 || platforms.includes(l.platform);

        const matchesPrice = calculatePrice(l) <= price;

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
      .sort((a, b) => {
        if (sortBy === "price")
          return calculatePrice(a) - calculatePrice(b);
        if (sortBy === "followers") return a.followers - b.followers;
        return b.engagement - a.engagement;
      });
  }, [searchTerm, activePlatform, platforms, price, engagement, sortBy, followersRange,]);

  const SidebarContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Filters</h3>
        <button
          onClick={() => { setPlatforms([]); setFollowersRange(null); setPrice(50000); setEngagement([]); }}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium transition cursor-pointer"
        >
          Clear All
        </button>
      </div>

      <FilterSection title="Platform">
        {(["Instagram", "YouTube", "Facebook"] as Platform[]).map((p) => (
          <Checkbox key={p} label={p} checked={platforms.includes(p)} onChange={() => setPlatforms((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p])} />
        ))}
      </FilterSection>

      <FilterSection title="Followers">
        {["Under 10K", "10K – 50K", "50K – 100K", "100K – 500K", "500K+"].map((f) => (
          <Radio key={f} label={f} checked={followersRange === f} onChange={(value: string | null) => setFollowersRange(value)} />
        ))}
      </FilterSection>

      <FilterSection title="Price Range">
        <div className="flex justify-between text-sm mb-2">
          <span>$0</span>
          <span className="text-blue-600 font-semibold">${price.toLocaleString()}</span>
        </div>
        <input type="range" min={0} max={50000} step={500} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full accent-blue-600" aria-label="Price Range Slider" />
      </FilterSection>

      <FilterSection title="Engagement Rate">
        <Checkbox label="High (> 5%)" checked={engagement.includes("high")} onChange={() => toggleValue(engagement, "high", setEngagement)} color="text-green-600" />
        <Checkbox label="Medium (2% – 5%)" checked={engagement.includes("medium")} onChange={() => toggleValue(engagement, "medium", setEngagement)} color="text-orange-500" />
        <Checkbox label="Low (< 2%)" checked={engagement.includes("low")} onChange={() => toggleValue(engagement, "low", setEngagement)} color="text-gray-500" />
      </FilterSection>
    </div>
  );

  // ================= UI =================
  return (
    <>
      {/* =================HERO ================= */}
      <div className="relative w-full h-[272px] md:h-[272px] overflow-hidden mb-12">

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
            <div className="bg-white text-[#4A5565] rounded-2xl shadow-sm p-5 sticky top-24">
              <SidebarContent />
            </div>
          </aside>

          {/* ========== MAIN CONTENT ========== */}
          <section className="col-span-12 lg:col-span-9 xl:col-span-10 space-y-6">
            {/* ================= TOP BAR ================= */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-2xl shadow-sm lg:bg-transparent lg:p-0 lg:shadow-none">

              <div className="flex items-center justify-between w-full lg:w-auto">
                {/* Mobile Filter Trigger */}
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold"
                >
                  <Filter size={16} /> Filters
                </button>

                <p className="text-sm text-gray-500 lg:hidden">
                  <span className="font-semibold text-gray-800">{filteredListings.length}</span> results
                </p>
              </div>

              {/* Platform Tabs - Scrollable on Mobile */}
              <div className="overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                <div className="inline-flex bg-gray-200/50 p-1 rounded-xl whitespace-nowrap">
                  {["All", "Instagram", "Facebook", "YouTube"].map((label) => (
                    <button
                      key={label}
                      onClick={() => setActivePlatform(label as any)}
                      className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${activePlatform === label ? "text-white bg-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-800"}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 border-t pt-4 sm:border-0 sm:pt-0">
                <span className="text-sm text-gray-500 hidden xl:block">Sort by:</span>
                <div className="relative w-full sm:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="price">Price</option>
                    <option value="followers">Followers</option>
                    <option value="engagement">Engagement</option>
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

            </div>

            {/* Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredListings.map((listing) => (
                <SocialCard
                  key={listing.id}
                  id={listing.id}
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
                />
              ))}

              {filteredListings.length === 0 && (
                <p className="text-gray-500 col-span-full text-center">
                  {t("noAccountsFound", "No accounts found for this search.")}
                </p>
              )}
            </div>

            {/* ================= TRENDING SECTION ================= */}
            <div className="mt-12 relative">

              <div className="relative bg-linear-to-br from-blue-50 to-indigo-50  rounded-2xl p-6 border border-gray-200 shadow-md overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">

                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 text-orange-500 p-2 rounded-xl">
                      <Flame size={18} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Trending Now
                      </h3>
                      <p className="text-xs text-gray-500">
                        High-demand accounts
                      </p>
                    </div>
                  </div>

                  {/* Arrows */}
                  <div className="hidden md:flex items-center gap-2">
                    <button
                      onClick={() =>
                        document
                          .getElementById("trending-scroll")
                          ?.scrollBy({ left: -320, behavior: "smooth" })
                      }
                      className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-blue-500 hover:bg-blue-600 transition cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <button
                      onClick={() =>
                        document
                          .getElementById("trending-scroll")
                          ?.scrollBy({ left: 320, behavior: "smooth" })
                      }
                      className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-blue-500 hover:bg-blue-600 transition cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Cards Scroll Area */}
                <div
                  id="trending-scroll"
                  className="flex flex-nowrap gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
                >
                  {allListings.slice(0, 6).map((listing) => (
                    <div
                      key={listing.id}
                      className="flex-none w-[450px]"
                    >
                      <SocialCard
                        id={listing.id}
                        handle={listing.handle}
                        platform={listing.platform as any}
                        niche={listing.niche}
                        followers={listing.followers}
                        engagement={listing.engagement}
                        revenue={listing.revenue}
                        price={calculatePrice(listing)}
                        coverImage={listing.coverImage}
                        avatar={listing.avatar}
                        variant="trending"
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </section>
        </div>
      </div>

 {/* ========== MOBILE FILTER DRAWER ========== */}
       {showMobileFilters && (
         <div className="fixed inset-0 z-[100] lg:hidden">
           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
           <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
             <div className="flex items-center justify-between mb-6 border-b pb-4">
               <h2 className="text-xl font-bold">Filters</h2>
               <button onClick={() => setShowMobileFilters(false)} className="p-2 bg-gray-100 rounded-full"><X size={20}/></button>
             </div>
             <SidebarContent />
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

/* ================= HELPERS ================= */

function toggleValue<T>(
  arr: T[],
  value: T,
  setter: (v: T[]) => void
) {
  setter(arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value]);
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pt-6 space-y-4">

      {/* Soft Fade Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      {/* Section Header */}
      <div className="flex justify-between items-center">
        <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
          {title}
        </p>
        <ChevronDown size={14} className="text-gray-400" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
  color = "",
}: any) {
  return (
    <label className="flex items-center gap-3 text-sm cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4"
      />
      <span className={color}>{label}</span>
    </label>
  );
}

function Radio({ label, checked, onChange }: any) {
  return (
    <label className="flex items-center gap-3 text-sm cursor-pointer">
      <input
        type="radio"
        checked={checked}
        onChange={() => {
          if (checked) {
            onChange(null); // deselect
          } else {
            onChange(label);
          }
        }}
      />
      {label}
    </label>
  );
}