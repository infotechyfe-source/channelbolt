/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function AccountGallery({ listing }: any) {

    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeImage, setActiveImage] = useState<string | null>(null);

    if (!listing.proofImageUrls?.length) return null;

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const scrollAmount = 320;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    };

    return (
        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm relative">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Account Proof Screenshots
                </h3>

                <span className="text-sm text-gray-400">
                    {listing.proofImageUrls.length} images
                </span>

            </div>

            {/* Desktop Arrows */}
            <button
                aria-label="left"
                onClick={() => scroll("left")}
                className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
            >
                <ChevronLeft size={20} />
            </button>

            <button
                aria-label="right"
                onClick={() => scroll("right")}
                className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
            >
                <ChevronRight size={20} />
            </button>

            {/* Screenshot Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
            >

                {listing.proofImageUrls.map((url: string, index: number) => (
                    <div
                        key={index}
                        onClick={() => setActiveImage(url)}
                        className="snap-start shrink-0 cursor-pointer group
                       w-[220px] sm:w-[260px] lg:w-[300px]"
                    >

                        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-xl transition">

                            <img
                                src={url}
                                alt={`Proof ${index + 1}`}
                                loading="lazy"
                                className="w-full h-[380px] sm:h-[420px] lg:h-[460px] object-cover 
                           group-hover:scale-105 transition duration-500"
                            />

                        </div>

                    </div>
                ))}

            </div>

            {/* Fullscreen Image Viewer */}
            {activeImage && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">

                    <button
                        aria-label="l"
                        onClick={() => setActiveImage(null)}
                        className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
                    >
                        <X size={22} />
                    </button>

                    <img
                        src={activeImage}
                        alt="preview"
                        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
                    />

                </div>
            )}

        </div>
    );
}