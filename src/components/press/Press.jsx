import React from "react";

import visitEdmonds from "../../assets/visitEdmonds.png";
import seattleTimes from "../../assets/seattle-times-logo-960x450.jpg";
import edmondsBeacon from "../../assets/edmondsBeacon.png";

const Press = () => {
  const articles = [
    {
      date: "Nov 30, 2022",
      title: "Head to Edmonds for the classic dim sum cart experience and some tasty BBQ",
      excerpt: "They were incredibly tender, and the barbecue sauce softened up the little blackened bits that were clinging to the edges.",
      link: "https://www.seattletimes.com/life/food-drink/head-to-edmonds-for-the-classic-dim-sum-cart-experience-and-some-tasty-bbq/",
      logo: seattleTimes
    },
    {
      date: "May 12, 2021",
      title: "'Fat Pig BBQ is 'Amazeballs'",
      excerpt: "Customers rave about the fall-off-the-bone meat, the perfect sauce, and the delicious from-scratch cornbread at this hole-in-the-wall.",
      link: "https://visitedmonds.com/blog/post/fat-pig-bbq-is-amazeballs",
      logo: visitEdmonds
    },
    {
      date: "July 17, 2018",
      title: "Southern hospitality makes its way to Edmonds",
      excerpt: "Passion for food and a sense of community is one thing that transcends culture and race, and Truong is a prime example of that.",
      link: "https://www.edmondsbeacon.com/story/2018/07/13/news/southern-hospitality-makes-its-way-to-edmonds/19956.html",
      logo: edmondsBeacon
    }
  ];

  return (
    <div className="max-w-7xl mx-auto my-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Fat Pig in the News</h2>
        <div className="w-24 h-1 bg-brand-red mx-auto rounded"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
          >
            <div className="h-48 bg-white p-6 flex items-center justify-center border-b border-gray-50">
              <img
                src={article.logo}
                alt="News Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <span className="text-sm font-semibold text-brand-red mb-2">{article.date}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                "{article.excerpt}"
              </p>
              <div className="mt-4 text-sm font-bold text-gray-900 flex items-center">
                Read Article
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Press;
