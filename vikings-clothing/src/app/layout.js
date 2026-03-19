"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/"; // Home page එකේදී විතරක් පෙන්නන්න ඕන නම්
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden">

        {/* Splash Screen එක පේනවා (isLoading true නම්) */}
        {isLoading && <SplashScreen finishLoading={() => setIsLoading(false)} />}

        {/* මම මෙතන වෙනසක් කළා - Splash screen එක තියෙද්දීම යටින් Home Page එක load වෙන්න හැදුවා */}
        <div className={`flex flex-col min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />

          {/* Main Content එක හෙමින් පෑදීගෙන එන්න අලුත් Animation එකක් දැම්මා */}
          <main className="flex-grow animate-[fadeIn_1.5s_ease-in-out]">
            {children}
          </main>

          <Footer />
        </div>

      </body>
    </html>
  );
}