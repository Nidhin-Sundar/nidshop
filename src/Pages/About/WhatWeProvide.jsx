const cardData = [
  {
    icon: "src/assets/images/categories/category-1.svg",
    title: "Best Prices & Offers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    icon: "src/assets/images/categories/category-2.svg",
    title: "Wide Assortment",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    icon: "src/assets/images/categories/category-3.svg",
    title: "Free Delivery",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    icon: "src/assets/images/categories/category-4.svg",
    title: "Best Prices & Offers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    icon: "src/assets/images/categories/category-5.svg",
    title: "Wide Assortment",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    icon: "src/assets/images/categories/category-6.svg",
    title: "Free Delivery",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];

const WhatWeProvide = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl text-gray-900 font-bold text-center mb-8">
        What We Provide?
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-gray-200 p-4 rounded-lg"
          >
            <img src={card.icon} alt={card.title} className="w-16 h-16 mb-4" />
            <h3 className="text-lg text-gray-800 font-semibold">
              {card.title}
            </h3>
            <p className="text-gray-500 text-center">{card.description}</p>
            <button className="mt-4 px-4 py-2  text-green-500 ">
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeProvide;
