const ProductDetails = () => {
  const detail = {
    name: "Awesome Product",
    image: "src/assets/images/ima1.jpg",
    price: 49.99,
    description: "A detailed description of the product.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    gallery: ["src/assets/images/ima2.jpg", "src/assets/images/ima3.jpg"],
  };

  const formatPrice = (price) => price.toFixed(2);

  return (
    <section className="product-details container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="product-image">
          <img
            src={detail.image}
            alt={detail.name}
            className="w-full rounded-lg object-cover"
          />
          {detail.gallery && <div className="product-gallery"></div>}
        </div>
        <div className="product-info p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-bold mb-4">{detail.name}</h2>
          <div className="flex items-center mb-4">
            <p className="text-black mr-4">Price:</p>
            <span className="text-lg font-bold">
              ${formatPrice(detail.price)}
            </span>
          </div>
          <p className="text-black mb-4">{detail.description}</p>
          {detail.features && (
            <>
              <h3>Features</h3>
              <ul className="list-disc ml-4">
                {detail.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
