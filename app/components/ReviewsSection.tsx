'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

const ReviewsSection = () => {

  const reviews: Review[] = [
    {
      id: 1,
      name: 'JANE SMITH',
      text: "The Coffee at this shop absolutely really amzazing. It's rich flavourful and always brewed to perfection.",
      rating: 5,
      image: '/customer1.png'
    },
    {
      id: 2,
      name: 'ADAM SIMONS',
      text: "The Coffee at this shop absolutely really amzazing. It's rich flavourful and always brewed to perfection.",
      rating: 5,
      image: '/customer2.png'
    }
  ];

  return (
    <section className="bg-[#ECE7E0] text-[#3B312B] px-4 pt-16 pb-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 md:mb-16">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              CUSTOMER<br />
              REVIEWS
            </h2>
          </div>
          <div className="flex-1 flex flex-col md:items-end">
            <p className="text-[#726C65] text-base md:text-lg mb-6 max-w-md md:text-right">
              There is always room for coffee, it is not just coffee,<br className="hidden md:block" />
              it is an experience, life is better with coffee.
            </p>
            <div className="flex space-x-3">
              <button
                className="w-10 h-10 md:w-12 md:h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                className="w-10 h-10 md:w-12 md:h-12 bg-[#3B312B] text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#DED8C5] rounded-2xl py-6 md:py-8 pr-6 md:pr-8 pl-6 md:pl-40 relative">
              <div className="mb-4 md:mb-6 md:absolute md:-bottom-12 md:-left-10 flex items-center space-x-4">
                <div className="w-16 h-16 md:w-44 md:h-44 rounded-sm overflow-hidden border-2 md:border-4 border-[#3B312B]">
                  <Image 
                    src={review.image} 
                    alt={review.name} 
                    width={96} 
                    height={96} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:hidden">
                  <h3 className="text-lg font-bold mb-1">
                    {review.name}
                  </h3>
                </div>
              </div>

              <h3 className="hidden md:block text-2xl font-bold mb-4">
                {review.name}
              </h3>

              <p className="text-[#726C65] leading-relaxed mb-4 md:mb-6 text-sm md:text-lg">
                {review.text}
              </p>

              <div className="flex items-center">
                <div className="flex text-sm md:text-lg">
                  {'★'.repeat(review.rating)}
                </div>
                <span className="text-stone-600 ml-2 font-medium text-sm md:text-base">
                  {review.rating}.0 rating
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
