'use client';

import { motion } from 'framer-motion';

const CoffeeNav = () => {
  const coffeeTypes = ['FRAPPE', 'CAPPUCCINO', 'MOCHA', 'LATTE', 'EXPRESSO', 'COLD BREW', 'FRAPPE', 'CAPPUCCINO', 'MOCHA', 'LATTE', 'EXPRESSO', 'COLD BREW'];

  return (
    <div className="bg-stone-800 text-white py-6 overflow-hidden">
      <motion.div
        className="flex items-center space-x-16"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...coffeeTypes, ...coffeeTypes].map((type, index) => (
          <div key={index} className="flex items-center space-x-3 whitespace-nowrap">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-amber-800 text-lg">☕</span>
            </div>
            <span className="font-bold tracking-wider text-2xl text-white">
              {type}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoffeeNav;