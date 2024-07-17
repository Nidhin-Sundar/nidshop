import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Health = () => {
  const settings = {
    dots: false, // Enable navigation dots
    infinite: true, // Enable continuous looping
    speed: 500, // Slide transition speed in milliseconds
    slidesToShow: 6, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe/arrow click
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 2000, // Autoplay interval in milliseconds (optional)
  };

  const slides = [
    {
      img: "src/assets/images/ima1.jpg",
      alt: "Slide 1 description",
      caption: "Min 50% off",
    },
    {
      img: "src/assets/images/ima2.jpg",
      alt: "Slide 2 description",
      caption: "Min 20% off",
    },
    {
      img: "src/assets/images/ima3.jpg",
      alt: "Slide 3 description",
      caption: "Min 60% off",
    },
    {
      img: "src/assets/images/ima4.jpg",
      alt: "Slide 4 description",
      caption: "Min 30% off",
    },
    {
      img: "src/assets/images/ima5.jpg",
      alt: "Slide 5 description",
      caption: "Min 50% off",
    },
    {
      img: "src/assets/images/ima6.jpg",
      alt: "Slide 6 description",
      caption: "Min 40% off",
    },
  ];

  return (
    <section className="hero">
      <div className="container mx-auto px-4 py-2 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-black ">Health and Fitness</h1>
      </div>
      <Slider {...settings}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="p-4">
            <img
              style={{ height: "300px" }}
              className="w-full rounded-lg "
              src={slide.img}
              alt={slide.alt}
            />

            {slide.caption && (
              <h3 className="text-xl  text-center ">{slide.caption}</h3>
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default Health;
