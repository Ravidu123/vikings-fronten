"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // දැනට අපි නිකන්ම Dashboard එකට යන්න හදමු. 
    // පස්සේ Backend එක හදද්දී ඇත්තම Email/Password චෙක් කරන විදිහ හදමු.
    if(email === "admin@vikings.lk" && password === "admin123") {
      router.push('/admin');
    } else {
      alert("Invalid Credentials! Try admin@vikings.lk / admin123");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-vikingBlack flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-10 shadow-2xl rounded-sm">
        
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="bg-vikingBlack inline-block p-3 rounded-full mb-4">
             <Image src="/logo.jpg" alt="Logo" width={50} height={50} className="rounded-full" />
          </div>
          <h1 className="text-2xl font-black uppercase tracking-[0.2em] text-black">Admin Access</h1>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-2"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase mb-2 text-gray-400 tracking-widest">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-gray-200 p-3 focus:border-black outline-none transition font-bold" 
              placeholder="admin@vikings.lk"
              required 
            />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase mb-2 text-gray-400 tracking-widest">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-gray-200 p-3 focus:border-black outline-none transition font-bold" 
              placeholder="••••••••"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-black hover:bg-red-600 text-white font-black uppercase tracking-[0.2em] py-5 mt-4 transition duration-300 shadow-lg active:scale-95"
          >
            Login to Dashboard
          </button>
        </form>

        <p className="text-center text-[10px] text-gray-400 mt-10 uppercase font-black tracking-widest">
          Authorized Personnel Only
        </p>
      </div>
    </div>
  );
}