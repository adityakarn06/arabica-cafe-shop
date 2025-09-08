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
        <div className="flex items-start justify-between mb-8 px-4 md:px-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#3B312B] mb-4">
              OUR COFFEE
            </h2>
            <p className="text-[#716E68] text-lg max-w-md">
              There is always room for coffee, its not just coffee,<br />
              it is an experience, life is better with coffee.
            </p>
          </div>
          <div className="flex space-x-3 pt-16">
            <button
              className="w-12 h-12 bg-stone-800 text-[#ECE7E0] rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="w-12 h-12 bg-stone-800 text-[#ECE7E0] rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center mt-16">
          <div className="flex items-end gap-4">
            {coffeeItems.slice(0, 4).map((item, index) => {
              const isCenterCard = index === 1 || index === 2;
              
              return (
                <div
                  key={item.id}
                  className={`w-92 h-92 bg-[#3B312B] text-[#ECE7E0] rounded-2xl relative overflow-visible ${
                    !isCenterCard ? 'scale-80' : ''
                  }`}
                >
                  <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={240}
                        height={240}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="pt-20 px-6 pb-6 h-full flex flex-col justify-start">
                    <div className='flex flex-col items-start'>
                      <h3 className={`text-3xl font-bold text-[#ECE7E0] mb-3 text-center`}>
                        {item.name}
                      </h3>

                      <div className="flex items-center justify-center mb-3 p-2 bg-[#5F5750] rounded-xs">
                        <Star className="w-4 h-4 text-[#ECE7E0] fill-current" />
                        <span className="text-[#ECE7E0] ml-1 text-sm font-medium">
                          {item.rating}
                        </span>
                      </div>

                      <p className="text-[#726C65] mb-6 text-lg text-center">
                        Volume <span className="text-[#ECE7E0] font-medium">{item.volume}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between border border-[#ECE7E0]">
                      <span className={`text-3xl font-bold text-[#ECE7E0] py-2 pl-4`}>
                        {item.price}
                      </span>
                      <button className="w-14 h-14 bg-[#ECE7E0] text-[#3B312B] flex items-center justify-center hover:bg-white transition-colors">
                        <Plus className="h-6 w-6" />
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
