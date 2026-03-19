import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-vikingWhite min-h-screen flex flex-col">
      
      {/* 1. Page Hero Section (උඩින්ම තියෙන කළු පාට බැනර් එක) */}
      <section className="bg-vikingBlack text-vikingWhite py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Story</span>
          </h1>
          <div className="w-24 h-1 bg-vikingRed mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
            More than just clothing. We are a movement for those who dare to stand out, lead, and conquer their everyday battles with unmatched style.
          </p>
        </div>
      </section>

      {/* 2. The Origin (අපේ ආරම්භය - පින්තූරය සහ විස්තරය) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 w-full">
          {/* මෙතනට ඔයාගේ කඩේ, ඇඳුම් මහන තැන, නැත්නම් ලස්සන Model කෙනෙක්ගේ පින්තූරයක් දාන්න පුළුවන් */}
          <div className="w-full aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition duration-500"></div>
            <span className="text-gray-400 font-bold uppercase tracking-widest text-sm z-10">Brand Image Placeholder</span>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-black text-vikingBlack uppercase tracking-widest mb-6">
            The Origin of Vikings
          </h2>
          <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
            <p>
              Born out of a desire to break the mold of ordinary streetwear, Vikings Clothing Co. was established with a single mission: to provide premium quality, bold designs for the modern warrior.
            </p>
            <p>
              We noticed a gap in the Sri Lankan market for truly high-quality, oversized, and perfectly fitted t-shirts that don't compromise on comfort or durability. That's why we source only the finest heavy-weight cotton blends.
            </p>
            <p>
              Every stitch, every cut, and every print is meticulously planned to ensure that when you wear Vikings, you feel an instant surge of confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Values (අපේ ප්‍රධාන ගුණාංග 3) */}
      <section className="bg-gray-50 border-y border-gray-200 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-vikingBlack uppercase tracking-widest mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-vikingRed mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Value 1 */}
            <div className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-vikingBlack text-vikingWhite rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-3 text-vikingBlack">Uncompromising Quality</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We use strictly premium heavy-weight fabrics that guarantee durability, comfort, and a perfect drape on your body.</p>
            </div>

            {/* Value 2 */}
            <div className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-vikingBlack text-vikingWhite rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-3 text-vikingBlack">Bold Aesthetics</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our designs are minimalistic yet aggressive. We believe in making a statement without saying a word.</p>
            </div>

            {/* Value 3 */}
            <div className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-vikingBlack text-vikingWhite rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-3 text-vikingBlack">Customer Loyalty</h3>
              <p className="text-gray-500 text-sm leading-relaxed">You are part of our clan. We ensure a seamless shopping experience, fast island-wide delivery, and easy exchanges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action (සාප්පු සවාරියට ආරාධනා කිරීම) */}
      <section className="py-24 px-6 md:px-12 text-center bg-vikingWhite">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-vikingBlack uppercase tracking-tighter mb-6">
            Ready to Join the Clan?
          </h2>
          <p className="text-gray-500 text-lg font-medium mb-10">
            Explore our latest collection and find the armor that suits your daily battles.
          </p>
          <Link href="/shop" className="inline-block bg-vikingRed hover:bg-red-700 text-white font-black uppercase tracking-[0.2em] py-5 px-12 transition duration-300 shadow-[0_10px_20px_rgba(220,38,38,0.2)] hover:shadow-[0_15px_30px_rgba(220,38,38,0.4)] hover:-translate-y-1">
            Shop The Collection
          </Link>
        </div>
      </section>

    </div>
  );
}