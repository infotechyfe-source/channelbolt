/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import SocialCard from "./SocialCard";

type Props = {
    listings: any[];
    calculatePrice: (listing: any) => number;
};

export default function TrendingRow({ listings, calculatePrice }: Props) {

    const scroll = (direction: "left" | "right") => {
        const container = document.getElementById("trending-scroll");

        if (!container) return;

        container.scrollBy({
            left: direction === "left" ? -320 : 320,
            behavior: "smooth"
        });
    };

    return (
        <div className="col-span-full mt-8 relative">

            <div className="relative bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">

                    <div className="flex items-center gap-3">

                        <div className="bg-orange-100 text-orange-500 p-2 rounded-xl">
                            <Flame size={18} />
                        </div>

                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                Trending Now
                            </h3>

                            <p className="text-xs text-gray-500">
                                High-demand accounts
                            </p>
                        </div>

                    </div>

                    {/* Desktop arrows */}
                    <div className="hidden md:flex items-center gap-2">

                        <button
                            title="left"
                            onClick={() => scroll("left")}
                            className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-blue-500 hover:bg-blue-600 transition"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <button
                            title="right"
                            onClick={() => scroll("right")}
                            className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-blue-500 hover:bg-blue-600 transition"
                        >
                            <ChevronRight size={16} />
                        </button>

                    </div>

                </div>

                {/* Cards Scroll */}
                <div
                    id="trending-scroll"
                    className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 no-scrollbar"
                >

                    {listings.slice(0, 6).map((listing) => (

                        <div
                            key={listing.$id}
                            className="snap-start flex-none w-[85%] sm:w-90"
                        >

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
                                variant="trending"
                            />

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}