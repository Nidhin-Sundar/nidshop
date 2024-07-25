export default function BottomBanner() {
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
        <div className="  relative p-6">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="relative p-3 rounded-lg ">
              <img
                className="w-[97rem] h-[25rem] rounded-3xl ml-28"
                src={slide.img}
                alt={slide.alt}
              />
              <div className="absolute inset-0">
                <div
                  className="absolute text-center"
                  style={{
                    top: "50%",
                    left: "24%",
                    transform: "translate(-50%, -50%)",
                    color: "#fff",
                  }}
                >
                  <h2
                    className="text-4xl font-bold mb-4"
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
                    className="text-2xl mb-6"
                    style={{
                      color: "#7E7E7E",
                    }}
                  >
                    {slide.description}{" "}
                  </p>
                  <div className="flex items-center rounded-full">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-4 text-black rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                      type="submit"
                      className="px-6 py-4 text-white rounded-r-full"
                      style={{ backgroundColor: "#3BB77E" }}
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="/src/assets/images/bottomBanner/bottomBanner2.png"
                    alt="banner2"
                    className="w-[40rem] h-[21rem] ml-[60rem] mt-[76px] "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
