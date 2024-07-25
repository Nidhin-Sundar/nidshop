import Slider from "react-slick";
import { IoCartOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DailyBestSells() {
  const settings = {
    dots: false, // Enable navigation dots
    infinite: true, // Enable continuous looping
    speed: 600, // Slide transition speed in milliseconds
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe/arrow click
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 2000, // Autoplay interval in milliseconds (optional)
  };
  const products = [
    {
      img: "/src/assets/images/products/product1.jpg",
      // img2: "/src/assets/images/products/product1.2.jpg",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      rating: 4.0,
      reviewCount: 117,
      price: 28.85,
      oldPrice: 32.0,
      category: "Snack",
      label: "Sale",
      brand: "NestFood",
    },
    {
      img: "/src/assets/images/products/product2.jpg",
      // img2: "/src/assets/images/products/product2.2.jpg",
      title: "All Natural Italian-Style Chicken Meatballs",
      rating: 3.5,
      price: 52.85,
      oldPrice: 55.0,
      category: "Hodo Foods",
      label: "Best Sale",
      brand: "NestFood",
    },
    {
      img: "/src/assets/images/products/product3.jpg",
      // img2: "/src/assets/images/products/product3.2.jpg",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      rating: 4.0,
      reviewCount: 117,
      price: 48.85,
      oldPrice: 52.0,
      category: "Snack",
      label: "Save 15%",
      brand: "NestFood",
    },
    {
      img: "/src/assets/images/products/product4.jpg",
      // img2: "/src/assets/images/products/product4.2.jpg",
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      rating: 4.0,
      reviewCount: 117,
      price: 17.85,
      oldPrice: 19.0,
      category: "Vegetables",
      label: "Save 15%",
      brand: "NestFood",
    },
    {
      img: "/src/assets/images/products/product5.jpg",
      // img2: "/src/assets/images/products/product5.2.jpg",
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      rating: 4.0,
      reviewCount: 117,
      price: 23.85,
      oldPrice: 25.0,
      category: "Pet Foods",
      label: "Save 35%",
      brand: "NestFood",
    },
  ];

  return (
    <>
      <div className="mb-2 container mx-auto">
        <div className="flex flex-row justify-between ">
          <div>
            <h2 className="text-3xl font-bold " style={{ color: "#253D4E" }}>
              Daily Best Sells
            </h2>
          </div>
          <div className="flex justify-start text-md space-x-0 mr-24  ">
            <button className="px-4 py-2 transition duration-300 hover:text-green-600 hover:mb-2">
              Featured
            </button>

            <button className="px-3 py-2 hover:text-green-600  hover:mb-2">
              Popular
            </button>
            <button className="px-3 py-2  hover:text-green-600  hover:mb-2">
              New Added
            </button>
          </div>
        </div>
        <section className="hero flex">
          <div className="w-96 h-[37rem]  relative flex justify-center items-center">
            <img
              src="/src/assets/images/bestDeals/bestDeals.png"
              alt="Additional"
              className="rounded-2xl mr-12"
            />
            <div>
              <div
                className="absolute text-start"
                style={{
                  top: "27%",
                  left: "6%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                }}
              >
                <span
                  className="text-4xl block"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "#253D4E",
                    fontWeight: 700,
                  }}
                >
                  Bring nature
                </span>
                <span
                  className="text-4xl "
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "#253D4E",
                    fontWeight: 700,
                  }}
                >
                  into your
                </span>

                <span
                  className="text-4xl block"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "#253D4E",
                    fontWeight: 700,
                  }}
                >
                  home
                </span>
              </div>
              <div
                className="absolute text-start"
                style={{
                  top: "60%",
                  left: "6%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                }}
              >
                <button
                  className=" px-4 py-2 text-white rounded-md "
                  style={{ backgroundColor: "#3BB77E" }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-9/12 relative p-6">
            {" "}
            <Slider {...settings}>
              {products.map((product, index) => (
                <div key={index}>
                  <div className="border rounded-2xl p-4 shadow-sm relative w-64 h-[34rem]">
                    {product.label && (
                      <span
                        className={`absolute top-0 left-0 text-white text-xs font-semibold rounded ${
                          product.label === "Save 15%"
                            ? "bg-pink-500"
                            : product.label === "Sale"
                            ? "bg-blue-400"
                            : product.label === "Save 35%"
                            ? "bg-teal-500"
                            : "bg-orange-400"
                        }`}
                        style={{
                          padding: "9px 26px 10px 21px",
                          borderRadius: "15px 0 20px 0",
                        }}
                      >
                        {product.label}
                      </span>
                    )}
                    <img
                      className="h-60 mx-auto mb-4"
                      src={product.img}
                      alt={product.title}
                    />
                    <h6
                      className="text-sm w- mb-2"
                      style={{ color: "#adadad" }}
                    >
                      {product.category}
                    </h6>
                    <h3
                      className="text-md font-semibold mb-2"
                      style={{ color: "#253D4E" }}
                    >
                      {product.title}
                    </h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((star, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.round(product.rating)
                              ? "text-yellow-300"
                              : "text-gray-300"
                          } me-1`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                      <p
                        className="ms-1 text-sm font-medium"
                        style={{ color: "#B6B6B6" }}
                      >
                        ({product.rating})
                      </p>
                    </div>
                    <p
                      className="flex gap-1 mb-6 text-sm"
                      style={{ color: "#B6B6B6" }}
                    >
                      By
                      <span className="text-sm" style={{ color: "#3BB77E" }}>
                        {product.brand}
                      </span>
                    </p>
                    <div className=" justify-between items-center mb-2 gap-3">
                      <div className="flex items-center">
                        <p
                          className="font-semibold"
                          style={{ color: "#3BB77E" }}
                        >
                          ${product.price.toFixed(2)}
                        </p>
                        {product.oldPrice && (
                          <p
                            className="ml-3 text-sm line-through"
                            style={{ color: "#adadad" }}
                          >
                            ${product.oldPrice.toFixed(2)}
                          </p>
                        )}
                      </div>
                      <button className="w-full h-10 mt-2 bg-custom-green1 text-white font-medium py-1 rounded-md flex items-center justify-center hover:bg-yellow-500 hover:text-white">
                        <IoCartOutline className="h-5 w-6 mr-2" />
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
}
