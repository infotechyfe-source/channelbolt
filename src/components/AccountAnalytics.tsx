import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import { Users2, Globe2, TrendingUp, Heart } from "lucide-react";

type Props = {
    followerData: any[];
    likesData: any[];
};

export default function AccountAnalytics({
    followerData,
    likesData,
}: Props) {
    const demographics = [
        { label: "Female", val: "64%", width: "64%" },
        { label: "Male", val: "36%", width: "36%" },
        { label: "Age 25–34", val: "Primary Audience", width: "70%" },
    ];

    const countries = [
        { flag: "🇺🇸", name: "United States", percent: "42%" },
        { flag: "🇬🇧", name: "United Kingdom", percent: "18%" },
        { flag: "🇨🇦", name: "Canada", percent: "12%" },
        { flag: "🇦🇺", name: "Australia", percent: "8%" },
    ];

    return (
        <>
            {/* ================= DEMOGRAPHICS + COUNTRIES ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 mb-12">

                {/* DEMOGRAPHICS */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6 font-medium text-slate-700">
                        <Users2 size={18} />
                        <span>Demographics</span>
                    </div>

                    <div className="space-y-5">
                        {demographics.map((item, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between text-sm font-semibold mb-2">
                                    <span>{item.label}</span>
                                    <span>{item.val}</span>
                                </div>

                                <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                        style={{ width: item.width }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TOP COUNTRIES */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <Globe2 size={18} className="text-gray-500" />
                        <span className="font-medium">Top Countries</span>
                    </div>

                    <div className="space-y-4">
                        {countries.map((country, idx) => (
                            <div key={idx} className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <span>{country.flag}</span>
                                    <span className="text-gray-600 text-sm font-medium">
                                        {country.name}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-20 h-1.5 bg-gray-100 rounded-full hidden sm:block">
                                        <div
                                            className="h-full bg-gray-300 rounded-full"
                                            style={{ width: country.percent }}
                                        />
                                    </div>
                                    <span className="text-sm font-semibold">
                                        {country.percent}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= ANALYTICS ================= */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">
                    Analytics Overview
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* FOLLOWER GROWTH */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <TrendingUp className="text-white w-4 h-4" />
                            </div>
                            <span className="font-semibold">Follower Growth</span>
                        </div>

                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={followerData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="followers"
                                        stroke="#3b82f6"
                                        fill="#3b82f6"
                                        fillOpacity={0.1}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* LIKES */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-rose-100 p-2 rounded-lg">
                                <Heart className="text-rose-600 w-4 h-4" />
                            </div>
                            <span className="font-semibold">Likes</span>
                        </div>

                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={likesData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar
                                        dataKey="likes"
                                        fill="#f43f5e"
                                        radius={[8, 8, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}


// {/* ================= ANALYTICS SECTION ================= */ }
// <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-8">
//     <div>
//         <h3 className="text-2xl font-bold text-gray-900">
//             Analytics Overview
//         </h3>
//         <p className="text-gray-500 text-sm mt-1">
//             Performance trends over the last 6 months
//         </p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

//         <div className="bg-white p-8 rounded-4xl shadow-sm border border-gray-100 ">
//             {/* Header Section */}
//             <div className="flex justify-between items-start mb-8">
//                 <div className="flex items-center gap-4">
//                     <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-200">
//                         <TrendingUp className="text-white w-6 h-6" />
//                     </div>
//                     <div>
//                         <h3 className="text-2xl font-bold text-gray-800">Follower Growth</h3>
//                         <p className="text-gray-500 text-sm">7-month growth trajectory with target comparison</p>
//                     </div>
//                 </div>
//                 <div className="text-right">
//                     <div className="text-3xl font-bold text-gray-900">+51.9%</div>
//                     <div className="text-green-500 font-semibold text-sm">Growth Rate</div>
//                 </div>
//             </div>

//             {/* Chart Section */}
//             <div className="h-64 sm:h-72 md:h-80 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={followerData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
//                         <defs>
//                             <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
//                                 <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
//                                 <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
//                             </linearGradient>
//                         </defs>

//                         <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />

//                         <XAxis
//                             dataKey="month"
//                             axisLine={false}
//                             tickLine={false}
//                             tick={{ fill: '#9ca3af', fontSize: 14, fontWeight: 600 }}
//                             dy={15}
//                         />

//                         <YAxis
//                             axisLine={false}
//                             tickLine={false}
//                             tick={{ fill: '#9ca3af', fontSize: 14, fontWeight: 600 }}
//                             tickFormatter={(value) => `${value / 1000}K`}
//                             domain={[0, 600000]}
//                             ticks={[0, 150000, 300000, 450000, 600000]}
//                         />

//                         <Tooltip
//                             contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
//                         />

//                         {/* Target Line (Dashed) */}
//                         <Area
//                             type="monotone"
//                             dataKey="target"
//                             stroke="#e5e7eb"
//                             strokeWidth={2}
//                             strokeDasharray="5 5"
//                             fill="transparent"
//                             dot={false}
//                             activeDot={false}
//                         />

//                         {/* Main Growth Line */}
//                         <Area
//                             type="monotone"
//                             dataKey="followers"
//                             stroke="#3b82f6"
//                             strokeWidth={4}
//                             fillOpacity={1}
//                             fill="url(#colorFollowers)"
//                             dot={{ r: 6, fill: '#3b82f6', strokeWidth: 3, stroke: '#fff' }}
//                             activeDot={{ r: 8, strokeWidth: 0 }}
//                         />
//                     </AreaChart>
//                 </ResponsiveContainer>
//             </div>

//             {/* Legend */}
//             <div className="flex justify-center gap-8 mt-6">
//                 <div className="flex items-center gap-2">
//                     <span className="w-3 h-3 rounded-full bg-blue-500"></span>
//                     <span className="text-sm font-medium text-gray-600">Actual Growth</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <span className="w-4 h-0.5 bg-gray-300 border-t-2 border-dashed border-gray-400"></span>
//                     <span className="text-sm font-medium text-gray-600">Target</span>
//                 </div>
//             </div>
//         </div>

//         {/* Likes Chart */}
//         <div className="bg-white p-8 rounded-4xl shadow-sm border border-gray-100 ">
//             {/* Header Section - Matching the Growth Chart Style */}
//             <div className="flex justify-between items-start mb-8">
//                 <div className="flex items-center gap-4">
//                     <div className="bg-rose-100 p-3 rounded-2xl shadow-lg shadow-rose-100">
//                         <Heart className="text-rose-600 fill-current w-6 h-6" />
//                     </div>
//                     <div>
//                         <h3 className="text-2xl font-bold text-gray-800">Likes</h3>
//                         <p className="text-gray-500 text-sm">Engagement performance per month</p>
//                     </div>
//                 </div>
//                 <div className="text-right">
//                     <div className="text-3xl font-bold text-gray-900">130.4K</div>
//                     <div className="text-rose-500 font-semibold text-sm">Total Engagement</div>
//                 </div>
//             </div>

//             {/* Chart Section */}
//             <div className="h-80 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={likesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barSize={40}>
//                         <defs>
//                             <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
//                                 <stop offset="0%" stopColor="#f43f5e" stopOpacity={1} />
//                                 <stop offset="100%" stopColor="#fb7185" stopOpacity={0.8} />
//                             </linearGradient>
//                         </defs>

//                         <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />

//                         <XAxis
//                             dataKey="month"
//                             axisLine={false}
//                             tickLine={false}
//                             tick={{ fill: '#9ca3af', fontSize: 14, fontWeight: 600 }}
//                             dy={15}
//                         />

//                         <YAxis
//                             axisLine={false}
//                             tickLine={false}
//                             tick={{ fill: '#9ca3af', fontSize: 14, fontWeight: 600 }}
//                             tickFormatter={(value) => `${value / 1000}K`}
//                         />

//                         <Tooltip
//                             cursor={{ fill: '#f8fafc' }}
//                             contentStyle={{
//                                 borderRadius: '12px',
//                                 border: 'none',
//                                 boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
//                                 padding: '10px'
//                             }}
//                             itemStyle={{ color: '#e11d48', fontWeight: 'bold' }}
//                         />

//                         <Bar
//                             dataKey="likes"
//                             fill="url(#colorLikes)"
//                             radius={[10, 10, 4, 4]} // More rounded top for a modern feel
//                             animationBegin={200}
//                         />
//                     </BarChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>

//     </div>
// </div>