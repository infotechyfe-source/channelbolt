import { Users, TrendingUp, DollarSign, ShieldCheck, CheckCircle, Sparkles } from "lucide-react";

export default function AccountMetrics({ listing }: any) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-5 sm:p-8 shadow-sm">

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          Account Metrics
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Performance insights & monetization details
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">

        <MetricCard
          icon={<Users className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
          label="Followers"
          value={listing.followers?.toLocaleString() || "0"}
          color="blue"
        />

        {listing.platform === "Instagram" && (
          <MetricCard
            icon={<TrendingUp className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
            label="Engagement Rate"
            value={`${listing.engagement || 0}%`}
            color="green"
          />
        )}

        <MetricCard
          icon={<DollarSign className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
          label="Monthly Revenue"
          value={`₹${listing.revenue?.toLocaleString() || 0}`}
          color="yellow"
        />

        {listing.payoutAvailable !== undefined && (
          <MetricCard
            icon={<DollarSign className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
            label="Payout"
            value={listing.payoutAvailable ? "Available" : "Not Available"}
            color="green"
          />
        )}

        <MetricCard
          icon={<Sparkles className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
          label="Niche"
          value={listing.niche || "General"}
          color="purple"
        />

        {listing.platform === "Instagram" && (
          <MetricCard
            icon={<CheckCircle className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
            label="Account Type"
            value={listing.accountType || "N/A"}
            color="indigo"
          />
        )}

        {listing.platform === "Facebook" && (
          <>
            <MetricCard
              icon={<ShieldCheck className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
              label="Page Status"
              value={listing.pageStatus || "N/A"}
              color="blue"
            />
            <MetricCard
              icon={<DollarSign className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
              label="Monetized"
              value={listing.monetized ? "Yes" : "No"}
              color="green"
            />
          </>
        )}

        {listing.platform === "YouTube" && (
          <>
            <MetricCard
              icon={<TrendingUp className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
              label="Average Views"
              value={listing.avgViews?.toLocaleString() || "N/A"}
              color="red"
            />
            <MetricCard
              icon={<DollarSign className="w-5 h-5 sm:w-[18px] sm:h-[18px]" />}
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
    <div className="bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-100 hover:shadow-md transition">

      {/* Mobile vertical layout / Desktop horizontal */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">

        <div
          className={`w-11 h-11 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${colorStyles[color]}`}
        >
          {icon}
        </div>

        <div>
          <p className="text-xs sm:text-sm text-gray-500">{label}</p>
          <p className="text-base sm:text-lg font-bold text-gray-900">{value}</p>
        </div>

      </div>

    </div>
  );
}