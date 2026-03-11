import { ShieldCheck, Lock, BadgeCheck, Award } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <ShieldCheck size={20} className="text-blue-400" />,
      title: "Escrow Protection",
      description: "Your funds are held securely until the transfer is complete.",
      stat: "100%",
      statLabel: "Secured",
    },
    {
      icon: <Lock size={20} className="text-blue-400" />,
      title: "Bank-Level Security",
      description: "256-bit SSL encryption for all data and transactions.",
      stat: "24/7",
      statLabel: "Monitoring",
    },
    {
      icon: <BadgeCheck size={20} className="text-blue-400" />,
      title: "Verified Sellers",
      description: "Every seller goes through identity verification.",
      stat: "99%",
      statLabel: "Success Rate",
    },
    {
      icon: <Award size={20} className="text-blue-400" />,
      title: "Quality Guarantee",
      description: "30-day money-back guarantee on select purchases.",
      stat: "$24M+",
      statLabel: "Traded",
    },
  ];

  return (
    <section className="bg-[#0B0F19] text-white py-16 px-4 sm:px-6 lg:px-16 font-sans relative overflow-hidden">
      {/* Background decorative light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-blue-900/50 text-blue-300 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block border border-blue-800">
            Privacy & Protection
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Your Security Is Our Priority
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Industry-leading security measures to protect every transaction and piece of data.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {securityFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-[#131927] p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-blue-900/50 transition duration-300 flex flex-col justify-between min-h-[260px] sm:min-h-[280px]"
            >
              <div>
                <div className="bg-blue-900/30 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 border border-blue-800/50">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800/50">
                <p className="text-2xl sm:text-3xl font-bold text-blue-400">{item.stat}</p>
                <p className="text-gray-500 text-[9px] sm:text-xs uppercase tracking-wider font-medium">{item.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;