"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // තත්පර 5කට පස්සේ Loading එක ඉවර කරන්න (ඔයා ඉල්ලපු වෙලාව)
    const timeout = setTimeout(() => finishLoading(), 5500);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* මැද තියෙන Logo එක සහ නම */}
      <div className="text-center animate-bounce">
        <div className="mb-6 inline-block p-2 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)]">
          <Image 
            src="/logo.jpg" 
            alt="Vikings Logo" 
            width={120} 
            height={120} 
            className="rounded-full object-contain"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[0.3em] text-white mb-4">
          Vikings
        </h1>
        
        {/* යටින් තියෙන Description එක */}
        <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.5em] animate-pulse">
          Unleash Your Inner Warrior
        </p>
      </div>

      {/* Loading Bar එකක් (පල්ලෙහායින් පොඩියට පේන්න) */}
      <div className="absolute bottom-20 w-48 h-1 bg-gray-900 rounded-full overflow-hidden">
        <div className="h-full bg-red-600 animate-loading-bar"></div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 5s linear forwards;
        }
      `}</style>
    </div>
  );
}