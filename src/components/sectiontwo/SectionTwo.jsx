import React from "react";

const SectionTwo = () => {
  const platforms = [
    { name: 'GrubHub', url: 'https://fatpigbbq.dine.online/' },
    { name: 'Uber Eats', url: 'https://www.ubereats.com/store/fat-pig-bbq/S0VhUzV1RnyR1Jh3vmWdHw' },
    { name: 'DoorDash', url: 'https://www.doordash.com/store/fat-pig-bbq-edmonds-429805/' },
  ];

  return (
    <div className="bg-brand-cream py-24 border-t border-brand-red/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-brand-red pb-2 mb-6">
            <span className="text-brand-red tracking-widest uppercase text-sm font-bold">Delivery Partners</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1F1A17] mb-6">
            Order Online
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic leading-relaxed">
            Cozy night in? We've partnered with the best to bring our slow-cooked BBQ straight to your dining table.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="group flex-1 relative bg-white border-2 border-[#E5E0D8] p-10 text-center hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col items-center justify-center min-h-[200px]"
            >
              {/* Decorative Corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-red opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-red opacity-50 group-hover:opacity-100 transition-opacity"></div>

              {/* Content */}
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-[#1F1A17] font-serif group-hover:text-brand-red transition-colors">
                  {platform.name}
                </h4>

                <div className="w-12 h-px bg-gray-200 mx-auto group-hover:bg-brand-red/30 transition-colors"></div>

                <span className="text-xs uppercase tracking-widest font-bold text-gray-400 group-hover:text-brand-red/70 transition-colors block mt-2">
                  Order Now &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
