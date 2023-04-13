// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  const data = [
    {
      name: "Ghazal Tariri",
      rating: 4, //rating is out of 5
      review:
        "The best ribs ever! We drive half an hour to Edmonds every time we want to treat ourselves with a super yummy ribs!",
    },
    {
      name: "Collin Miller",
      rating: 3, //rating is out of 5
      review:
        "First time eating in the restaurant vs getting take out, and while there is not much in the way of decor the staff is super friendly and the food, as usual, was tender and delicious.",
    },
    {
      name: "Jin Kyong Lee.",
      rating: 5, //rating is out of 5
      review:
        "The food is BOMB. Must try!!! I love this place and has the best service.",
    },
    {
      name: "Mark H.",
      rating: 5, //rating is out of 5
      review:
        "The barbecue was excellent. Both the barbecue pork ribs and chickens were very tender. The meat easily fell off the bone with simple pull. The corn bread and roasted corn were very buttery. The owner/chef was very friendly and chatted with us. This will definitely will be a regularly spot for us.",
      yelp: "https://www.google.com/",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto pb-16 px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {data.map((review, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="text-center max-h-[80vh] py-10 px-4 w-4/6 mx-auto flex flex-col items-center justify-center text-gray-500">
                <h1 className="text-2xl md:text-4xl font-bold">
                  {review.name}
                </h1>
                <div className="flex items-center my-5">
                  {[...Array(review.rating)].map((x, i) => (
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  {[...Array(5 % review.rating)].map((x, i) => (
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{`${review.rating} out of 5`}</p>
                </div>
                <p className="text-xl">{review.review}</p>
                <a className="pt-6 underline" href={review.yelp}>
                  See Review
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
