"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // ෆෝන් වලදී මෙනු එක ඕපන් කරන්න අලුත් State එකක්
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-vikingBlack text-vikingWhite py-4 px-4 md:px-12 sticky top-0 z-40 border-b border-gray-800">
        <div className="w-full flex justify-between items-center">
          
          {/* 1. Logo සහ නම */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="bg-white rounded-full p-1 transition-transform group-hover:scale-105">
              <Image 
                src="/logo.jpg" 
                alt="Vikings Logo" 
                width={35} 
                height={35} 
                className="object-contain rounded-full md:w-[40px] md:h-[40px]"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-widest uppercase mt-1 group-hover:text-vikingRed transition duration-300">
              Vikings
            </span>
          </Link>

          {/* 2. ප්‍රධාන මෙනුව (Desktop වලට විතරයි) */}
          <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-wide">
            <Link href="/" className="hover:text-vikingRed transition duration-300">Home</Link>
            <Link href="/shop" className="hover:text-vikingRed transition duration-300">Shop</Link>
            <Link href="/about" className="hover:text-vikingRed transition duration-300">About Us</Link>
            <Link href="/contact" className="hover:text-vikingRed transition duration-300">Contact</Link>
          </div>

          {/* 3. Icons සහ Mobile Menu බොත්තම */}
          <div className="flex items-center space-x-4 md:space-x-6">
            
            <div className="hidden lg:flex items-center space-x-5">
              <a href="#" className="hover:text-vikingRed transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="hover:text-vikingRed transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/></svg>
              </a>
              <a href="#" className="hover:text-vikingRed transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/></svg>
              </a>
            </div>

            <div className="hidden lg:block w-px h-6 bg-gray-600"></div>

            {/* Search - ෆෝන් වලදී අකුරු පේන්නේ නැහැ, Icon එක විතරයි */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-vikingRed transition duration-300 uppercase text-xs md:text-sm font-bold flex items-center gap-1"
            >
              <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="hidden sm:inline">Search</span>
            </button>
            
            {/* Cart - ෆෝන් වලදී අකුරු පේන්නේ නැහැ, Icon එක විතරයි */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="hover:text-vikingRed transition duration-300 uppercase flex items-center gap-1 md:gap-2 text-xs md:text-sm font-bold"
            >
              <span className="hidden sm:inline">Cart</span>
              <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span className="bg-vikingRed text-white rounded-full px-2 py-0.5 text-[10px] md:text-xs font-black">2</span>
            </button>

            {/* Hamburger Menu Icon (ෆෝන් වලට විතරයි) */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden hover:text-vikingRed transition ml-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>

          </div>

        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY (ෆෝන් මෙනු එක) --- */}
      <div className={`fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        
        {/* Close Button (X) */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-vikingRed transition p-2 transform hover:rotate-90 duration-300"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        {/* Menu Links */}
        <div className="flex flex-col space-y-8 text-center text-3xl font-black uppercase tracking-widest text-white">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-vikingRed transition">Home</Link>
          <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-vikingRed transition">Shop</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-vikingRed transition">About Us</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-vikingRed transition">Contact</Link>
        </div>

        {/* Social Icons for Mobile Menu */}
        <div className="flex space-x-6 mt-16 text-gray-400">
          <a href="#" className="hover:text-vikingRed transition"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg></a>
          <a href="#" className="hover:text-vikingRed transition"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/></svg></a>
        </div>
      </div>

      {/* --- SEARCH OVERLAY --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center transition-opacity duration-300 px-6 backdrop-blur-sm">
          <button onClick={() => setIsSearchOpen(false)} className="absolute top-8 right-8 text-gray-400 hover:text-vikingRed transition p-2 transform hover:rotate-90 duration-300">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <div className="w-full max-w-4xl">
            <input type="text" placeholder="WHAT ARE YOU LOOKING FOR?" className="w-full bg-transparent border-b-4 border-gray-700 focus:border-vikingRed text-white text-2xl md:text-5xl py-4 outline-none transition uppercase font-black tracking-widest text-center placeholder-gray-700" autoFocus />
          </div>
        </div>
      )}

      {/* Cart Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}