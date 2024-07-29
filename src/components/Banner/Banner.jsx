import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Enable continuous looping
    speed: 800, // Slide transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe/arrow click
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 2000, // Autoplay interval in milliseconds (optional)
  };

  const slides = [
    {
      img: "/src/assets/images/banner/banner1.png",
      alt: "Slide 1",
      title: "Snacks box daily save",
      description: "Save up to 50% off on your first order",
      buttonText: "Subscribe",
    },
    {
      img: "/src/assets/images/banner/banner2.png",
      alt: "Slide 2",
      title: "Fresh deliveries",
      description: "Sign up for the daily newsletter",
      buttonText: "Subscribe",
    },
  ];

  return (
    <>
      <div>
        <section
          className="hero flex"
          style={{
            backgroundImage: "url('/src/assets/images/banner/bannerbg.png')",
          }}
        >
          <div className="w-2/3 relative p-6">
            <Slider {...settings}>
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="relative p-3 rounded-lg ">
                  <img
                    style={{ height: "550px", width: "90%" }}
                    className="rounded-3xl ml-24"
                    src={slide.img}
                    alt={slide.alt}
                  />
                  <div
                    className="absolute text-center"
                    style={{
                      top: "50%",
                      left: "30%",
                      transform: "translate(-50%, -50%)",
                      color: "#fff",
                    }}
                  >
                    <h2
                      className="text-6xl font-bold mb-4"
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        color: "#253D4E",
                        fontWeight: 700,
                      }}
                    >
                      Snacks box <span className="block">daily save</span>
                    </h2>
                    <p
                      className="text-2xl mb-6"
                      style={{
                        color: "#7E7E7E",
                      }}
                    >
                      Sign up for the daily newsletter order
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
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-1/3 relative flex justify-center items-center">
            <img
              src="/src/assets/images/banner/banner3.png"
              alt="Additional"
              style={{ height: "550px", width: "80% " }}
              className="rounded-2xl mr-12"
            />
            <div
              className="absolute text-center"
              style={{
                top: "45%",
                left: "20%",
                transform: "translateY(-50%)",
                color: "#fff",
              }}
            >
              <div>
                <span
                  className="text-4xl block"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "#253D4E",
                    fontWeight: 700,
                  }}
                >
                  Delivered
                </span>
                <span
                  className="text-4xl "
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "#253D4E",
                    fontWeight: 700,
                  }}
                >
                  to your
                </span>

                <span
                  className="text-4xl block"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "#3BB77E",
                    fontWeight: 700,
                  }}
                >
                  home
                </span>
              </div>
              <button
                className="mt-4 px-4 py-2 text-white rounded-lg"
                style={{ backgroundColor: "#3BB77E" }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
