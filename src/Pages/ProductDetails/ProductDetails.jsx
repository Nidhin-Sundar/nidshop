import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

import { useState } from "react";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import DetailsBottomBanner from "../../components/DetailsBottomBanner/DetailsBottomBanner";
import DetailsOffersSection from "../../components/Offers/DetailsOffersSection/DetailsOffersSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <Navbar />
      <hr className="mb-20" />
      <div className="p-4 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            <img
              src="/src/assets/images/details/details1.jpg"
              alt="Product"
              className="w-full  border border-gray-200 rounded-3xl"
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
            <h1 className="text-5xl font-bold " style={{ color: "#253D4E" }}>
              Seeds of Change Organic Quinoa, Brown
            </h1>
            <p
              className=" text-6xl font-bold py-12"
              style={{ color: "#3BB77E" }}
            >
              $38{" "}
              <span
                className="line-through text-3xl "
                style={{ color: "#7E7E7E" }}
              >
                $52
              </span>
            </p>
            <p className="mt-2 " style={{ color: "#7E7E7E" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              rem officia, corrupti reiciendis minima nisi modi, quasi, odio
              minus dolore impedit fuga eum eligendi.{" "}
            </p>
            <div className="flex items-center gap-10 mt-4 px-6">
              <div
                className="flex   
 items-center border border-green-500 rounded-md p-2"
              >
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
              <button
                className="  text-white py-2 px-4 rounded-md"
                style={{ backgroundColor: "#3BB77E" }}
              >
                Add to cart
              </button>
            </div>
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
                <hr className="my-6" style={{ color: "#7E7E7E" }} />
                <p className="mt-4" style={{ color: "#7E7E7E" }}>
                  Laconic overheard dear woodchuck wow this outrageously taut
                  beaver hey hello far meadowlark imitatively egregiously hugged
                  that yikes minimally unanimous pouted flirtatiously as beaver
                  beheld above forward energetic across this jeepers
                  beneficently cockily less a the raucously that magic upheld
                  far so the this where crud then below after jeez enchanting
                  drunkenly more much wow callously irrespective limpet.
                </p>
                <h3 className="my-6 text-3xl" style={{ color: "#253D4E" }}>
                  Packaging & Delivery
                </h3>
                <hr className="my-6" />
                <p className="mt-4 " style={{ color: "#7E7E7E" }}>
                  Less lion goodness that euphemistically robin expeditiously
                  bluebird smugly scratched far while thus cackled sheepishly
                  rigid after due one assenting regarding censorious while
                  occasional or this more crane went more as this less much amid
                  overhung anathematic because much held one exuberantly sheep
                  goodness so where rat wry well concomitantly. Scallop or far
                  crud plain remarkably far by thus far iguana lewd precociously
                  and and less rattlesnake contrary caustic wow this near alas
                  and next and pled the yikes articulate about as less cackled
                  dalmatian in much less well jeering for the thanks blindly
                  sentimental whimpered less across objectively fanciful
                  grimaced wildly some wow and rose jeepers outgrew lugubrious
                  luridly irrationally attractively dachshund.
                </p>

                <h3 className="my-6 text-3xl" style={{ color: "#253D4E" }}>
                  Suggested Use
                </h3>
                <hr className="my-6" />
                <p className="mt-4 " style={{ color: "#7E7E7E" }}>
                  <ul>
                    <li>Refrigeration not necessary.</li>
                    <li> Stir before serving</li>
                  </ul>
                </p>

                <h3 className="my-6 text-3xl" style={{ color: "#253D4E" }}>
                  Other Ingredients
                </h3>
                <hr className="my-6" />
                <p className="mt-4 " style={{ color: "#7E7E7E" }}>
                  <ul>
                    <li>Organic raw pecans, organic raw cashews. </li>
                    <li>
                      This butter was produced using a LTG (Low Temperature
                      Grinding) process
                    </li>
                    <li>
                      Made in machinery that processes tree nuts but does not
                      process peanuts, gluten, dairy or soy
                    </li>
                  </ul>
                </p>

                <h3 className="my-6 text-3xl" style={{ color: "#253D4E" }}>
                  Warnings
                </h3>
                <hr className="my-6" />
                <p className="mt-4 " style={{ color: "#7E7E7E" }}>
                  Oil separation occurs naturally. May contain pieces of shell.
                </p>
              </div>
            )}
            {activeTab === "additional-info" && (
              <div>
                <p className="text-gray-700">
                  Less lion goodness that euphemistically robin expeditiously
                  bluebird smugly scratched far while thus cackled sheepishly
                  rigid after due one assent...
                </p>
              </div>
            )}
            {activeTab === "vendor" && (
              <div>
                <p className="text-gray-700">Name: SUPERFOODS</p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <p className="text-gray-700">25 reviews</p>
              </div>
            )}
          </div>
        </div>
        <RelatedProducts />
        <DetailsBottomBanner />
        <DetailsOffersSection />
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
