import { ShieldCheck, DollarSign, Mail } from "lucide-react";

export default function AccountHeader({ listing, supportsStrikes }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-3 sm:mt-6">

      {/* ================= MOBILE CARD ================= */}
      <div className="md:hidden bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">

        {/* Cover */}
        <img
          src={listing.coverImageUrl}
          alt={`${listing.handle} cover`}
          className="w-full h-36 object-cover"
        />

        <div className="p-4">

          {/* Avatar + Info */}
          <div className="flex items-center gap-3">

            <img
              src={listing.avatarUrl}
              alt={`${listing.handle} avatar`}
              className="w-14 h-14 rounded-xl object-cover border"
            />

            <div className="flex-1">

              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-base">
                  {listing.handle}
                </h2>

                {listing.verified && (
                  <span className="flex items-center justify-center bg-blue-500 text-white rounded-full w-5 h-5">
                    <ShieldCheck size={12} />
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500">
                {listing.platform}
              </p>

            </div>

          </div>

         

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-4 text-xs">

            {listing.monetized !== undefined && (
              <span
                className={`flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border ${listing.monetized
                    ? "bg-green-50 text-green-700 border-green-100"
                    : "bg-gray-100 text-gray-700 border-gray-200"
                  }`}
              >
                <DollarSign size={12} />
                {listing.monetized ? "Monetized" : "Not Monetized"}
              </span>
            )}

            {listing.payoutAvailable !== undefined && (
              <span
                className={`flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border ${listing.payoutAvailable
                    ? "bg-green-50 text-green-700 border-green-100"
                    : "bg-gray-100 text-gray-700 border-gray-200"
                  }`}
              >
                💰 {listing.payoutAvailable ? "Payout Available" : "No Payout"}
              </span>
            )}

            {supportsStrikes && (
              <span
                className={`flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border ${listing.strikes === 0
                    ? "bg-green-50 text-green-700 border-green-100"
                    : listing.strikes === 1
                      ? "bg-yellow-50 text-yellow-700 border-yellow-100"
                      : "bg-red-50 text-red-700 border-red-100"
                  }`}
              >
                <ShieldCheck size={12} />
                {listing.strikes === 0
                  ? "No Strikes"
                  : listing.strikes === 1
                    ? "1 Strike"
                    : `${listing.strikes} Strikes`}
              </span>
            )}

            {listing.includeEmail && (
              <span className="flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border bg-blue-50 text-blue-700 border-blue-100">
                <Mail size={12} /> OG Email
              </span>
            )}

          </div>

        </div>
      </div>

      {/* ================= DESKTOP HERO ================= */}
      <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">

        <img
          src={listing.coverImageUrl}
          alt="cover"
          className="w-full h-56 lg:h-72 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">

          <div className="flex items-end justify-between">

            <div className="flex items-center gap-4 text-white">

              <img
                src={listing.avatarUrl}
                alt="avatar"
                className="w-20 h-20 rounded-xl border-4 border-white object-cover"
              />

              <div>

                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">
                    {listing.handle}
                  </h2>

                  {listing.verified && (
                    <ShieldCheck size={18} />
                  )}
                </div>

                <p className="text-sm opacity-80">
                  {listing.platform}
                </p>

              </div>

            </div>

            {listing.verified && (
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold border border-green-100">
                <ShieldCheck size={16} />
                Verified Listing
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}