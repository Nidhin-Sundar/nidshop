const TopSellingProductCard = ({ product }) => {
  return (
    <div className="flex p-1  mb-4">
      <img
        src={product.img}
        alt={product.title}
        className="w-24 h-24 rounded-lg mr-4"
      />
      <div className="flex-1">
        <h3 className="text-md font-semibold text-gray-700 hover:text-green-600">
          {product.title}
        </h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
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

        <div className="flex items-center mb-2">
          <p className="font-semibold" style={{ color: "#3BB77E" }}>
            ${product.price.toFixed(2)}
          </p>
          {product.oldPrice && (
            <p
              className="text-sm line-through ml-2"
              style={{ color: "#adadad" }}
            >
              ${product.oldPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSellingProductCard;
