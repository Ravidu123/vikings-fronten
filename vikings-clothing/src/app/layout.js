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
      <body className="bg-white text-black">
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            {/* Navbar එක පෙන්වන්නේ Splash screen එකෙන් පස්සේ */}
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}