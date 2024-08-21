import { IoCartOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PopularProducts() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const filteredProducts = categoryId
    ? products.filter((product) => product.category === categoryId)
    : products;

  return (
    <section
      className="  mt-10 md:px-8 lg:px-12"
      style={{ paddingLeft: "8rem", paddingRight: "5rem" }}
    >
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredProducts.map(
          (product) => (
            console.log(filteredProducts, "dfsdf", product.id),
            (
              <Link key={product.id} to={`/details/${product.id}`}>
                <div
                  key={product.id}
                  className="border rounded-2xl p-4 shadow-sm relative "
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
                      src={product.image}
                      alt={product.title}
                    />

                    <img
                      className="h-60 mx-auto mb-4 hidden group-hover:block"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <h6 className="text-sm mb-2" style={{ color: "#adadad" }}>
                    {product.category}
                  </h6>
                  <h3
                    className="p-4 text-md font-semibold mb-2"
                    style={{ color: "#253D4E" }}
                  >
                    {product.title.slice(0, 23)}
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
                      <span>
                        {product.rating.rate} stars ({product.rating.count}{" "}
                        reviews)
                      </span>
                    </p>
                  </div>
                  <p
                    className="flex gap-1 mb-6 text-sm"
                    style={{ color: "#B6B6B6 " }}
                  >
                    By
                    <h2 className="text-sm" style={{ color: "#3BB77E" }}>
                      {product.description.slice(0, 50)}...
                    </h2>
                  </p>

                  <div className="flex gap-16">
                    <div className="flex items-center mb-2 gap-3">
                      <p
                        className="font-semibold mb-2"
                        style={{ color: "#3BB77E" }}
                      >
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
              </Link>
            )
          )
        )}
      </div>
    </section>
  );
}
