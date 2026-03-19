import Link from "next/link";
// Image එක පාවිච්චි කරනවා නම් import Image from "next/image"; දාන්න

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] bg-vikingBlack flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/40 via-vikingBlack to-vikingBlack"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* වම් පැත්ත */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-8 pt-12 md:pt-0">
          <h1 className="text-5xl md:text-7xl font-black text-vikingWhite uppercase tracking-tighter leading-tight">
            Unleash Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Inner Warrior</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-md font-medium">
            Premium quality clothing designed for those who lead. Limited edition drops. Unmatched comfort and style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto">
            <Link href="/shop" className="bg-vikingRed hover:bg-red-700 text-white font-bold uppercase tracking-widest py-4 px-8 text-center transition duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(220,38,38,0.3)]">
              Shop Collection
            </Link>
            <Link href="/about" className="border border-gray-600 hover:border-vikingWhite text-vikingWhite font-bold uppercase tracking-widest py-4 px-8 text-center transition duration-300">
              Explore Brand
            </Link>
          </div>
        </div>

        {/* දකුණු පැත්ත */}
        <div className="md:w-1/2 w-full mt-16 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-b from-gray-800 to-vikingBlack border border-gray-800 rounded-t-full overflow-hidden flex items-center justify-center shadow-2xl">
            <div className="text-center px-4">
              <svg className="w-12 h-12 text-gray-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <p className="text-gray-500 font-bold tracking-widest uppercase text-sm">Your Model Image <br/> Goes Here</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}