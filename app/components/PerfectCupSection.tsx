import Image from "next/image";

const PerfectCupSection = () => {
  return (
    <section className="bg-stone-100 px-4 py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
              YOUR PERFECT CUP
              <br />
              AWAITS
            </h2>
            <p className="text-stone-600 text-lg max-w-md">
              There's always time for coffee. It's our just coffee.
              It's an experience. It's better with coffee.
            </p>
            <button className="bg-stone-800 text-white px-8 py-3 rounded font-medium hover:bg-stone-900 transition-colors">
              Order Now
            </button>
          </div>
              
          <div>
            <Image
              src="/perfect-collage.png"
              alt="Perfect Cup"
              width={500}
              height={500}
            />
          </div>
              
          
        </div>
      </div>
    </section>
  );
};

export default PerfectCupSection;
