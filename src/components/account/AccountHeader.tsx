import { ShieldCheck } from "lucide-react";

export default function AccountHeader({ listing }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-2 sm:mt-6 relative z-10">
      <div className="relative rounded-3xl overflow-hidden shadow-xl group">

        {/* Cover */}
        <img
          src={listing.coverImageUrl}
          alt="cover"
          className="w-full h-56 sm:h-72 md:h-80 lg:h-[340px] object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">

          {/* Left */}
          <div className="flex items-center gap-5">
            <img
              src={listing.avatarUrl}
              alt="avatar"
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border-4 border-white shadow-lg object-cover"
            />

            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                {listing.handle}
              </h2>

              <div className="flex items-center gap-3 mt-2">
                <span className="px-4 py-1 text-xs rounded-full bg-white/20 backdrop-blur font-semibold uppercase">
                  {listing.platform}
                </span>

                <span className="text-sm opacity-80">
                  {listing.niche}
                </span>
              </div>
            </div>
          </div>

          {/* Verified */}
          {listing.verified && (
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold border border-green-100">
              <ShieldCheck size={16} />
              Verified Listing
            </div>
          )}

        </div>
      </div>
    </div>
  );
}