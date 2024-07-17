const promoItems = [
  {
    img: "/src/assets/images/promo/promo1.png",
    title: "Everyday Fresh & Clean with Our Products",
    buttonText: "Shop Now",
    buttonLink: "#",
  },
  {
    img: "/src/assets/images/promo/promo2.png",
    title: "Make your Breakfast Healthy and Easy",
    buttonText: "Shop Now",
    buttonLink: "#",
  },
  {
    img: "/src/assets/images/promo/promo3.png",
    title: "The best Organic Products Online",
    buttonText: "Shop Now",
    buttonLink: "#",
  },
];

export default function PromoSection() {
  return (
    <section
      className="flex justify-between   space-x-4"
      style={{ paddingLeft: "8rem", paddingTop: "3rem", paddingRight: "5rem" }}
    >
      {promoItems.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col justify-end bg-contain  rounded-lg  p-6"
          style={{
            backgroundImage: `url(${item.img})`,
            height: "300px",
          }}
        >
          <div className="relative  p-12 ">
            <h3
              className="text-2xl font-bold mb-10 "
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: "#253D4E",
                fontWeight: 700,
              }}
            >
              {item.title}
            </h3>
            <a
              href={item.buttonLink}
              className="px-4 py-2  text-white rounded-lg hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              style={{ backgroundColor: "#3BB77E" }}
            >
              {item.buttonText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
