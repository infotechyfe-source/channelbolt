import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialCard from "../components/SocialCard";
import { allListings } from "../data/listings";

const SimilarAccounts = () => {
    const navigate = useNavigate();

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight">
                        Similar Premium Accounts
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Handpicked accounts matching your interests
                    </p>
                </div>

                <button
                    onClick={() => navigate("/marketplace")}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105 cursor-pointer"
                >
                    Browse All <ArrowRight size={20} />
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allListings.slice(0, 3).map((account) => (
                    <SocialCard
                        key={account.id}
                        id={account.id}
                        handle={account.handle}
                        platform={account.platform}
                        niche={account.niche}
                        followers={account.followers}
                        engagement={account.engagement}
                        revenue={account.revenue}
                        price={account.price}
                        coverImage={account.coverImage}
                        avatar={account.avatar}
                        includeEmail={account.includeEmail}

                    />
                ))}
            </div>
        </section>
    );
};

export default SimilarAccounts;