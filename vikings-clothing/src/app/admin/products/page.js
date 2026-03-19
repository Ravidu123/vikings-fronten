import Link from 'next/link';

export default function ManageProducts() {
  // දැනට බලාගන්න අපි හදපු Dummy Data ටිකක්
  const products = [
    { id: 1, name: "Oversized Black Tee", price: "Rs. 4,500", stock: 45, status: "Active" },
    { id: 2, name: "Classic White V-Neck", price: "Rs. 3,800", stock: 12, status: "Low Stock" },
    { id: 3, name: "Viking Warrior Edition", price: "Rs. 5,200", stock: 0, status: "Out of Stock" },
    { id: 4, name: "Premium Grey Crew", price: "Rs. 4,000", stock: 120, status: "Active" }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">
      
      {/* පිටුවේ මාතෘකාව සහ Add බොත්තම */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-widest text-black mb-1">Products</h1>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Manage your store inventory</p>
        </div>
        <Link 
          href="/admin/products/new" 
          className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-3 px-6 text-sm transition-all shadow-lg active:scale-95 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Add Product
        </Link>
      </div>

      {/* Filter සහ Search කොටස */}
      <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-sm mb-6 flex flex-col sm:flex-row justify-between gap-4">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="border border-gray-300 px-4 py-2 w-full sm:w-1/3 outline-none focus:border-black text-sm font-medium"
        />
        <select className="border border-gray-300 px-4 py-2 outline-none focus:border-black text-sm font-bold text-gray-600 uppercase">
          <option>All Status</option>
          <option>Active</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>

      {/* Products පෙන්නන වගුව (Table) */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-widest border-b border-gray-200">
                <th className="p-4 font-black w-16">Image</th>
                <th className="p-4 font-black">Product Name</th>
                <th className="p-4 font-black">Price</th>
                <th className="p-4 font-black">Stock</th>
                <th className="p-4 font-black">Status</th>
                <th className="p-4 font-black text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition group">
                  
                  {/* පින්තූරය */}
                  <td className="p-4">
                    <div className="w-12 h-16 bg-gray-200 border border-gray-300 flex items-center justify-center text-[8px] font-bold text-gray-400 uppercase">
                      Img
                    </div>
                  </td>
                  
                  {/* නම */}
                  <td className="p-4 font-black text-black">{product.name}</td>
                  
                  {/* මිල */}
                  <td className="p-4 font-bold text-gray-600">{product.price}</td>
                  
                  {/* ස්ටොක් ප්‍රමාණය */}
                  <td className="p-4 font-black text-black">{product.stock}</td>
                  
                  {/* Status එක (පාට වෙනස් වෙනවා) */}
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest ${
                      product.status === 'Active' ? 'bg-green-100 text-green-800' :
                      product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  
                  {/* Edit/Delete බොත්තම් */}
                  <td className="p-4 text-right space-x-3">
                    <button className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition">Edit</button>
                    <button className="text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-800 transition">Delete</button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}