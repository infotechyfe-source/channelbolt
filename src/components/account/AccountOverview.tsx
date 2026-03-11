import { ArrowUpRight, CalendarDays, Target } from "lucide-react";

export default function AccountOverview({ listing }: any) {
    return (
        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

                <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        Account Overview
                    </h3>
                    <p className="text-gray-500 mt-2">
                        Detailed audience insights and content strategy
                    </p>
                </div>

                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold border border-green-100">
                    <ArrowUpRight size={16} />
                    High Performance Account
                </div>

            </div>

            {/* Audience Niche */}
            <div className="flex gap-5 items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Target size={22} />
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Audience Niche
                    </h4>

                    <p className="text-gray-600 leading-relaxed">
                        Affluent millennials and Gen-Z interested in{" "}
                        <span className="text-blue-600 font-semibold">
                            {listing?.niche || "Luxury Lifestyle"}
                        </span>
                        , high-end travel, fashion, and premium experiences.
                    </p>
                </div>
            </div>

            {/* Content Strategy */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-6">

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                        <CalendarDays size={20} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">
                        Content Strategy
                    </h4>
                </div>

                <div className="space-y-3">
                    {[
                        { label: "Feed Posts", value: "6–7 per week" },
                        { label: "Stories", value: "Daily (15–20)" },
                        { label: "Reels", value: "4–5 per week" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center bg-white px-4 py-3 rounded-xl border border-gray-100"
                        >
                            <span className="font-medium text-gray-700">
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