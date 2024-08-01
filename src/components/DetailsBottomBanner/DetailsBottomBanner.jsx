export default function DetailsBottomBanner() {
  const slides = [
    {
      img: "/src/assets/images/bottomBanner/bottomBanner1.png",
      alt: "Slide 1",
      title: "Stay home & get your daily needs from our shop",
      description: "Start You'r Daily Shopping with Nest Mart",
      buttonText: "Subscribe",
    },
  ];

  return (
    <>
      <div>
        <div className="relative p-6">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="relative p-3 rounded-lg">
              <img
                className="w-full h-64 md:h-96 lg:h-[25rem] rounded-3xl object-cover"
                src={slide.img}
                alt={slide.alt}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:p-8">
                <div className="text-center md:text-left">
                  <h2
                    className="text-2xl md:text-4xl font-bold mb-4"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      color: "#253D4E",
                      fontWeight: 600,
                    }}
                  >
                    Stay home & get your daily
                    <span className="block">needs from our shop</span>
                  </h2>
                  <p
                    className="text-lg md:text-2xl mb-6"
                    style={{
                      color: "#7E7E7E",
                    }}
                  >
                    {slide.description}
                  </p>
                  <div className="flex flex-col md:flex-row items-center rounded-full">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-2 md:py-4 text-black rounded-t-full md:rounded-l-full md:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 md:py-4 text-white rounded-b-full md:rounded-r-full md:rounded-bl-none"
                      style={{ backgroundColor: "#3BB77E" }}
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/src/assets/images/bottomBanner/bottomBanner2.png"
                  alt="banner2"
                  className="absolute right-4 bottom-4 w-1/2 h-auto max-w-md md:w-[20rem] lg:w-[30rem]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
