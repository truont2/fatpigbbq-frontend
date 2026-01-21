import React from "react";

const Press = () => {
  const articles = [
    {
      date: "Nov 30, 2022",
      title: "Head to Edmonds for the classic dim sum cart experience and some tasty BBQ",
      excerpt: "They were incredibly tender, and the barbecue sauce softened up the little blackened bits that were clinging to the edges.",
      link: "https://www.seattletimes.com/life/food-drink/head-to-edmonds-for-the-classic-dim-sum-cart-experience-and-some-tasty-bbq/",
    },
    {
      date: "May 12, 2021",
      title: "'Fat Pig BBQ is 'Amazeballs'",
      excerpt: "Customers rave about the fall-off-the-bone meat, the perfect sauce, and the delicious from-scratch cornbread at this hole-in-the-wall.",
      link: "https://visitedmonds.com/blog/post/fat-pig-bbq-is-amazeballs",
    },
    {
      date: "July 17, 2018",
      title: "Southern hospitality makes its way to Edmonds",
      excerpt: "Passion for food and a sense of community is one thing that transcends culture and race, and Truong is a prime example of that.",
      link: "https://www.edmondsbeacon.com/story/2018/07/13/news/southern-hospitality-makes-its-way-to-edmonds/19956.html",
    }
  ];

  return (
    <div className="bg-brand-cream/50 py-24 mb-12 border-t border-brand-red/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block border-b-2 border-brand-red pb-2 mb-6">
            <span className="text-brand-red tracking-widest uppercase text-sm font-bold">In the News</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1F1A17] mb-6">Fat Pig Press</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded opacity-50"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col bg-white p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E0D8] hover:border-brand-red/30 transform hover:-translate-y-1"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-cream rotate-45 transform translate-x-8 -translate-y-8 border-b-2 border-l-2 border-[#E5E0D8]"></div>
              </div>

              <div className="mb-6 border-b border-brand-red/10 pb-4">
                <span className="text-xs font-bold tracking-widest text-brand-red uppercase">{article.date}</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#1F1A17] mb-4 leading-tight group-hover:text-brand-red transition-colors">
                "{article.title}"
              </h3>

              <p className="text-gray-600 font-serif italic leading-relaxed flex-grow mb-8">
                ...{article.excerpt}
              </p>

              <div className="flex items-center text-sm font-bold text-gray-900 mt-auto uppercase tracking-widest border-t border-dashed border-gray-200 pt-6">
                Read Full Story
                <span className="ml-2 group-hover:translate-x-1 transition-transform text-brand-red">&rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;
