import Image from 'next/image';

const RoastingSection = () => {
  const roastTypes = [
    {
      name: 'LIGHT ROAST',
      image: '/roaster1.png',
      imagePosition: 'right'
    },
    {
      name: 'MEDIUM ROAST',
      image: '/roaster2.png',
      imagePosition: 'left'
    },
    {
      name: 'DARK ROAST',
      image: '/roaster3.png',
      imagePosition: 'right'
    },
    {
      name: 'MEDIUM-DARK ROAST',
      image: '/roaster4.png',
      imagePosition: 'left'
    }
  ];

  return (
    <section className="bg-stone-100 px-4 py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
            OUR ROASTING
          </h2>
          <p className="text-stone-600 max-w-3xl mx-auto text-lg leading-relaxed">
            A cup of coffee on a warm summer day reminds you there's<br />
            bright side to every day. There's a great big coffee world<br />
            waiting for you. And it tastes great!
          </p>
        </div>

        <div className="space-y-20">
          {roastTypes.map((roast, index) => (
            <div key={roast.name} className="relative">
              {roast.imagePosition === 'right' ? (
                // Image on Right, Text on Left
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-800">
                      {roast.name}
                    </h3>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <div className="w-80 h-64 rounded-2xl overflow-hidden">
                      <Image
                        src={roast.image}
                        alt={roast.name}
                        width={320}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="w-80 h-64 rounded-2xl overflow-hidden">
                      <Image
                        src={roast.image}
                        alt={roast.name}
                        width={320}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-800 text-right">
                      {roast.name}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoastingSection;
