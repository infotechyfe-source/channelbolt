import { useState, useEffect } from 'react';

const SocialLoader = () => {
  const [status, setStatus] = useState("Connecting...");
  const messages = ["Fetching profiles...", "Verifying handles...", "Syncing feeds...", "Almost there..."];

  // Logic to cycle through "Social" phrases
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setStatus(messages[i % messages.length]);
      i++;
    }, 1500);
    return () => clearInterval(interval);
  },);

  return (
    <div className="flex flex-col items-center justify-center py-24 min-h-[300px]">
      <div className="relative mb-10">
        {/* The "Glow" behind the icons */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 blur-2xl opacity-20 animate-pulse scale-150"></div>

        {/* The Icon Container */}
        <div className="relative bg-white p-5 rounded-2xl shadow-xl border border-gray-50 flex items-center space-x-3">
          {/* Animated Dots with Social Brand Colors */}
          <div className="w-4 h-4 rounded-full bg-[#1877F2] animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-4 h-4 rounded-full bg-[#E4405F] animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-4 h-4 rounded-full bg-[#FF0000] animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 tracking-tight transition-all duration-500">
          {status}
        </h3>
        <p className="text-sm text-gray-400 mt-1 italic">Scanning social networks</p>
      </div>
    </div>
  );
};

export default SocialLoader;