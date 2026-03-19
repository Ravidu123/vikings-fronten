import Link from 'next/link';

export default function SizeGuidePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 border border-gray-200 shadow-sm">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">Size Guide</h1>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-500 font-medium">Find your perfect fit. Our t-shirts are designed with a premium oversized drop-shoulder fit.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-white uppercase text-sm tracking-widest">
                <th className="p-4 font-bold border border-black">Size</th>
                <th className="p-4 font-bold border border-black">Chest (Inches)</th>
                <th className="p-4 font-bold border border-black">Length (Inches)</th>
                <th className="p-4 font-bold border border-black">Shoulder (Inches)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="p-4 font-black text-black border-x border-gray-200">S (Small)</td>
                <td className="p-4 border-r border-gray-200">40 - 42"</td>
                <td className="p-4 border-r border-gray-200">27"</td>
                <td className="p-4 border-r border-gray-200">20"</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="p-4 font-black text-black border-x border-gray-200">M (Medium)</td>
                <td className="p-4 border-r border-gray-200">42 - 44"</td>
                <td className="p-4 border-r border-gray-200">28"</td>
                <td className="p-4 border-r border-gray-200">21"</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="p-4 font-black text-black border-x border-gray-200">L (Large)</td>
                <td className="p-4 border-r border-gray-200">44 - 46"</td>
                <td className="p-4 border-r border-gray-200">29"</td>
                <td className="p-4 border-r border-gray-200">22"</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="p-4 font-black text-black border-x border-gray-200">XL (Extra Large)</td>
                <td className="p-4 border-r border-gray-200">46 - 48"</td>
                <td className="p-4 border-r border-gray-200">30"</td>
                <td className="p-4 border-r border-gray-200">23"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-6 font-medium">Still not sure about your size? We are here to help!</p>
          <Link href="/contact" className="inline-block bg-black hover:bg-red-600 text-white font-bold uppercase tracking-widest py-3 px-8 transition text-sm">
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
}