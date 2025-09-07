'use client';

import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Image from 'next/image';
import Searchbar from './SearchBar';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Stories', href: '#stories' },
    { name: 'Coffee', href: '#coffee' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Store', href: '#store' },
  ];

  return (
    <div className="bg-[#ECE7E0]">
      <header className="px-4 py-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-extrabold text-[#3B312B]">
              Arabica Cafe India
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#3B312B] hover:text-stone-900 transition-colors font-semibold text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#menu">
            <button className="bg-[#3B312B] text-[#ECE7E0] px-8 py-3 font-semibold hover:bg-stone-900 transition-colors">
              Order Now
            </button>
            </Link>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#3B312B]" />
              ) : (
                <Menu className="h-6 w-6 text-[#3B312B]" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-stone-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#3B312B] hover:text-stone-900 transition-colors font-medium px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section className="px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto mt">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="relative flex justify-between">
              <Image
                src="/headerBarista.png"
                alt="Coffee Cup"
                width={192}
                height={192}
                className="w-full h-80 object-contain mt-32"
              />
            </div>

            <div className="space-y-8 text-center">
              <h1 className="text-6xl md:text-9xl font-bold text-[#3B312B] leading-tight">
                EXPRESSO
              </h1>
              <h1 className="text-6xl md:text-8xl font-bold text-[#3B312B] leading-tight">
                YOURSELF
              </h1>
              <p className="text-stone-600 text-lg max-w-md mx-auto">
                Pure Coffee, pure community, pure experience, because you
                can never have to much coffee in your life.
              </p>
              
              <Searchbar />
            </div>

            <div className="relative">
              <div className="">
                  <Image
                    src="/headerCoffeeImage.png"
                    alt="Coffee Cup"
                    width={192}
                    height={192}
                    className="w-full h-80 object-contain"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
