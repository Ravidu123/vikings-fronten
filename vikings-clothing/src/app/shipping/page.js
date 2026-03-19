import Link from 'next/link';

export default function ShippingPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 border border-gray-200 shadow-sm">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">Shipping Info</h1>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-500 font-medium">Everything you need to know about how we deliver your armor.</p>
        </div>

        <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
          
          <div>
            <h2 className="text-xl font-black uppercase text-black mb-3">Delivery Times</h2>
            <p>We process and dispatch all orders within 24 hours. Once dispatched, standard island-wide delivery takes between <strong className="text-black">2 to 4 working days</strong> depending on your location in Sri Lanka.</p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase text-black mb-3">Shipping Rates</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-black">Standard Delivery:</strong> Rs. 350 for all orders under Rs. 10,000.</li>
              <li><strong className="text-black">Free Delivery:</strong> Enjoy FREE island-wide shipping on all orders over Rs. 10,000.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase text-black mb-3">Cash on Delivery (COD)</h2>
            <p>We offer Cash on Delivery island-wide. Please ensure someone is available at the provided shipping address to receive the package and make the payment to the courier.</p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase text-black mb-3">Order Tracking</h2>
            <p>Once your order is handed over to our courier partners, you will receive an SMS with a tracking link to monitor your delivery in real-time.</p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link href="/shop" className="inline-block bg-black hover:bg-red-600 text-white font-bold uppercase tracking-widest py-3 px-8 transition text-sm">
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
}