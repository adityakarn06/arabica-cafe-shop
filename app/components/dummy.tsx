'use client';

import { ChevronLeft, ChevronRight, Plus, Star } from 'lucide-react';
import Image from 'next/image';

interface CoffeeItem {
  id: number;
  name: string;
  rating: number;
  volume: string;
  price: string;
  image: string;
}

const CoffeeMenu = () => {

  const coffeeItems: CoffeeItem[] = [
    {
      id: 1,
      name: 'CORTADO',
      rating: 4.6,
      volume: '160 ml',
      price: '$27.50',
      image: '/coffee1.png'
    },
    {
      id: 2,
      name: 'COFFEE LATTE',
      rating: 4.5,
      volume: '160 ml',
      price: '$25.60',
      image: '/coffee2.png'
    },
    {
      id: 3,
      name: 'CAPPUCCINO',
      rating: 4.6,
      volume: '160 ml',
      price: '$27.50',
      image: '/coffee1.png'
    },
    {
      id: 4,
      name: 'CORTADO',
      rating: 4.6,
      volume: '160 ml',
      price: '$27.50',
      image: '/coffee1.png'
    },
    {
      id: 5,
      name: 'COFFEE LATTE',
      rating: 4.5,
      volume: '160 ml',
      price: '$25.60',
      image: '/coffee2.png'
    },
    {
      id: 6,
      name: 'CAPPUCCINO',
      rating: 4.6,
      volume: '160 ml',
      price: '$27.50',
      image: '/coffee1.png'
    }
  ];

  return (
    <section className="bg-[#ECE7E0] py-16 overflow-hidden" id="menu">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 px-4 md:px-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B312B] mb-4">
              OUR COFFEE
            </h2>
            <p className="text-[#716E68] text-base md:text-lg max-w-md">
              There is always room for coffee, its not just coffee,<br className="hidden md:block" />
              it is an experience, life is better with coffee.
            </p>
          </div>
          <div className="flex space-x-3 md:pt-16 justify-center md:justify-start">
            <button
              className="w-10 h-10 md:w-12 md:h-12 bg-stone-800 text-[#ECE7E0] rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              className="w-10 h-10 md:w-12 md:h-12 bg-stone-800 text-[#ECE7E0] rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center mt-8 md:mt-16">
          <div className="flex items-end gap-2 md:gap-4 overflow-x-auto px-4 md:px-0 pb-4 md:pb-0">
            {coffeeItems.slice(0, 4).map((item, index) => {
              const isCenterCard = index === 1 || index === 2;
              
              return (
                <div
                  key={item.id}
                  className={`w-72 sm:w-80 md:w-92 h-80 sm:h-88 md:h-92 bg-[#3B312B] text-[#ECE7E0] rounded-2xl relative overflow-visible flex-shrink-0 ${
                    !isCenterCard ? 'md:scale-80' : ''
                  }`}
                >
                  <div className="absolute -top-16 sm:-top-20 md:-top-24 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={180}
                        height={180}
                        className="sm:w-52 sm:h-52 md:w-60 md:h-60 object-contain"
                      />
                    </div>
                  </div>

                  <div className="pt-16 sm:pt-18 md:pt-20 px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 h-full flex flex-col justify-start">
                    <div className='flex flex-col items-start'>
                      <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#ECE7E0] mb-2 sm:mb-3 text-center w-full`}>
                        {item.name}
                      </h3>

                      <div className="flex items-center justify-center mb-2 sm:mb-3 p-1 sm:p-1.5 md:p-2 bg-[#5F5750] rounded-xs">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#ECE7E0] fill-current" />
                        <span className="text-[#ECE7E0] ml-1 text-xs sm:text-sm font-medium">
                          {item.rating}
                        </span>
                      </div>

                      <p className="text-[#726C65] mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg text-center w-full">
                        Volume <span className="text-[#ECE7E0] font-medium">{item.volume}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between border border-[#ECE7E0] mt-auto">
                      <span className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#ECE7E0] py-2 pl-3 sm:pl-3.5 md:pl-4`}>
                        {item.price}
                      </span>
                      <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#ECE7E0] text-[#3B312B] flex items-center justify-center hover:bg-white transition-colors">
                        <Plus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;
