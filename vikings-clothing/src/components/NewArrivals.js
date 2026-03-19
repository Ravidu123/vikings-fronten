import Link from 'next/link';

const products = [
  { id: 1, name: "Oversized Black Tee", price: "Rs. 4,500", image: "T-shirt 1" },
  { id: 2, name: "Classic White V-Neck", price: "Rs. 3,800", image: "T-shirt 2" },
  { id: 3, name: "Viking Warrior Edition", price: "Rs. 5,200", image: "T-shirt 3" },
  { id: 4, name: "Premium Grey Crew", price: "Rs. 4,000", image: "T-shirt 4" }
];

export default function NewArrivals() {
  return (
    <section className="bg-vikingWhite py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* මාතෘකාව */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-vikingBlack uppercase tracking-widest mb-4">
            New Arrivals
          </h2>
          <div className="w-24 h-1 bg-vikingRed mx-auto"></div>
        </div>

        {/* T-shirts 4 පෙන්වන Grid එක */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {products.map((product) => (
            /* මෙතන අපි div එක Link එකක් කළා */
            <Link href="/product" key={product.id} className="group cursor-pointer flex flex-col">
              
              {/* පින්තූරය තියෙන කොටස */}
              <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden mb-4 border border-gray-300">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                  <span className="text-gray-500 font-bold uppercase tracking-widest">
                    {product.image}
                  </span>
                </div>

                {/* Hover කරද්දි මතු වෙන Quick Add බොත්තම */}
                <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-vikingBlack text-vikingWhite font-bold uppercase tracking-wider py-3 text-sm hover:bg-vikingRed transition duration-300">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* T-shirt එකේ නම සහ මිල */}
              <div className="text-center">
                <h3 className="text-vikingBlack font-bold uppercase tracking-wide mb-1 transition duration-300 group-hover:text-vikingRed">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {product.price}
                </p>
              </div>
              
            {/* මෙතන වැහෙන්න ඕනේ </Link> වලින් */}
            </Link>
          ))}

        </div>

        {/* ඔක්කොම බලන්න තියෙන බොත්තම */}
        <div className="mt-16 text-center">
          <Link href="/shop" className="inline-block border-2 border-vikingBlack text-vikingBlack hover:bg-vikingBlack hover:text-vikingWhite font-bold uppercase tracking-widest py-3 px-10 transition duration-300">
            View All Collection
          </Link>
        </div>

      </div>
    </section>
  );
}