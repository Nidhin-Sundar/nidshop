import { useParams } from "react-router-dom";

const ProductDetails = ({ allProducts }) => {
  const { productId } = useParams();
  console.log("Product ID:", productId);

  console.log("🚀 ~ ProductDetails ~ allProducts:", allProducts);
  const productData = allProducts?.find(
    (allProduct) => allProduct.name == productId
  );

  console.log("productData:", productData);

  const formatPrice = (price) => price?.toFixed(2);

  return (
    <section className="product-details container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="product-image">
          <img
            src={productData?.image}
            alt={productData?.name}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="product-info p-4 rounded-lg shadow-md bg-white">
          <h2 className="font-bold mb-4 text-4xl">{productData?.name}</h2>
          <div className="flex items-center mb-4">
            <p className="font-bold  text-black text-lg mr-4">Price:</p>
            <span className="text-lg font-bold">
              ${formatPrice(productData?.price)}
            </span>
          </div>
          <p className="mt-8 font-bold text-black mb-12">
            {productData?.description}
          </p>
          {productData?.features && (
            <>
              <h3 className="mt-8 font-bold text-black ">Features:</h3>
              <ul className="list-disc ml-4 mt-4 font-bold text-black">
                {productData.features.map((feature) => (
                  <li className="mt-4" key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="button-container  flex flex-col justify-between mt-60">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black">
              Add to Cart
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
