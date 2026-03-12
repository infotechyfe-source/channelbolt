import { ArrowUpRight, CalendarDays, Target } from "lucide-react";

export default function AccountOverview({ listing }: any) {
    return (
        <div className="bg-white rounded-3xl border border-gray-100 p-5 sm:p-8 shadow-sm">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Account Overview
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base mt-1">
                        Audience insights & content strategy
                    </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border border-green-100">
                    <ArrowUpRight className="w-4 h-4" />
                    High Performance
                </div>

            </div>

            {/* Audience Niche */}
            <div className="flex gap-4 items-start">

                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 shrink-0">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                        Audience Niche
                    </h4>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Affluent millennials and Gen-Z interested in{" "}
                        <span className="text-blue-600 font-semibold">
                            {listing?.niche || "Luxury Lifestyle"}
                        </span>
                        , travel, fashion, and premium experiences.
                    </p>
                </div>

            </div>

            {/* Content Strategy */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-100 mt-6">

                <div className="flex items-center gap-3 mb-5">

                    <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                        <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                        Content Strategy
                    </h4>

                </div>

                <div className="space-y-2.5">

                    {[
                        { label: "Feed Posts", value: "6–7 / week" },
                        { label: "Stories", value: "Daily (15–20)" },
                        { label: "Reels", value: "4–5 / week" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center bg-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-gray-100"
                        >
                            <span className="text-sm font-medium text-gray-700">
                                {item.label}
                            </span>

                            <span className="text-purple-600 font-semibold text-sm">
                                {item.value}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}