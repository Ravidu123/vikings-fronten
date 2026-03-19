import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 border border-gray-200 shadow-sm">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">Returns & Exchanges</h1>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-500 font-medium">Your satisfaction is our priority. Read our hassle-free return policy below.</p>
        </div>

        <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
          
          <div>
            <h2 className="text-xl font-black uppercase text-black mb-3">7-Day Exchange Policy</h2>
            <p>We offer a 7-day exchange policy. If you are not completely satisfied with your purchase, or if you need a different size, you can exchange the item within 7 days of receiving your order.</p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase text-black mb-3">Conditions for Returns</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Items must be unworn, unwashed, and in their original condition.</li>
              <li>All original tags and packaging must be intact.</li>
              <li>Sale items or limited edition drops may not be eligible for return unless defective.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase text-black mb-3">How to Request an Exchange</h2>
            <p>To initiate a return or exchange, please contact our support team via WhatsApp or email with your Order ID and the reason for the exchange. Our team will guide you through the process.</p>
          </div>

          <div className="bg-gray-50 p-6 border-l-4 border-black mt-8">
            <h3 className="font-bold text-black uppercase mb-2">Note regarding Shipping</h3>
            <p className="text-sm">Customers are responsible for the return shipping costs unless the item received was damaged or incorrect.</p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link href="/contact" className="inline-block border-2 border-black text-black hover:bg-black hover:text-white font-bold uppercase tracking-widest py-3 px-8 transition text-sm">
            Request an Exchange
          </Link>
        </div>

      </div>
    </div>
  );
}