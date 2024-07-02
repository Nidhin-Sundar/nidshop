import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Enable continuous looping
    speed: 500, // Slide transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe/arrow click
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 2000, // Autoplay interval in milliseconds (optional)
  };

  const slides = [
    {
      img: "src/assets/images/ima1.jpg",
      alt: "Slide 1 description",
      caption: "Slide 1 Title",
    },
    {
      img: "src/assets/images/ima2.jpg",
      alt: "Slide 2 description",
      caption: "Slide 2 Title",
    },
    {
      img: "src/assets/images/ima3.jpg",
      alt: "Slide 3 description",
      caption: "Slide 3 Title",
    },
    {
      img: "src/assets/images/ima4.jpg",
      alt: "Slide 4 description",
      caption: "Slide 4 Title",
    },
    {
      img: "src/assets/images/ima5.jpg",
      alt: "Slide 5 description",
      caption: "Slide 5 Title",
    },
    {
      img: "src/assets/images/ima6.jpg",
      alt: "Slide 6 description",
      caption: "Slide 6 Title",
    },
  ];

  return (
    <section className="hero min-h-screen">
      <Slider {...settings}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="p-4">
            <img
              style={{ height: "600px" }}
              className="w-full rounded-lg object-cover"
              src={slide.img}
              alt={slide.alt}
            />

            {slide.caption && (
              <h3 className="text-xl font-bold text-center mt-4">
                {slide.caption}
              </h3>
            )}
          </div>
        ))}
      </Slider>
      <div className="container mx-auto px-4 py-24 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-black mb-8">
          Welcome to NidShop
        </h1>
        <p className="text-xl text-black  mb-4">
          Find all your favorite products here!
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Shop Now
        </button>
      </div>
    </section>
  );
};
export default Hero;
