import { Users, TrendingUp, DollarSign, ShieldCheck, CheckCircle, Sparkles } from "lucide-react";

export default function AccountMetrics({ listing }: any) {
  return (
   <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">
   
                               <div className="flex items-center justify-between mb-8">
                                   <div>
                                       <h3 className="text-2xl font-bold text-gray-900">
                                           Account Metrics
                                       </h3>
                                       <p className="text-gray-500 text-sm mt-1">
                                           Performance insights & monetization details
                                       </p>
                                   </div>
   
                                   {listing.verified && (
                                       <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold border border-green-100">
                                           <ShieldCheck size={16} />
                                           Verified Listing
                                       </div>
                                   )}
                               </div>
   
                               <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
   
                                   {/* Followers */}
                                   <MetricCard
                                       icon={<Users size={18} />}
                                       label="Followers"
                                       value={listing.followers?.toLocaleString() || "0"}
                                       color="blue"
                                   />
   
   
                                   {/* Engagement (Instagram only) */}
                                   {listing.platform === "Instagram" && (
                                       <MetricCard
                                           icon={<TrendingUp size={18} />}
                                           label="Engagement Rate"
                                           value={`${listing.engagement || 0}%`}
                                           color="green"
                                       />
                                   )}
   
                                   {/* Revenue */}
                                   <MetricCard
                                       icon={<DollarSign size={18} />}
                                       label="Monthly Revenue"
                                       value={`₹${listing.revenue?.toLocaleString() || 0}`}
                                       color="yellow"
                                   />
   
                                   {/* Payout */}
                                   {listing.payoutAvailable !== undefined && (
                                       <MetricCard
                                           icon={<DollarSign size={18} />}
                                           label="Payout"
                                           value={listing.payoutAvailable ? "Available" : "Not Available"}
                                           color="green"
                                       />
                                   )}
   
   
                                   {/* Niche */}
                                   <MetricCard
                                       icon={<Sparkles size={18} />}
                                       label="Niche"
                                       value={listing.niche || "General"}
                                       color="purple"
                                   />
   
                                   {/* Instagram Specific */}
                                   {listing.platform === "Instagram" && (
                                       <MetricCard
                                           icon={<CheckCircle size={18} />}
                                           label="Account Type"
                                           value={listing.accountType || "N/A"}
                                           color="indigo"
                                       />
                                   )}
   
                                   {/* Facebook Specific */}
                                   {listing.platform === "Facebook" && (
                                       <>
                                           <MetricCard
                                               icon={<ShieldCheck size={18} />}
                                               label="Page Status"
                                               value={listing.pageStatus || "N/A"}
                                               color="blue"
                                           />
                                           <MetricCard
                                               icon={<DollarSign size={18} />}
                                               label="Monetized"
                                               value={listing.monetized ? "Yes" : "No"}
                                               color="green"
                                           />
                                       </>
                                   )}
   
                                   {/* YouTube Specific */}
                                   {listing.platform === "YouTube" && (
                                       <>
                                           <MetricCard
                                               icon={<TrendingUp size={18} />}
                                               label="Average Views"
                                               value={listing.avgViews?.toLocaleString() || "N/A"}
                                               color="red"
                                           />
                                           <MetricCard
                                               icon={<DollarSign size={18} />}
                                               label="Monetized"
                                               value={listing.monetized ? "Yes" : "No"}
                                               color="green"
                                           />
                                       </>
                                   )}
   
                               </div>
                           </div>
  );
}

interface MetricCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    color: "blue" | "green" | "yellow" | "purple" | "indigo" | "red";
}

function MetricCard({ icon, label, value, color }: MetricCardProps) {
    const colorStyles: Record<MetricCardProps["color"], string> = {
        blue: "bg-blue-100 text-blue-600",
        green: "bg-green-100 text-green-600",
        yellow: "bg-yellow-100 text-yellow-600",
        purple: "bg-purple-100 text-purple-600",
        indigo: "bg-indigo-100 text-indigo-600",
        red: "bg-red-100 text-red-600",
    };

    return (
        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center gap-4">

                <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorStyles[color]}`}
                >
                    {icon}
                </div>

                <div>
                    <p className="text-sm text-gray-500">{label}</p>
                    <p className="text-lg font-bold text-gray-900">{value}</p>
                </div>

            </div>
        </div>
    );
}