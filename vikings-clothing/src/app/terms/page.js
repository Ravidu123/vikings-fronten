export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 border border-gray-200 shadow-sm">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">Terms & Conditions</h1>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-500 font-medium">Please read these terms carefully before using our website.</p>
        </div>

        <div className="space-y-8 text-gray-600 font-medium leading-relaxed text-sm">
          
          <div>
            <h2 className="text-lg font-black uppercase text-black mb-2">1. General Overview</h2>
            <p>By accessing and placing an order with Vikings Clothing Co., you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Vikings.</p>
          </div>

          <div>
            <h2 className="text-lg font-black uppercase text-black mb-2">2. Products & Pricing</h2>
            <p>All products are subject to availability. We reserve the right to discontinue any product at any time. Prices for our products are subject to change without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of a product.</p>
          </div>

          <div>
            <h2 className="text-lg font-black uppercase text-black mb-2">3. Accuracy of Information</h2>
            <p>We have made every effort to display as accurately as possible the colors and images of our products that appear on the store. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
          </div>

          <div>
            <h2 className="text-lg font-black uppercase text-black mb-2">4. Intellectual Property</h2>
            <p>All content included on this site, such as text, graphics, logos, images, and clothing designs, is the property of Vikings Clothing Co. and protected by copyright laws.</p>
          </div>

        </div>

      </div>
    </div>
  );
}