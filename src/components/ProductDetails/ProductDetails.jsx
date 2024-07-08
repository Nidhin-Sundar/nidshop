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
          <h2 className="text-lg font-bold mb-4">{productData?.name}</h2>
          <div className="flex items-center mb-4">
            <p className="text-black mr-4">Price:</p>
            <span className="text-lg font-bold">
              ${formatPrice(productData?.price)}
            </span>
          </div>
          <p className="text-black mb-4">{productData?.description}</p>
          {productData?.features && (
            <>
              <h3>Features</h3>
              <ul className="list-disc ml-4">
                {productData.features.map((feature) => (
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
