import { DollarSign, Mail, ShieldCheck } from "lucide-react";

export default function AccountBadges({ listing }: any) {
  return (
   <div className="hidden md:flex flex-wrap gap-2 justify-center my-6">

      {listing.monetized !== undefined && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${listing.monetized
              ? "bg-green-50 text-green-700 border-green-200"
              : "bg-gray-50 text-gray-600 border-gray-200"
            }`}
        >
          <DollarSign size={13} />
          {listing.monetized ? "Monetized" : "Not Monetized"}
        </span>
      )}

      {listing.payoutAvailable !== undefined && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${listing.payoutAvailable
              ? "bg-green-50 text-green-700 border-green-200"
              : "bg-gray-50 text-gray-600 border-gray-200"
            }`}
        >
          💰
          {listing.payoutAvailable ? "Payout Ready" : "No Payout"}
        </span>
      )}

      {listing.includeEmail && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border bg-blue-50 text-blue-700 border-blue-200">
          <Mail size={13} />
          OG Email
        </span>
      )}

      {listing.strikes !== undefined && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${listing.strikes === 0
              ? "bg-green-50 text-green-700 border-green-200"
              : listing.strikes === 1
                ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                : "bg-red-50 text-red-700 border-red-200"
            }`}
        >
          <ShieldCheck size={13} />
          {listing.strikes === 0
            ? "No Strikes"
            : `${listing.strikes} Strike${listing.strikes > 1 ? "s" : ""}`}
        </span>
      )}

    </div>
  );
}