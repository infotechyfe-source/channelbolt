import { ShieldCheck, Lock, BadgeCheck, Award } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <ShieldCheck size={16} className="text-blue-400" />,
      title: "Escrow Protection",
      description: "Your funds are held securely until the transfer is complete.",
      stat: "100%",
      statLabel: "Secured",
    },
    {
      icon: <Lock size={16} className="text-blue-400" />,
      title: "Bank-Level Security",
      description: "256-bit SSL encryption for all transactions.",
      stat: "24/7",
      statLabel: "Monitoring",
    },
    {
      icon: <BadgeCheck size={16} className="text-blue-400" />,
      title: "Verified Sellers",
      description: "Every seller goes through identity verification.",
      stat: "99%",
      statLabel: "Success Rate",
    },
    {
      icon: <Award size={16} className="text-blue-400" />,
      title: "Quality Guarantee",
      description: "30-day money-back guarantee on select purchases.",
      stat: "$24M+",
      statLabel: "Traded",
    },
  ];

  return (
    <section className="bg-[#0B0F19] text-white py-6 sm:py-10 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-75 sm:w-125 h-75 sm:h-125 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="bg-blue-900/40 text-blue-300 text-[9px] sm:text-xs font-medium px-2 py-1 rounded-full uppercase tracking-wider mb-2 inline-block border border-blue-800">
            Privacy & Protection
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Your Security Is Our Priority
          </h2>

          <p className="text-gray-400 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Industry-leading security measures to protect every transaction and data.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">

          {securityFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-[#131927] p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-800 hover:border-blue-900/50 transition flex flex-col justify-between min-h-42.5 sm:min-h-65"
            >

              <div>
                <div className="bg-blue-900/30 w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-6 border border-blue-800/50">
                  {item.icon}
                </div>

                <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-[10px] sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-2 sm:mt-6 pt-2 sm:pt-6 border-t border-gray-800/50">
                <p className="text-lg sm:text-3xl font-bold text-blue-400">
                  {item.stat}
                </p>

                <p className="text-gray-500 text-[8px] sm:text-xs uppercase tracking-wider font-medium">
                  {item.statLabel}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SecuritySection;