import { ShieldCheck } from "lucide-react";

export default function AccountHeader({ listing }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-3 sm:mt-6 relative z-10">
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">

        {/* Cover */}
        <img
          src={listing.coverImageUrl}
          alt="cover"
          className="w-full h-40 sm:h-56 md:h-72 object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-3 sm:gap-4">

              {/* Avatar */}
              <img
                src={listing.avatarUrl}
                alt="avatar"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-4 border-white shadow object-cover"
              />

              {/* Info */}
              <div className="text-white">

                {/* Username */}
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                    {listing.handle}
                  </h2>

                  {/* Mobile Verified */}
                  {listing.verified && (
                    <span className="flex md:hidden items-center justify-center bg-blue-500 text-white rounded-full w-5 h-5">
                      <ShieldCheck size={12} />
                    </span>
                  )}
                </div>

                {/* Platform + Niche */}
                <div className="flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur font-semibold uppercase">
                    {listing.platform}
                  </span>

                </div>

              </div>
            </div>

            {/* Desktop Verified */}
            {listing.verified && (
              <div className="hidden md:flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold border border-green-100">
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