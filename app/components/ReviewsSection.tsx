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
        <div className="flex items-start justify-between mb-16">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold">
              CUSTOMER<br />
              REVIEWS
            </h2>
          </div>
          <div className="flex-1 flex flex-col items-end">
            <p className="text-[#726C65] text-lg mb-6 max-w-md text-right">
              There is always room for coffee, it is not just coffee,<br />
              it is an experience, life is better with coffee.
            </p>
            <div className="flex space-x-3">
              <button
                className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="w-12 h-12 bg-[#3B312B] text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#DED8C5] rounded-2xl py-8 pr-8 pl-40 relative">
              <div className="mb-6 absolute -bottom-12 -left-10 flex items-center space-x-4">
                <div className="w-44 h-44 rounded-sm overflow-hidden border-4 border-[#3B312B">
                  <Image 
                    src={review.image} 
                    alt={review.name} 
                    width={96} 
                    height={96} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {review.name}
              </h3>

              <p className="text-[#726C65] leading-relaxed mb-6 text-lg">
                {review.text}
              </p>

              <div className="flex items-center">
                <div className="flex text-lg">
                  {'★'.repeat(review.rating)}
                </div>
                <span className="text-stone-600 ml-2 font-medium">
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
