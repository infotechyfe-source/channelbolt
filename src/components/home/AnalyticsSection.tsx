import { Users, Activity, LockKeyhole, ThumbsUp, ShieldQuestion, CheckSquareIcon, CheckCheck } from 'lucide-react';

const AnalyticsSection = () => {
   return (
      <section className="bg-[#0B0F19] text-white py-8 sm:py-12 px-4 md:px-6 lg:px-8 font-sans border-t border-gray-900">
         <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
               {/* Left Column: Analytics & Progress Bars (Span 7) */}
               <div className="lg:col-span-7 bg-[#131927] p-8 rounded-xl border border-gray-800">
                  <h3 className="text-2xl font-bold mb-2">Real-Time Analytics & Transparency</h3>
                  <p className="text-gray-400 text-sm mb-8">Track every aspect of platform performance with our comprehensive dashboard.</p>

                  {/* Small Stats Row */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                     <div className="bg-[#0B0F19] p-4 rounded-xl border border-gray-800 flex-1 flex items-center gap-4">
                        <div className="bg-blue-900/30 p-3 rounded-lg text-blue-400"><Users size={20} /></div>
                        <div>
                           <p className="text-gray-400 text-xs">Active Users</p>
                           <p className="text-2xl font-bold">12.3K</p>
                           <p className="text-green-400 text-xs">↑ 12.5% this month</p>
                        </div>
                     </div>
                     <div className="bg-[#0B0F19] p-4 rounded-xl border border-gray-800 flex-1 flex items-center gap-4">
                        <div className="bg-green-900/30 p-3 rounded-lg text-green-400"><Activity size={20} /></div>
                        <div>
                           <p className="text-gray-400 text-xs">Total Volume</p>
                           <p className="text-2xl font-bold">8,234</p>
                           <p className="text-green-400 text-xs">↑ 4.2% this month</p>
                        </div>
                     </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-6">
                     <div>
                        <div className="flex justify-between text-sm mb-2">
                           <span className="font-medium">User Satisfaction</span>
                           <span className="text-blue-400 font-bold">98%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 w-[98%] rounded-full"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-sm mb-2">
                           <span className="font-medium">Safe Transactions</span>
                           <span className="text-blue-400 font-bold">99.9%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 w-[99.9%] rounded-full"></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-sm mb-2">
                           <span className="font-medium">Platform Uptime</span>
                           <span className="text-green-400 font-bold">100%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                           <div className="h-full bg-green-500 w-full rounded-full"></div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Column: Trusted & Certified (Span 5) */}
               <div className="lg:col-span-5 flex flex-col gap-6">
                  {/* Certification Grid */}
                  <div className="bg-[#131927] p-8 rounded-xl border border-gray-800">
                     <h3 className="font-bold mb-6">Trusted & Certified</h3>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#0B0F19] p-4 rounded-xl border border-gray-800 text-center flex flex-col items-center justify-center gap-3 hover:border-blue-900 transition">
                           <CheckSquareIcon size={28} className="text-blue-400" />
                           <p className="text-sm font-medium">Vetted Sellers</p>
                        </div>
                        <div className="bg-[#0B0F19] p-4 rounded-xl border border-gray-800 text-center flex flex-col items-center justify-center gap-3 hover:border-blue-900 transition">
                           <LockKeyhole size={28} className="text-blue-400" />
                           <p className="text-sm font-medium">SSL Secured</p>
                        </div>
                        <div className="bg-[#0B0F19] p-4 rounded-xl border border-gray-800 text-center flex flex-col items-center justify-center gap-3 hover:border-blue-900 transition">
                           <ThumbsUp size={28} className="text-blue-400" />
                           <p className="text-sm font-medium">Trusted Platform</p>
                        </div>
                        <div className="bg-[#0B0F19] p-4 rounded-xl border border-gray-800 text-center flex flex-col items-center justify-center gap-3 hover:border-blue-900 transition">
                           <ShieldQuestion size={28} className="text-blue-400" />
                           <p className="text-sm font-medium">Customer Check</p>
                        </div>
                     </div>
                  </div>

                  {/* Bottom Blue Guarantee Banner */}
                  <div className="bg-linear-to-r from-blue-600 to-blue-500 p-6 rounded-2xl flex items-center gap-4">
                     <div className="bg-white/20 p-3 rounded-full text-white">
                        <CheckCheck size={24} />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg">100% Satisfaction Guarantee</h4>
                        <p className="text-blue-100 text-sm leading-tight">If you're not completely satisfied after your purchase, we'll make it right or refund your money within 30 days.</p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
};

export default AnalyticsSection;