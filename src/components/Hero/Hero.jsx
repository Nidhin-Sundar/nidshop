import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Enable continuous looping
    speed: 600, // Slide transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe/arrow click
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 2000, // Autoplay interval in milliseconds (optional)
  };

  const slides = [
    {
      img: "src/assets/images/hero/hero1.jpg",
      title: "Slide 1 description",
      caption: "Slide 1 Title",
    },
    {
      img: "src/assets/images/hero/hero2.jpg",
      title: "Slide 2 description",
      caption: "Slide 2 Title",
    },
    {
      img: "src/assets/images/hero/hero3.jpg",
      title: "Slide 3 description",
      caption: "Slide 3 Title",
    },
    {
      img: "src/assets/images/hero/hero4.jpg",
      title: "Slide 4 description",
      caption: "Slide 4 Title",
    },
    {
      img: "src/assets/images/hero/hero5.jpg",
      title: "Slide 5 description",
      caption: "Slide 5 Title",
    },
    {
      img: "src/assets/images/hero/hero6.jpg",
      title: "Slide 6 description",
      caption: "Slide 6 Title",
    },
  ];

  return (
    <section className="hero mb-16 bg-black ">
      <Slider {...settings}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="p-4 rounded-lg shadow-md">
            <div key={slideIndex} className="p-4">
              <img
                style={{ height: "300px" }}
                className="w-full rounded-lg "
                src={slide.img}
                alt={slide.alt}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default Hero;
