import Image from "next/image";

const PerfectCupSection = () => {
  return (
    <section className="bg-[#ECE7E0] px-4 py-16 md:px-8">
      <div className="max-w-7xl mx-4 md:m-8 bg-[#DED8C5]">
        <div className="grid md:grid-cols-2 gap-8 items-center relative">
          <div className="space-y-4 md:space-y-6 p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-stone-800 leading-tight">
              YOUR PERFECT CUP
              <br />
              AWAITS
            </h2>
            <p className="text-stone-600 text-base md:text-lg max-w-md">
              There is always time for coffee. It is our just coffee.
              It is an experience. It is better with coffee.
            </p>
            <button className="bg-stone-800 text-white px-6 py-2 md:px-8 md:py-3 rounded font-medium hover:bg-stone-900 transition-colors text-sm md:text-base">
              Order Now
            </button>
          </div>
              
          <div className="hidden absolute right-0 top-0 bottom-0 md:flex justify-end">
            <Image
              src="/perfect-collage.png"
              alt="Perfect Cup"
              width={400}
              height={500}
            />
          </div>
              
          
        </div>
      </div>
    </section>
  );
};

export default PerfectCupSection;
