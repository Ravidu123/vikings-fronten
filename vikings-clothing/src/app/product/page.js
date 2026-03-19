"use client"; // බොත්තම් ක්ලික් කරන දේවල් තියෙන නිසා මේක අනිවාර්යයි

import { useState } from 'react';
import Link from 'next/link';

export default function ProductPage() {
    // පාරිභෝගිකයා තෝරන Size එක මතක තියාගන්න state එකක්
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <div className="bg-vikingWhite min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Breadcrumb (පිටුවට ආපු පාර පෙන්වීම) */}
                <div className="text-sm text-gray-500 font-medium tracking-wide mb-8 uppercase">
                    <Link href="/" className="hover:text-vikingRed">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/shop" className="hover:text-vikingRed">Shop</Link>
                    <span className="mx-2">/</span>
                    <span className="text-vikingBlack">Oversized Black Tee</span>
                </div>

                {/* ප්‍රධාන කොටස් දෙකට බෙදීම (පින්තූරය සහ විස්තර) */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

                    {/* වම් පැත්ත: T-shirt පින්තූරය */}
                    <div className="md:w-1/2 w-full flex gap-4">
                        {/* පොඩි පින්තූර (Thumbnails) */}
                        <div className="hidden md:flex flex-col gap-4 w-20">
                            <div className="bg-gray-200 aspect-[3/4] border border-gray-800 cursor-pointer hover:opacity-75 transition"></div>
                            <div className="bg-gray-200 aspect-[3/4] cursor-pointer hover:opacity-75 transition"></div>
                            <div className="bg-gray-200 aspect-[3/4] cursor-pointer hover:opacity-75 transition"></div>
                        </div>
                        {/* ලොකු පින්තූරය */}
                        <div className="flex-1 bg-gray-200 aspect-[3/4] relative flex items-center justify-center border border-gray-300">
                            <span className="text-gray-500 font-bold uppercase tracking-widest">Main Product Image</span>
                        </div>
                    </div>

                    {/* දකුණු පැත්ත: T-shirt විස්තර සහ බොත්තම් */}
                    <div className="md:w-1/2 w-full flex flex-col pt-4">
                        <h1 className="text-4xl md:text-5xl font-black text-vikingBlack uppercase tracking-tighter mb-2">
                            Oversized Black Tee
                        </h1>
                        <p className="text-2xl font-bold text-gray-700 mb-6">Rs. 4,500</p>

                        <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                            Crafted from 100% premium heavy-weight cotton. Designed for the perfect oversized fit, dropping perfectly on the shoulders. Unmatched comfort and durability.
                        </p>

                        {/* FOMO - තොග අවසන් වේගන යන බව පෙන්වීම */}
                        <div className="flex items-center gap-2 text-vikingRed font-bold uppercase tracking-wide text-sm mb-6">
                            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Hurry! Only 3 items left in stock.</span>
                        </div>

                        {/* Size Selector (සයිස් තෝරන තැන) */}
                        <div className="mb-8">
                            <div className="flex justify-between items-end mb-3">
                                <span className="font-bold text-vikingBlack uppercase tracking-widest text-sm">Select Size</span>
                                <button className="text-gray-500 underline text-sm hover:text-vikingBlack transition">Size Guide</button>
                            </div>
                            <div className="flex gap-4">
                                {['S', 'M', 'L', 'XL'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-14 h-14 flex items-center justify-center border-2 font-bold transition-all duration-300 ${selectedSize === size
                                                ? 'border-vikingBlack bg-vikingBlack text-vikingWhite scale-110'
                                                : 'border-gray-300 text-vikingBlack hover:border-vikingBlack'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            {/* සයිස් එකක් තේරුවේ නැත්නම් පෙන්වන පණිවිඩය (පසුව කෝඩ් කළ හැක) */}
                        </div>

                        {/* ප්‍රධාන බොත්තම් දෙක */}
                        <div className="flex flex-col gap-4">
                            {/* Buy It Now එක Link එකක් කළා */}
                            <Link
                                href="/checkout"
                                className="w-full bg-vikingRed hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 transition duration-300 shadow-[0_5px_15px_rgba(220,38,38,0.2)] hover:shadow-[0_8px_20px_rgba(220,38,38,0.4)] text-center inline-block"
                            >
                                Buy It Now
                            </Link>

                            <button className="w-full bg-vikingBlack hover:bg-gray-800 text-vikingWhite font-bold uppercase tracking-widest py-4 transition duration-300">
                                Add To Cart
                            </button>
                        </div>

                        {/* අමතර විශ්වාසය දිනාගන්නා කරුණු */}
                        <div className="mt-12 space-y-4 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-3 text-gray-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="font-medium">Island-wide Delivery in 2-4 Days</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                <span className="font-medium">Easy 7-Day Exchange Policy</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                <span className="font-medium">Secure Payments (COD & Bank Transfer)</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}