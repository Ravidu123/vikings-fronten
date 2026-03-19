import Link from 'next/link';

export default function AddProductPage() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      
      {/* පිටුවේ මාතෘකාව */}
      <div className="mb-10">
        <Link href="/admin/products" className="text-sm font-bold text-gray-500 hover:text-red-600 uppercase tracking-wider flex items-center gap-2 mb-4 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Products
        </Link>
        <h1 className="text-3xl font-black uppercase tracking-widest text-black">Add New Product</h1>
      </div>

      {/* Form එක */}
      <div className="bg-white p-8 md:p-10 border border-gray-200 shadow-sm rounded-sm">
        <form className="space-y-8">
          
          {/* නම සහ මිල (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Product Name</label>
              <input type="text" className="w-full border-b-2 border-gray-200 p-3 focus:border-black outline-none transition bg-transparent font-medium" placeholder="e.g. Oversized Black Tee" required />
            </div>
            <div>
              <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Price (Rs.)</label>
              <input type="number" className="w-full border-b-2 border-gray-200 p-3 focus:border-black outline-none transition bg-transparent font-medium" placeholder="e.g. 4500" required />
            </div>
          </div>

          {/* Category සහ Stock (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Category</label>
              <select className="w-full border-b-2 border-gray-200 p-3 focus:border-black outline-none transition bg-transparent font-medium text-gray-700">
                <option>T-Shirts</option>
                <option>Hoodies</option>
                <option>Accessories</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Initial Stock</label>
              <input type="number" className="w-full border-b-2 border-gray-200 p-3 focus:border-black outline-none transition bg-transparent font-medium" placeholder="e.g. 50" required />
            </div>
          </div>

          {/* විස්තරය */}
          <div>
            <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Product Description</label>
            <textarea rows="4" className="w-full border-2 border-gray-200 p-4 focus:border-black outline-none transition bg-transparent resize-none mt-2 font-medium" placeholder="Describe the material, fit, and design..."></textarea>
          </div>

          {/* පින්තූර අප්ලෝඩ් කරන තැන */}
          <div>
            <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Product Images</label>
            <div className="mt-2 flex justify-center px-6 pt-10 pb-12 border-2 border-gray-300 border-dashed hover:border-black transition cursor-pointer group">
              <div className="space-y-2 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-black transition" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600 font-medium justify-center">
                  <span className="relative rounded-md font-bold text-red-600 hover:text-red-500 uppercase tracking-wider">
                    Upload a file
                  </span>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 uppercase font-bold">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>

          {/* Save බොත්තම */}
          <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
            <Link href="/admin/products" className="px-8 py-4 border-2 border-black text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition text-sm">
              Cancel
            </Link>
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 px-10 transition shadow-lg active:scale-95 text-sm">
              Save Product
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}