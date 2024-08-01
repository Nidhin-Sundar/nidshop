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
    <section className="p-6 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {promoItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-end bg-cover bg-center rounded-lg p-6"
            style={{
              backgroundImage: `url(${item.img})`,
              height: "300px",
            }}
          >
            <div className="relative p-4 md:p-6">
              <h3
                className="text-lg md:text-xl lg:text-2xl font-bold mb-4"
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
                className="px-4 py-2 text-white rounded-lg hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                style={{ backgroundColor: "#3BB77E" }}
              >
                {item.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
