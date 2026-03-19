"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen({ finishLoading }) {
    // ඉවර වෙන්න ලෑස්තිද කියලා බලන්න අලුත් State එකක්
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // 1. තත්පර 4.5කට පස්සේ හෙමින් Exit වෙන්න පටන් ගන්න (Fade Out)
        const exitTimeout = setTimeout(() => setIsExiting(true), 4500);

        // 2. තත්පර 5.5කට පස්සේ සම්පූර්ණයෙන්ම Component එක අයින් කරන්න
        const finishTimeout = setTimeout(() => finishLoading(), 5500);

        return () => {
            clearTimeout(exitTimeout);
            clearTimeout(finishTimeout);
        };
    }, [finishLoading]);

    return (
        // className එකේ අන්තිමට තියෙන condition එක වෙනස් කළා
        <div className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black transition-all duration-1000 ${isExiting ? 'opacity-0 invisible scale-110' : 'opacity-100 visible'}`}>

            {/* ප්‍රධාන කොටස (Logo + Text) */}
            <div className="text-center">

                {/* 1. Logo එක - උඩ ඉඳන් පල්ලෙහාට එන Animation එක (0.8s පරක්කුවෙන් පටන් ගන්නවා) */}
                <div className="mb-8 inline-block p-2 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-[slideInDown_1s_ease-out_0.2s_both]">
                    <Image
                        src="/logo.jpg"
                        alt="Vikings Logo"
                        width={120}
                        height={120}
                        className="rounded-full object-contain"
                    />
                </div>

                {/* 2. "Vikings" නම - ලෝගෝ එකට පස්සේ උඩ ඉඳන් පල්ලෙහාට එනවා (1s පරක්කුවෙන්) */}
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[0.3em] text-white mb-5 animate-[slideInDown_1s_ease-out_1s_both]">
                    Vikings
                </h1>

                {/* 3. Description එක - අන්තිමට හෙමින් පෑදීගෙන එනවා (2s පරක්කුවෙන්) */}
                <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.5em] animate-[fadeIn_1s_ease-out_2s_both]">
                    Unleash Your Inner Warrior
                </p>
            </div>

            {/* යට තිබුණු Loading bar එක අයින් කළා */}
        </div>
    );
}