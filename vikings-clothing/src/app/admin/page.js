export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">
      
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black uppercase tracking-widest text-black">Overview</h1>
        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Today: {new Date().toLocaleDateString()}</p>
      </div>

      {/* සාරාංශ කොටු 3 (Stats Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm border-t-4 border-t-black">
          <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Total Sales (This Month)</h3>
          <p className="text-4xl font-black text-black">Rs. 124,500</p>
          <p className="text-green-600 text-xs font-bold mt-2 uppercase">↑ 12% from last month</p>
        </div>
        
        <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm border-t-4 border-t-red-600">
          <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Pending Orders</h3>
          <p className="text-4xl font-black text-black">14</p>
          <p className="text-red-600 text-xs font-bold mt-2 uppercase">Requires attention</p>
        </div>
        
        <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm border-t-4 border-t-gray-400">
          <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Total Products</h3>
          <p className="text-4xl font-black text-black">24</p>
          <p className="text-gray-500 text-xs font-bold mt-2 uppercase">Active in store</p>
        </div>
      </div>

      {/* අලුත්ම ඕඩර්ස් පෙන්වන වගුව (Recent Orders Table) */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-black uppercase tracking-widest text-black">Recent Orders</h2>
          <button className="text-xs font-bold uppercase tracking-wider text-red-600 hover:text-black transition">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-widest border-b border-gray-200">
                <th className="p-4 font-black">Order ID</th>
                <th className="p-4 font-black">Customer</th>
                <th className="p-4 font-black">Date</th>
                <th className="p-4 font-black">Total</th>
                <th className="p-4 font-black">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="p-4 font-black text-black">#VK-1005</td>
                <td className="p-4 font-bold text-gray-700">Ravidu Perera</td>
                <td className="p-4 text-gray-500 font-medium">Just now</td>
                <td className="p-4 font-black text-black">Rs. 14,900</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest">Pending</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="p-4 font-black text-black">#VK-1004</td>
                <td className="p-4 font-bold text-gray-700">Kasun Silva</td>
                <td className="p-4 text-gray-500 font-medium">2 hours ago</td>
                <td className="p-4 font-black text-black">Rs. 4,500</td>
                <td className="p-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest">Processing</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="p-4 font-black text-black">#VK-1003</td>
                <td className="p-4 font-bold text-gray-700">Nimali Fernando</td>
                <td className="p-4 text-gray-500 font-medium">Yesterday</td>
                <td className="p-4 font-black text-black">Rs. 9,700</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest">Dispatched</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}