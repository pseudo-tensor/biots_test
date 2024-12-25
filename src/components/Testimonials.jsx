import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Karan Sharma",
    role: "Chairman",
    message:
      "The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.",
    image: "test1.png",
  },
  {
    id: 2,
    name: "Krish Kumar",
    role: "Associate",
    message:
      "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.",
    image: "test1.png",
  },
  {
    id: 3,
    name: "Smriti Prabha",
    role: "Member",
    message:
      "Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again.",
    image: "test1.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="ms:my-6 tb:my-8 lg:my-10">
      <div className="relative mx-auto text-center font-sans">
        <h2 className="relative ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-12 tb:mb-14 lg:mb-14 text-gray-800 relative inline-block">
          TESTIMONIALS
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>

        <div className="grid grid-rows-1">
          <div className="flex justify-center relative">
            {/* Testimonial Box */}
            <div className="ms:w-3/4 sm:w-8/12 tb:h-56 ms:h-96 bg-neutral-700 text-neutral-50 rounded-lg flex items-center justify-center p-5 relative shadow-lg">
              {/* Quote Icon */}
              <svg
                className="absolute ms:-top-10 ms:-left-4 lg:-top-12 lg:-left-6 ms:h-16 tb:h-18 lg:h-20"
                enable-background="new 796 698 200 200"
                viewBox="796 698 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m885.208 749.739v-40.948c-49.189 0-89.208 40.019-89.208 89.209v89.209h89.208v-89.209h-48.26c0-26.61 21.65-48.261 48.26-48.261z" />
                <path d="m996 749.739v-40.948c-49.19 0-89.209 40.019-89.209 89.209v89.209h89.209v-89.209h-48.26c0-26.61 21.65-48.261 48.26-48.261z" />
              </svg>

              {/* Content */}
              <div className="grid grid-cols-1 place-items-center tb:flex tb:items-center text-justify">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover ms:mb-3 tb:mb-0 tb:mr-5 sm:mb-4"
                />
                <div>
                  <h3 className="ms:text-base tb:text-lg lg:text-xl ms:text-center tb:text-justify font-bold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="ms:text-xs tb:text-sm lg:text-md ms:text-center tb:text-justify text-gray-300 mb-2">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="ms:text-sm tb:text-md lg:text-base leading-relaxed">
                    {testimonials[currentIndex].message}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="flex items-center justify-center relative mt-4">
              <button
                onClick={handlePrev}
                className="text-gray-600 text-2xl mx-3 hover:text-gray-800 transition"
              >
                <svg
                  className="h-8 w-8 text-gray-800"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-2.5 h-2.5 mx-1 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
              <button
                onClick={handleNext}
                className="text-gray-600 text-2xl mx-3 hover:text-gray-800 transition"
              >
                <svg
                  className="h-8 w-8 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /*
  return (
    <div className="ms:my-6 tb:my-8 lg:my-10">
      <div className="mx-auto text-center font-sans ">
        <h2 className="ms:text-md ml:text-xl tb:text-2xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          TESTIMONIALS
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>

        <div className="relative grid grid-rows-1 pb-16 ">
          <div className="absolute z-40 ms:top-6 lg:top-8 transform">
            <svg
              className="ms:h-14 lg:h-20"
              enable-background="new 796 698 200 200"
              height="100"
              viewBox="796 698 200 200"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m885.208 749.739v-40.948c-49.189 0-89.208 40.019-89.208 89.209v89.209h89.208v-89.209h-48.26c0-26.61 21.65-48.261 48.26-48.261z" />
              <path d="m996 749.739v-40.948c-49.19 0-89.209 40.019-89.209 89.209v89.209h89.209v-89.209h-48.26c0-26.61 21.65-48.261 48.26-48.261z" />{" "}
            </svg>
          </div>
          <div className="flex justify-center">
            <div className="ms:w-3/4 sm:w-8/12 tb:h-56 ms:h-96 bg-neutral-700 text-neutral-50 rounded-lg flex items-center justify-center p-5 relative shadow-lg">
              <div className="grid grid-cols-1 place-items-center tb:flex tb:items-center text-justify">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover tb:mr-5 sm:mb-4 "
                />
                <div>
                  <h3 className="ms:text-base tb:text-lg lg:text-xl ms:text-center tb:text-justify font-bold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="ms:text-xs tb:text-sm lg:text-md ms:text-center tb:text-justify text-gray-300 mb-2">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="ms:text-sm tb:text-md lg:text-base leading-relaxed">
                    {testimonials[currentIndex].message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center relative mt-4">
              <button
                onClick={handlePrev}
                className="text-gray-600 text-2xl mx-3 hover:text-gray-800 transition"
              >
                <svg
                  className="h-8 w-8 text-gray-800"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-2.5 h-2.5 mx-1 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
              <button
                onClick={handleNext}
                className="text-gray-600 text-2xl mx-3 hover:text-gray-800 transition"
              >
                <svg
                  className="h-8 w-8 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
*/
};
export default Testimonials;
