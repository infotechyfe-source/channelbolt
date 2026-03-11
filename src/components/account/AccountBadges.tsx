import { DollarSign, Mail, ShieldCheck } from "lucide-react";

export default function AccountBadges({ listing }: any) {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center my-6">

      {listing.monetized !== undefined && (
        <span
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold border ${
            listing.monetized
              ? "bg-green-50 text-green-700 border-green-100"
              : "bg-gray-100 text-gray-700 border-gray-200"
          }`}
        >
          <DollarSign size={14} />
          {listing.monetized ? "Monetized" : "Not Monetized"}
        </span>
      )}

      {listing.payoutAvailable !== undefined && (
        <span className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold border bg-green-50 text-green-700 border-green-100">
          💰 {listing.payoutAvailable ? "Payout Available" : "No Payout"}
        </span>
      )}

      {listing.includeEmail && (
        <span className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold border bg-blue-50 text-blue-700 border-blue-100">
          <Mail size={14} />
          OG Email
        </span>
      )}

      {listing.strikes !== undefined && (
        <span className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold border bg-gray-50 text-gray-700 border-gray-200">
          <ShieldCheck size={14} />
          {listing.strikes === 0 ? "No Strikes" : `${listing.strikes} Strikes`}
        </span>
      )}

    </div>
  );
}