"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  // ඇණවුම සම්පූර්ණ කළාද නැද්ද කියලා මතක තියාගන්න State එක
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Form එක Submit කරද්දී වෙන දේ
  const handleCheckout = (e) => {
    e.preventDefault(); // පිටුව Refresh වෙන එක නවත්වනවා
    setIsOrderPlaced(true); // Success Popup එක පෙන්වනවා
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* වම් පැත්ත: පාරිභෝගික විස්තර */}
        <div className="bg-white p-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-8 border-b pb-4">Shipping Information</h2>
          
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase mb-2">First Name</label>
                <input required type="text" className="w-full border border-gray-300 p-3 focus:border-black outline-none transition" placeholder="First Name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-2">Last Name</label>
                <input required type="text" className="w-full border border-gray-300 p-3 focus:border-black outline-none transition" placeholder="Last Name" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-2">Address</label>
              <input required type="text" className="w-full border border-gray-300 p-3 focus:border-black outline-none transition mb-3" placeholder="Street Address" />
              <input required type="text" className="w-full border border-gray-300 p-3 focus:border-black outline-none transition" placeholder="City" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-2">Phone Number</label>
              <input required type="tel" className="w-full border border-gray-300 p-3 focus:border-black outline-none transition" placeholder="07X XXX XXXX" />
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-black uppercase tracking-widest mb-4">Payment Method</h3>
              <div className="border-2 border-black p-4 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-black rounded-full border-2 border-white ring-2 ring-black"></div>
                  <span className="font-bold text-sm uppercase">Cash on Delivery (COD)</span>
                </div>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <p className="text-[10px] text-gray-500 mt-2 font-medium uppercase tracking-widest">Pay in cash when your package is delivered.</p>
            </div>
          </form>
        </div>

        {/* දකුණු පැත්ත: Order Summary */}
        <div className="bg-white p-8 border border-gray-200 shadow-sm h-fit sticky top-28">
          <h2 className="text-xl font-black uppercase tracking-widest mb-6 border-b pb-4">Order Summary</h2>
          
          <div className="space-y-4 mb-6 text-sm font-medium">
            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">Items Total</span>
              <span className="font-black text-black">Rs. 14,900</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">Delivery Charge</span>
              <span className="text-green-600 font-black uppercase tracking-widest">Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between items-center mt-4">
              <span className="text-lg font-black uppercase tracking-widest">Total</span>
              <span className="text-3xl font-black text-black tracking-tighter">Rs. 14,900</span>
            </div>
          </div>

          {/* form එක අයිති වම් පැත්තට වුණත්, මේ බොත්තමෙන් ඒ form එක submit කරන්න පුළුවන් (form="checkout-form" මගින්) */}
          <button 
            type="submit" 
            form="checkout-form"
            className="w-full bg-black hover:bg-vikingRed text-white font-black uppercase tracking-[0.3em] py-5 text-sm transition-all duration-300 shadow-xl active:scale-95"
          >
            Complete Order
          </button>
          
          <Link href="/shop" className="block text-center mt-6 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition">
            ← Return to Shop
          </Link>
        </div>

      </div>

      {/* --- SUCCESS POPUP MODAL (ඇණවුම සාර්ථක වූ විට පෙන්වන කොටස) --- */}
      {isOrderPlaced && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="bg-white max-w-md w-full p-8 text-center shadow-2xl transform transition-all animate-fade-in-up">
            
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-black">Order Confirmed!</h2>
            <p className="text-gray-500 font-medium mb-8">
              Thank you for shopping with Vikings. We will contact you shortly to confirm the delivery.
            </p>
            
            <div className="space-y-4">
              <Link href="/shop" className="block w-full bg-black hover:bg-gray-800 text-white font-bold uppercase tracking-widest py-4 transition">
                Continue Shopping
              </Link>
              <Link href="/" className="block w-full bg-white border-2 border-black text-black hover:bg-gray-100 font-bold uppercase tracking-widest py-4 transition">
                Back to Home
              </Link>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}