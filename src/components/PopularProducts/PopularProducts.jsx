import { IoCartOutline } from "react-icons/io5";

const products = [
  {
    img: "/src/assets/images/products/product1.jpg",
    img2: "/src/assets/images/products/product1.2.jpg",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4.0,
    reviewCount: 117,
    price: 28.85,
    oldPrice: 32.0,
    category: "Snack",
    label: "Hot",
    brand: "NestFood",
  },
  {
    img: "/src/assets/images/products/product2.jpg",
    img2: "/src/assets/images/products/product2.2.jpg",
    title: "All Natural Italian-Style Chicken Meatballs",
    rating: 3.5,
    price: 52.85,
    oldPrice: 55.0,
    category: "Hodo Foods",
    label: "Sale",
    brand: "NestFood",
  },
  {
    img: "/src/assets/images/products/product3.jpg",
    img2: "/src/assets/images/products/product3.2.jpg",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    rating: 4.0,
    reviewCount: 117,
    price: 48.85,
    oldPrice: 52.0,
    category: "Snack",
    label: "New",
    brand: "NestFood",
  },
  {
    img: "/src/assets/images/products/product4.jpg",
    img2: "/src/assets/images/products/product4.2.jpg",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rating: 4.0,
    reviewCount: 117,
    price: 17.85,
    oldPrice: 19.0,
    category: "Vegetables",
    label: "",
    brand: "NestFood",
  },
  {
    img: "/src/assets/images/products/product5.jpg",
    img2: "/src/assets/images/products/product5.2.jpg",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    rating: 4.0,
    reviewCount: 117,
    price: 23.85,
    oldPrice: 25.0,
    category: "Pet Foods",
    label: "-14%",
    brand: "NestFood",
  },
  {
    img: "/src/assets/images/products/product6.jpg",
    img2: "/src/assets/images/products/product6.2.jpg",
    title: "Chobani Complete Vanilla Greek Yogurt",
    rating: 4.0,
    reviewCount: 117,
    price: 54.85,
    oldPrice: 55.0,
    category: "Hodo Foods",
    label: "",
    brand: "NestFood",
  },
  {
    img: "/src/assets/images/products/product7.jpg",
    img2: "/src/assets/images/products/product7.2.jpg",
    title: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
    rating: 4.0,
    reviewCount: 117,
    price: 32.85,
    oldPrice: 33.9,
    category: "Meats",
    label: "Sale",
    brand: "NestFood",
  },
  {
    img: "/src/assets/images/products/product8.jpg",
    img2: "/src/assets/images/products/product8.2.jpg",
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    rating: 4.0,
    reviewCount: 117,
    price: 35.85,
    oldPrice: 37.8,
    category: "Snack",
    label: "",
    brand: "NestFood",
  },
  {
    img: "/src/assets/images/products/product9.jpg",
    img2: "/src/assets/images/products/product9.2.jpg",
    title: "Gorton’s Beer Battered Fish Fillets with soft paper",
    rating: 4.0,
    reviewCount: 117,
    price: 23.85,
    oldPrice: 25.0,
    category: "Coffees",
    label: "Hot",
    brand: "Old El Paso",
  },
  {
    img: "/src/assets/images/products/product10.jpg",
    img2: "/src/assets/images/products/product10.2.jpg",
    title: "Hagen-Dazs Caramel Cone Ice Cream Ketchup",
    rating: 2.0,
    price: 22.85,
    oldPrice: 24.0,
    category: "Cream",
    label: "",
    brand: "Tyson",
  },
];

export default function PopularProducts() {
  return (
    <section className="p-8 ml-28 mt-10">
      <div className="flex flex-row justify-between ">
        <div>
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#253D4E" }}>
            Popular Products
          </h2>
        </div>
        <div className="flex justify-start text-md space-x-0 mb-4 mr-24  ">
          <button className="px-4 py-2 transition duration-300 hover:text-green-600 hover:mb-2">
            All
          </button>

          <button className="px-3 py-2 hover:text-green-600  hover:mb-2">
            Milks & Dairies
          </button>
          <button className="px-3 py-2  hover:text-green-600  hover:mb-2">
            Coffees & Teas
          </button>
          <button className="px-3 py-2 hover:text-green-600  hover:mb-2">
            Pet Foods
          </button>
          <button className="px-3 py-2 hover:text-green-600  hover:mb-2">
            Meats
          </button>
          <button className="px-3 py-2 hover:text-green-600  hover:mb-2">
            Vegetables
          </button>
          <button className="px-3 py-2 hover:text-green-600  hover:mb-2">
            Fruits
          </button>
        </div>
      </div>
      <div className="container grid grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 shadow-sm relative"
          >
            {product.label && (
              <span
                className={`absolute top-0 left-0  text-white text-xs font-semibold rounded ${
                  product.label === "Hot"
                    ? "bg-pink-500"
                    : product.label === "Sale"
                    ? "bg-blue-400"
                    : product.label === "New"
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
            <div className="group ">
              <img
                className="h-60 mx-auto mb-4 group-hover:hidden"
                src={product.img}
                alt={product.title}
              />

              <img
                className="h-60 mx-auto mb-4 hidden group-hover:block" // Use group-hover for visibility toggle
                src={product.img2}
                alt={product.title}
              />
            </div>
            <h6 className="text-sm mb-2" style={{ color: "#adadad" }}>
              {product.category}
            </h6>
            <h3
              className="text-md font-semibold mb-2"
              style={{ color: "#253D4E" }}
            >
              {product.title}
            </h3>
            <div className="flex items-center mb-2">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p
                className="ms-1 text-sm font-medium  "
                style={{ color: "#B6B6B6" }}
              >
                ( {product.rating})
              </p>
            </div>
            <p
              className="flex gap-1 mb-6 text-sm"
              style={{ color: "#B6B6B6 " }}
            >
              By
              <h2 className="text-sm" style={{ color: "#3BB77E" }}>
                {product.brand}
              </h2>
            </p>

            <div className="flex gap-16">
              <div className="flex items-center mb-2 gap-3">
                <p className="font-semibold mb-2" style={{ color: "#3BB77E" }}>
                  ${product.price.toFixed(2)}
                </p>
                {product.oldPrice && (
                  <p
                    className="text-sm line-through mb-2"
                    style={{ color: "#adadad " }}
                  >
                    ${product.oldPrice.toFixed(2)}
                  </p>
                )}
              </div>

              <button className="w-24 h-8 bg-custom-green text-green-600 font-medium py-1 rounded-md flex items-center justify-center hover:bg-custom-green1 hover:text-white">
                <IoCartOutline className="h-5 w-6 mr-2" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
