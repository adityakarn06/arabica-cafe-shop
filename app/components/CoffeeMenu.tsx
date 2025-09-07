'use client';

import { ChevronLeft, ChevronRight, Plus, Star } from 'lucide-react';
import { useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % coffeeItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + coffeeItems.length) % coffeeItems.length);
  };

  return (
    <section className="bg-stone-100 px-4 py-16 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-4">
              OUR COFFEE
            </h2>
            <p className="text-stone-600 text-lg max-w-md">
              There's always room for coffee, it's not just coffee,<br />
              its's an experience, life is better with coffee.
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center mt-16">
          <div className="flex items-end space-x-6">
            {coffeeItems.slice(0, 4).map((item, index) => {
              const isCenterCard = index === 1 || index === 2;
              const cardWidth = isCenterCard ? "w-80" : "w-64";
              const cardHeight = isCenterCard ? "h-96" : "h-80";
              const imageSize = isCenterCard ? 140 : 120;
              const textSize = isCenterCard ? "text-2xl" : "text-xl";
              const priceSize = isCenterCard ? "text-3xl" : "text-2xl";
              
              return (
                <div
                  key={item.id}
                  className={`${cardWidth} ${cardHeight} bg-stone-800 text-white rounded-2xl relative overflow-visible ${
                    !isCenterCard ? 'opacity-75 scale-90' : ''
                  }`}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={imageSize}
                        height={imageSize}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="pt-20 px-6 pb-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className={`${textSize} font-bold text-white mb-3 text-center`}>
                        {item.name}
                      </h3>

                      <div className="flex items-center justify-center mb-3">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white ml-1 text-sm font-medium">
                          {item.rating}
                        </span>
                      </div>

                      <p className="text-stone-300 mb-6 text-sm text-center">
                        Volume <span className="text-white font-medium">{item.volume}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`${priceSize} font-bold text-white`}>
                        {item.price}
                      </span>
                      <button className="w-12 h-12 bg-stone-200 text-stone-800 rounded-lg flex items-center justify-center hover:bg-white transition-colors">
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
