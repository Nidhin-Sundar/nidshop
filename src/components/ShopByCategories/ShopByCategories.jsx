import { IoIosArrowForward } from "react-icons/io";
import ShopByCategoriesCard from "./ShopByCategoriesCard";
import Slider from "react-slick";

const ShopByCategories = () => {
  const settings = {
    dots: false, // Enable navigation dots
    infinite: true, // Enable continuous looping
    slidesToShow: 8, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per swipe/arrow click
    autoplay: true, // Enable autoplay (optional)
    speed: 2000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
  };
  const categories = [
    {
      img: "/src/assets/images/categories/category-1.svg",
      title: "Milk & Dairies",
    },
    {
      img: "/src/assets/images/categories/category-2.svg",
      title: "Wines & Alcohol",
    },
    {
      img: "/src/assets/images/categories/category-3.svg",
      title: "Clothing & Beauty",
    },
    {
      img: "/src/assets/images/categories/category-4.svg",
      title: "Pet Foods & Toy",
    },
    {
      img: "/src/assets/images/categories/category-5.svg",
      title: "Packaged fast food",
    },
    {
      img: "/src/assets/images/categories/category-6.svg",
      title: "Baking Material",
    },
    {
      img: "/src/assets/images/categories/category-7.svg",
      title: "Vegetables & tubers",
    },
    {
      img: "/src/assets/images/categories/category-8.svg",
      title: "Fresh Seafood",
    },
    {
      img: "/src/assets/images/categories/category-9.svg",
      title: "Noodles Rice",
    },
    {
      img: "/src/assets/images/categories/category-10.svg",
      title: "Fast food",
    },
    {
      img: "/src/assets/images/categories/category-11.svg",
      title: "Ice cream",
    },
  ];
  return (
    <div className="mt-10 container mx-auto mb-10">
      <div className="flex flex-row justify-between mt-4 mb-2 container mx-auto ">
        <div>
          <h2 className="text-3xl font-bold " style={{ color: "#253D4E" }}>
            Shop by Categories
          </h2>
        </div>

        <div>
          <div className="inline-flex  justify-center gap-x-1.5  px-6 py-3 text-gray-400   hover:text-green-600  ">
            All Categories
            <IoIosArrowForward
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400"
            />
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index}>
            <ShopByCategoriesCard category={category} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopByCategories;
