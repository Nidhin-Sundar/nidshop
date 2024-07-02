const ProductCard = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "src/assets/images/ima1.jpg",
      price: 29.99,
    },
    {
      id: 2,
      name: "Product 2",
      image: "src/assets/images/ima2.jpg",
      price: 49.99,
    },
    {
      id: 3,
      name: "Product 3",
      image: "src/assets/images/ima3.jpg",
      price: 29.99,
    },
    {
      id: 4,
      name: "Product 4",
      image: "src/assets/images/ima4.jpg",
      price: 49.99,
    },
    {
      id: 5,
      name: "Product 5",
      image: "src/assets/images/ima5.jpg",
      price: 29.99,
    },
    {
      id: 6,
      name: "Product 6",
      image: "src/assets/images/ima6.jpg",
      price: 49.99,
    },
  ];
  return (
    <div>
      <section className="products grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="product p-4 rounded-md shadow-md bg-black "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="p-4">
              <h2 className="text-white text-lg font-bold">{product.name}</h2>
              <p className="text-white">${product.price}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCard;
