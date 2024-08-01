const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      image: "/src/assets/images/products/product1.jpg",
      title: "Ulstra Bass Headphone",
      price: 238.85,
      oldPrice: 245.8,
      label: "Hot",
      discount: null,
    },
    {
      id: 2,
      image: "/src/assets/images/products/product2.jpg",
      title: "Smart Bluetooth Speaker",
      price: 138.85,
      oldPrice: 145.8,
      label: null,
      discount: "-12%",
    },
    {
      id: 3,
      image: "/src/assets/images/products/product3.jpg",
      title: "HomeSpeak 12UEA Goole",
      price: 738.85,
      oldPrice: 1245.8,
      label: "New",
      discount: null,
    },
    {
      id: 4,
      image: "/src/assets/images/products/product4.jpg",
      title: "Dadua Camera 4K 2024EF",
      price: 89.8,
      oldPrice: 98.8,
      label: "Hot",
      discount: null,
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold  p-4 mt-6" style={{ color: "#253D4E" }}>
        Related products
      </h2>
      <hr
        className="mb-0  w-20"
        style={{
          border: "1px solid #BCE3C9",
        }}
      />
      <hr className="mb-8 " style={{ color: "#ececec" }} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex flex-col items-center"
          >
            <div className="relative">
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
                    top: "-1rem",
                    left: "-1rem",
                  }}
                >
                  {product.label}
                </span>
              )}

              {product.discount && (
                <span
                  className="absolute top-0 left-0 bg-blue-400 text-white text-xs font-semibold rounded"
                  style={{
                    padding: "9px 26px 10px 21px",
                    borderRadius: "15px 0 20px 0",
                    top: "-1rem",
                    left: "-1rem",
                  }}
                >
                  {product.discount}
                </span>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full mb-4"
              />
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "#253D4E" }}
            >
              {product.title}
            </h3>
            <div className=" text-xl font-bold" style={{ color: "#3BB77E" }}>
              ${product.price.toFixed(2)}{" "}
              <span
                className="line-through text-lg"
                style={{ color: "#adadad" }}
              >
                ${product.oldPrice.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
