import React from "react";
import hero from "../../assets/heroimage.png";
const OurHappyAdopters = () => {
  const cards = [
    {
      id: 1,
      title: "USer Name 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus, fugit minima modi ad cum consequatur ea. Perspiciatis, dolore beatae!.",
    },
    {
      id: 2,
      title: "USer Name 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus, fugit minima modi ad cum consequatur ea. Perspiciatis, dolore beatae!.",
    },
    {
      id: 3,
      title: "USer Name 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus, fugit minima modi ad cum consequatur ea. Perspiciatis, dolore beatae!.",
    },
    {
      id: 4,
      title: "USer Name 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus, fugit minima modi ad cum consequatur ea. Perspiciatis, dolore beatae!.",
    },
    {
      id: 5,
      title: "USer Name 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus, fugit minima modi ad cum consequatur ea. Perspiciatis, dolore beatae!.",
    },
    {
      id: 6,
      title: "USer Name 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus, fugit minima modi ad cum consequatur ea. Perspiciatis, dolore beatae!.",
    },
    {
      id: 7,
      title: "USer Name 7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus, fugit minima modi ad cum consequatur ea. Perspiciatis, dolore beatae!.",
    },
    {
      id: 8,
      title: "USer Name 8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus, fugit minima modi ad cum consequatur ea. Perspiciatis, dolore beatae!.",
    },
    {
      id: 9,
      title: "USer Name 9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus, fugit minima modi ad cum consequatur ea. Perspiciatis, dolore beatae!.",
    },
  ];

  const scroll = (direction) => {
    const container = document.getElementById("card-container");
    if (container) {
      const scrollAmount = container.firstChild.offsetWidth + 16; // card width + margin
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-8 bg-gradient-to-b from-gray-700 to-gray-700">
      <h2 className="text-[30px] sm:text-[40px] md:text-[50px] mb-6 text-center text-white font-bold font-[Oswald] pt-4">
        Our <span className="text-pink-500">Happy Adopters</span>
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white text-[20px] font-bold p-2 rounded-full z-10 shadow-md"
        >
          ◄
        </button>

        {/* Card Scroller */}
        <div
          id="card-container"
          className="flex space-x-4 overflow-x-auto px-4 hide-scrollbar"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-full sm:w-[25vw] max-w-sm h-auto p-4 bg-gray-400 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center font-[Oswald]"
            >
              <h3 className=" font-bold mb-2 text-white text-2xl">
                {card.title}
              </h3>
              <img
                src={hero}
                alt={`Image for ${card.title}`}
                className="w-[80%] h-[80%] mt-2 rounded-lg flex items-center"
              />
              <p className="text-white">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-[20px] font-bold text-white p-2 rounded-full z-10 shadow-md"
        >
          ►
        </button>
      </div>
    </div>
  );
};

export default OurHappyAdopters;
