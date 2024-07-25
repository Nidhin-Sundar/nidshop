import { IoCartOutline } from "react-icons/io5";
import CountdownTimer from "../../comp/CountdownTimer/CountdownTimer";

export default function DealsofDayCard({ product }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 6000000); // Set your desired time here

  return (
    <div
      className="mb-2 container mx-auto"
      style={{ marginRight: "11rem", marginBottom: "12rem" }}
    >
      <div
        className="relative w-full h-96 bg-cover bg-center rounded-2xl space-x-4"
        style={{
          backgroundImage: `url(${product.img})`,
          width: "360px",
          height: "320px",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-52 left-1/2 transform -translate-x-1/2">
          <CountdownTimer expiryTimestamp={time} />
        </div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-lg rounded-2xl p-6 w-80">
          <h3 className="text-md font-semibold mb-1  text-gray-700 hover:text-green-600">
            {product.title}
          </h3>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((star, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(product.rating)
                    ? "text-yellow-400"
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
            <p className="text-sm font-medium text-gray-500 ml-1">
              ({product.rating})
            </p>
          </div>
          <p className="flex gap-1 mb-6 text-sm" style={{ color: "#B6B6B6" }}>
            By
            <span className="text-sm" style={{ color: "#3BB77E" }}>
              {product.brand}
            </span>
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
      </div>
    </div>
  );
}
