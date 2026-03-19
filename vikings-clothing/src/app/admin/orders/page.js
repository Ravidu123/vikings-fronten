import Link from 'next/link';

export default function OrdersPage() {
  // දැනට බලාගන්න අපි හදපු Dummy Orders ටිකක්
  const orders = [
    { id: "VK-1005", customer: "Ravidu Perera", date: "Today, 10:30 AM", total: "Rs. 14,900", status: "Pending", items: 3 },
    { id: "VK-1004", customer: "Kasun Silva", date: "Today, 08:15 AM", total: "Rs. 4,500", status: "Processing", items: 1 },
    { id: "VK-1003", customer: "Nimali Fernando", date: "Yesterday", total: "Rs. 9,700", status: "Dispatched", items: 2 },
    { id: "VK-1002", customer: "Saman Kumara", date: "16 Mar 2026", total: "Rs. 5,200", status: "Delivered", items: 1 },
    { id: "VK-1001", customer: "Amila Perera", date: "15 Mar 2026", total: "Rs. 3,800", status: "Cancelled", items: 1 }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">
      
      {/* පිටුවේ මාතෘකාව */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-widest text-black mb-1">Orders</h1>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Manage customer orders and tracking</p>
        </div>
        <div className="text-sm font-bold bg-black text-white px-4 py-2 uppercase tracking-widest rounded-sm shadow-md">
          Total Orders: 124
        </div>
      </div>

      {/* Filter සහ Search කොටස */}
      <div className="bg-white p-4 border border-gray-200 shadow-sm rounded-sm mb-6 flex flex-col sm:flex-row justify-between gap-4">
        <input 
          type="text" 
          placeholder="Search by Order ID or Customer..." 
          className="border border-gray-300 px-4 py-2 w-full sm:w-1/3 outline-none focus:border-black text-sm font-medium"
        />
        <select className="border border-gray-300 px-4 py-2 outline-none focus:border-black text-sm font-bold text-gray-600 uppercase">
          <option>All Orders</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Dispatched</option>
          <option>Delivered</option>
        </select>
      </div>

      {/* Orders පෙන්නන වගුව (Table) */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-widest border-b border-gray-200">
                <th className="p-4 font-black">Order ID</th>
                <th className="p-4 font-black">Customer</th>
                <th className="p-4 font-black">Date</th>
                <th className="p-4 font-black">Items</th>
                <th className="p-4 font-black">Total</th>
                <th className="p-4 font-black">Status</th>
                <th className="p-4 font-black text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition group">
                  
                  {/* Order ID */}
                  <td className="p-4 font-black text-black">{order.id}</td>
                  
                  {/* Customer */}
                  <td className="p-4 font-bold text-gray-700">{order.customer}</td>
                  
                  {/* Date */}
                  <td className="p-4 text-gray-500 font-medium">{order.date}</td>
                  
                  {/* Items Count */}
                  <td className="p-4 text-gray-500 font-bold">{order.items} items</td>

                  {/* Total */}
                  <td className="p-4 font-black text-black">{order.total}</td>
                  
                  {/* Status එක (පාට වෙනස් වෙනවා) */}
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest ${
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Dispatched' ? 'bg-purple-100 text-purple-800' :
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  
                  {/* View Details බොත්තම */}
                  <td className="p-4 text-right">
                    <button className="text-xs font-bold uppercase tracking-wider text-black hover:text-red-600 hover:underline transition">View Details</button>
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