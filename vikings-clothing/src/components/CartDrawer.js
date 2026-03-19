"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CartDrawer({ isOpen, onClose }) {
  // දැන් අපි මේක State එකක් විදිහට හදාගන්නවා, එතකොට වෙනස්කම් කරන්න පුළුවන්.
  // අලුතින් 'selected: true' කියන එකතු කළා, ඒකෙන් තමයි Tick කරලද නැද්ද බලන්නේ.
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Oversized Black Tee", size: "L", price: 4500, quantity: 1, image: "T-SHIRT 1", selected: true },
    { id: 2, name: "Viking Warrior Edition", size: "M", price: 5200, quantity: 2, image: "T-SHIRT 3", selected: true }
  ]);

  // 1. ප්‍රමාණය අඩු වැඩි කරන Function එක
  const updateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          // ප්‍රමාණය 1ට වඩා අඩු වෙන්න දෙන්නේ නැහැ
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  // 2. අයිතමයක් අයින් කරන Function එක (Remove)
  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // 3. Checkbox එක Tick/Untick කරන Function එක
  const toggleSelection = (id) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Tick කරලා (selected) තියෙන ඒවායේ විතරක් මුළු මුදල හොයනවා
  const subtotal = cartItems
    .filter(item => item.selected)
    .reduce((total, item) => total + (item.price * item.quantity), 0);

  // Tick කරලා තියෙන අයිතම ගණන
  const selectedCount = cartItems.filter(item => item.selected).length;

  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ zIndex: 100 }}
        onClick={onClose}
      ></div>

      {/* Cart Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl transform transition-transform duration-500 ease-out flex flex-col`}
        style={{ 
          zIndex: 101, 
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)' 
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-black uppercase tracking-widest text-black">
            Your Cart ({cartItems.length})
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-all text-black"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-400 mt-10">
              <p className="font-bold uppercase tracking-widest">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center border-b border-gray-50 pb-6 transition-all">
                
                {/* 1. Checkbox එක (තෝරන්න) */}
                <input 
                  type="checkbox" 
                  checked={item.selected}
                  onChange={() => toggleSelection(item.id)}
                  className="w-5 h-5 accent-black cursor-pointer"
                />

                {/* 2. පින්තූරය */}
                <div className={`w-20 h-28 bg-gray-100 flex items-center justify-center font-bold text-[10px] text-gray-400 border border-gray-200 uppercase tracking-tighter transition-opacity ${!item.selected && 'opacity-50'}`}>
                  {item.image}
                </div>
                
                {/* 3. විස්තර සහ බොත්තම් */}
                <div className={`flex-1 transition-opacity ${!item.selected && 'opacity-50'}`}>
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-black uppercase text-black leading-tight pr-2">{item.name}</h3>
                    <button onClick={() => removeItem(item.id)} className="text-[10px] font-bold text-gray-400 hover:text-red-600 uppercase">Remove</button>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1 font-bold uppercase tracking-wider">Size: {item.size}</p>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-black">
                      <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-gray-100 transition text-lg">-</button>
                      <span className="px-3 text-sm font-bold w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-gray-100 transition text-lg">+</button>
                    </div>
                    <p className="font-black text-black">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Selected Total</span>
            <span className="text-2xl font-black text-black tracking-tighter">Rs. {subtotal.toLocaleString()}</span>
          </div>
          
          <div className="space-y-3">
            {/* මුකුත් තෝරලා නැත්නම් බොත්තම ඔබන්න බැරි වෙන්න හදලා තියෙන්නේ (disabled) */}
            <Link 
              href={selectedCount > 0 ? "/checkout" : "#"}
              onClick={(e) => {
                if(selectedCount === 0) e.preventDefault();
                else onClose();
              }}
              className={`block text-center w-full font-black uppercase tracking-[0.2em] py-5 text-sm transition-all shadow-lg ${
                selectedCount > 0 
                  ? 'bg-red-600 hover:bg-red-700 text-white active:scale-[0.98]' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Checkout Now ({selectedCount})
            </Link>
            
            <button 
              onClick={onClose}
              className="w-full bg-white border-2 border-black text-black font-black uppercase tracking-[0.2em] py-5 text-sm hover:bg-black hover:text-white transition-all active:scale-[0.98]"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}