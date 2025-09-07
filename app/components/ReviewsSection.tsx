'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-stone-100 px-4 py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-16">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800">
              CUSTOMER<br />
              REVIEWS
            </h2>
          </div>
          <div className="flex-1 flex flex-col items-end">
            <p className="text-stone-600 text-lg mb-6 max-w-md text-right">
              There's always room for coffee, it's not just coffee,<br />
              its's an experience, life is better with coffee.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={prevReview}
                className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextReview}
                className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={review.id} className="bg-stone-200 rounded-2xl p-8 relative">
              <div className="mb-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-4 border-stone-800">
                  <Image 
                    src={review.image} 
                    alt={review.name} 
                    width={96} 
                    height={96} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-stone-800 mb-4">
                {review.name}
              </h3>

              <p className="text-stone-600 leading-relaxed mb-6 text-lg">
                {review.text}
              </p>

              <div className="flex items-center">
                <div className="flex text-stone-800 text-lg">
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
