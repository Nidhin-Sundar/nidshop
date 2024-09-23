import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useState, useEffect } from "react";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import DetailsBottomBanner from "../../components/DetailsBottomBanner/DetailsBottomBanner";
import DetailsOffersSection from "../../components/Offers/DetailsOffersSection/DetailsOffersSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const userEmail = localStorage.getItem("userEmail"); // Make sure this is set when the user logs in
  const cartKey = `cartProducts_${userEmail}`;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem(cartKey)) || [];
    const existingProduct = cartProducts.find((product) => product.id == id);
    setIsAdded(!!existingProduct);
  }, [id, cartKey]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const cartProducts = JSON.parse(localStorage.getItem(cartKey)) || [];
    const existingProduct = cartProducts.find((product) => product.id == id);

    if (!existingProduct) {
      cartProducts.push({
        id: productData.id,
        title: productData.title,
        price: productData.price,
        quantity,
        image: productData.image,
      });
      localStorage.setItem(cartKey, JSON.stringify(cartProducts));
      setIsAdded(true);
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <hr className="mb-20" />
      <div className="p-4 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="w-[35rem]">
            <img
              src={productData?.image}
              alt="Product"
              className="w-[35rem] h-[40rem] p-10 border border-gray-200 rounded-3xl"
            />
            <div className="flex space-x-2 mt-4">
              <img
                src="/src/assets/images/details/thumbnail1.jpg"
                alt="Thumbnail"
                className="w-16 h-16 border rounded-md"
              />
              <img
                src="/src/assets/images/details/thumbnail2.jpg"
                alt="Thumbnail"
                className="w-16 h-16 border rounded-md"
              />
              <img
                src="/src/assets/images/details/thumbnail3.jpg"
                alt="Thumbnail"
                className="w-16 h-16 border rounded-md"
              />
              <img
                src="/src/assets/images/details/thumbnail4.jpg"
                alt="Thumbnail"
                className="w-16 h-16 border rounded-md"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="p-10">
            <h1 className="text-5xl font-bold" style={{ color: "#253D4E" }}>
              {productData?.title}
            </h1>
            <p
              className="text-6xl font-bold py-12"
              style={{ color: "#3BB77E" }}
            >
              ${productData?.price}{" "}
              <span
                className="line-through text-3xl"
                style={{ color: "#7E7E7E" }}
              >
                ${productData?.oldPrice}
              </span>
            </p>
            <p className="mt-2" style={{ color: "#7E7E7E" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              rem officia, corrupti reiciendis minima nisi modi, quasi, odio
              minus dolore impedit fuga eum eligendi.
            </p>
            <div className="flex items-center gap-10 mt-4 px-6">
              <div className="flex items-center border border-green-500 rounded-md p-2">
                <span className="text-lg font-bold mx-2">{quantity}</span>
                <div className="flex flex-col">
                  <button className="text-sm" onClick={handleIncrement}>
                    <IoMdArrowDropup />
                  </button>
                  <button
                    className="text-sm"
                    onClick={handleDecrement}
                    disabled={quantity === 1}
                  >
                    <IoMdArrowDropdown />
                  </button>
                </div>
              </div>
              {isAdded ? (
                <Link to="/cart">
                  <button className="text-white py-2 px-4 rounded-md bg-orange-600">
                    Go to cart
                  </button>
                </Link>
              ) : (
                <button
                  className="text-white py-2 px-4 rounded-md"
                  style={{ backgroundColor: "#3bb77e" }}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              )}
            </div>
            <Link to="/">
              <div>
                <button
                  className="text-white py-2 px-12 ml-6 mt-20 rounded-md"
                  style={{ backgroundColor: "#3bb77e" }}
                >
                  Back to Products
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-6 border border-gray-200 p-4 rounded-xl">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-green-500 text-green-500"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "additional-info"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("additional-info")}
              >
                Additional Info
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "vendor"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("vendor")}
              >
                Vendor
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "reviews"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews (3)
              </button>
            </nav>
          </div>
          <div className="mt-4">
            {activeTab === "description" && (
              <div>
                <p className="" style={{ color: "#7E7E7E" }}>
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart. Spluttered narrowly yikes left
                  moth in yikes bowed this that grizzly much hello on spoon-fed
                  that alas rethought much decently richly and wow against the
                  frequent fluidly at formidable acceptably flapped besides and
                  much circa far over the bucolically hey precarious goldfinch
                  mastodon goodness gnashed a jellyfish and one however because.
                </p>
                <div className="flex gap-20 ">
                  <ul className="mt-6  space-y-6" style={{ color: "#7E7E7E" }}>
                    <li>Type Of Packing</li>
                    <li>Color</li>
                    <li>Quantity Per Case</li>
                    <li>Ethyl Alcohol</li>
                    <li>Piece In One</li>
                  </ul>
                  <ul className="mt-6  space-y-6" style={{ color: "#7E7E7E" }}>
                    <li> Bottle</li>
                    <li> Green, Pink, Powder Blue, Purple</li>
                    <li> 100ml</li>
                    <li> 70%</li>
                    <li> Carton</li>
                  </ul>
                </div>
                <hr className="my-6" />
                <p className="mt-6" style={{ color: "#7E7E7E" }}>
                  Lacinia mollis aliquam ut porttitor leo a diam. Lectus
                  vestibulum mattis ullamcorper velit sed. Nisl rhoncus mattis
                  rhoncus urna neque viverra justo nec. Tempor orci dapibus
                  ultrices in iaculis nunc sed augue. Ipsum dolor sit amet
                  consectetur adipiscing elit pellentesque habitant morbi.
                  Sapien faucibus et molestie ac feugiat sed lectus vestibulum
                  mattis. Nisl purus in mollis nunc sed id semper risus in.
                  Elementum facilisis leo vel fringilla est ullamcorper eget
                  nulla. Faucibus pulvinar elementum integer enim neque volutpat
                  ac tincidunt. Nisl rhoncus mattis rhoncus urna. Id volutpat
                  lacus laoreet non curabitur gravida.
                </p>
              </div>
            )}
            {activeTab === "additional-info" && (
              <div>
                <p className="" style={{ color: "#7E7E7E" }}>
                  Additional information about the product can go here. It might
                  include specifications, warranty details, and more.
                </p>
              </div>
            )}
            {activeTab === "vendor" && (
              <div>
                <p className="" style={{ color: "#7E7E7E" }}>
                  Information about the vendor, their reputation, and more
                  details can be listed here.
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <p className="" style={{ color: "#7E7E7E" }}>
                  Customer reviews can be displayed here. Include ratings,
                  comments, and feedback.
                </p>
              </div>
            )}
          </div>
        </div>
        <RelatedProducts />
      </div>
      <DetailsBottomBanner />
      <DetailsOffersSection />
      <Footer />
    </>
  );
};

export default ProductDetails;
