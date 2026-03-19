"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <div className="bg-vikingBlack min-h-screen">{children}</div>;
  }

  return (
    // ... (අනිත් Sidebar කෝඩ් එක ඒ විදිහටමයි)
    <div className="fixed inset-0 z-50 bg-gray-50 flex h-screen overflow-hidden text-black font-sans">
      {/* Sidebar එක */}
      <div className="w-64 bg-black text-white flex flex-col shadow-2xl z-20">
        {/* ... (ඔයාගේ දැනට තියෙන Sidebar කෝඩ් එක) */}
      </div>

      {/* වම් පැත්තේ මෙනුව (Sidebar) */}
      <div className="w-64 bg-black text-white flex flex-col shadow-2xl z-20">
        <div className="p-6 text-xl font-black tracking-widest uppercase border-b border-gray-800">
          Vikings <span className="text-red-600">Admin</span>
        </div>

        <nav className="flex-1 p-4 space-y-2 font-bold uppercase text-sm tracking-wider">
          <Link
            href="/admin"
            className={`block p-4 rounded-sm transition ${pathname === '/admin' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-900 hover:text-white'}`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className={`block p-4 rounded-sm transition ${pathname === '/admin/products' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-900 hover:text-white'}`}
          >
            Manage Products
          </Link>
          <Link
            href="/admin/orders"
            className={`block p-4 rounded-sm transition ${pathname === '/admin/orders' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-900 hover:text-white'}`}
          >
            Orders <span className="ml-2 bg-red-600 text-white px-2 py-0.5 rounded-full text-[10px]">3 New</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Link href="/" className="block p-4 text-gray-400 hover:text-white transition font-bold uppercase text-xs tracking-widest text-center border border-gray-700 hover:bg-gray-900">
            Exit Admin Panel
          </Link>
        </div>
      </div>

      {/* දකුණු පැත්තේ ප්‍රධාන කොටස (Main Content) */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-8 md:p-12">
        {children}
      </div>

    </div>
  );
}