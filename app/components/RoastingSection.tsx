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
    <section className="bg-[#ECE7E0] text-[#3B312B] px-4 py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            OUR ROASTING
          </h2>
          <p className="text-[#706C64] max-w-3xl mx-auto text-lg leading-relaxed">
            A cup of coffee on a warm summer day reminds you there is<br />
            bright side to every day. There is a great big coffee world<br />
            waiting for you. And it tastes great!
          </p>
        </div>

        <div className="grid grid-cols-3">
          <div className='flex flex-col items-start gap-44 justify-between mt-48'>
            <Image
              src="/roaster1.png"
              alt="Roasting Left"
              width={400}
              height={600}
              className="object-contain"
            />
            <Image
              src="/roaster3.png"
              alt="Roasting Left"
              width={400}
              height={600}
              className="object-contain"
            />
          </div>
          <div>
            <div className="flex flex-col items-center justify-between h-[88%] mt-20">
              {roastTypes.map((roast) => (
                <div key={roast.name} className="mb-16 last:mb-0 text-center">
                  <h3 className="text-5xl font-bold mb-4">{roast.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end gap-44 justify-between">
              <Image
                src="/roaster2.png"
                alt="Roasting Right"
                width={400}
                height={600}
                className="object-contain"
              />
              <Image
                src="/roaster4.png"
                alt="Roasting Right"
                width={400}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoastingSection;
