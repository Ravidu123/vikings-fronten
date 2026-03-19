"use client"; // ෆිල්ටර් කරන බොත්තම් තියෙන නිසා මේක අනිවාර්යයි

import { useState } from 'react';
import Link from 'next/link';

// වෙබ් අඩවියේ තියෙන ඔක්කොම T-shirts වල විස්තර (Dummy Data)
const allProducts = [
  { id: 1, name: "Oversized Black Tee", price: "Rs. 4,500", category: "Oversized", image: "T-shirt 1" },
  { id: 2, name: "Classic White V-Neck", price: "Rs. 3,800", category: "Classics", image: "T-shirt 2" },
  { id: 3, name: "Viking Warrior Edition", price: "Rs. 5,200", category: "Limited Edition", image: "T-shirt 3" },
  { id: 4, name: "Premium Grey Crew", price: "Rs. 4,000", category: "Classics", image: "T-shirt 4" },
  { id: 5, name: "Crimson Red Oversized", price: "Rs. 4,500", category: "Oversized", image: "T-shirt 5" },
  { id: 6, name: "Valhalla Graphic Print", price: "Rs. 4,800", category: "Limited Edition", image: "T-shirt 6" },
  { id: 7, name: "Basic Black Fit", price: "Rs. 3,500", category: "Classics", image: "T-shirt 7" },
  { id: 8, name: "Navy Blue Heavyweight", price: "Rs. 4,200", category: "Oversized", image: "T-shirt 8" },
];

export default function ShopPage() {
  // පාරිභෝගිකයා තෝරලා තියෙන Category එක මතක තියාගන්න state එකක්
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Oversized', 'Classics', 'Limited Edition'];

  // තෝරපු Category එකට අදාළ T-shirts විතරක් වෙන් කරගැනීම
  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <div className="bg-vikingWhite min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* පිටුවේ මාතෘකාව */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-vikingBlack uppercase tracking-widest mb-4">
            Full Collection
          </h1>
          <div className="w-24 h-1 bg-vikingRed mx-auto"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Browse our complete range of premium T-shirts. Engineered for comfort, designed for the bold.
          </p>
        </div>

        {/* Categories (ෆිල්ටර් කරන බොත්තම්) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 uppercase tracking-wide text-sm font-bold border-2 transition-all duration-300 ${
                activeCategory === category
                  ? 'border-vikingBlack bg-vikingBlack text-vikingWhite'
                  : 'border-gray-300 text-gray-500 hover:border-vikingBlack hover:text-vikingBlack'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products පෙන්වන Grid එක */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          
          {filteredProducts.map((product) => (
            // මෙතන <Link> එකෙන් කරන්නේ, T-shirt එක ක්ලික් කළාම අපි කලින් හදපු Single Product Page එකට යන එකයි
            <Link href="/product" key={product.id} className="group cursor-pointer flex flex-col">
              
              {/* පින්තූරය තියෙන කොටස */}
              <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden mb-4 border border-gray-300">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                    {product.image}
                  </span>
                </div>

                {/* Hover කරද්දි මතු වෙන Quick Add බොත්තම */}
                <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-vikingBlack text-vikingWhite font-bold uppercase tracking-wider py-3 text-sm hover:bg-vikingRed transition duration-300">
                    View Details
                  </button>
                </div>
              </div>

              {/* T-shirt එකේ නම සහ මිල */}
              <div className="text-center">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="text-vikingBlack font-bold uppercase tracking-wide mb-1 transition duration-300 group-hover:text-vikingRed">
                  {product.name}
                </h3>
                <p className="text-gray-800 font-bold">
                  {product.price}
                </p>
              </div>
              
            </Link>
          ))}

        </div>

        {/* T-shirts කිසිවක් නැති විට පෙන්වන පණිවිඩය */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}