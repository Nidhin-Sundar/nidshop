import { IoTrashOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import DetailsBottomBanner from "../../components/DetailsBottomBanner/DetailsBottomBanner";
import DetailsOffersSection from "../../components/Offers/DetailsOffersSection/DetailsOffersSection";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Field Roast Chao Cheese Creamy Original",
      price: 2.51,
      quantity: 1,
      image: "src/assets/images/products/product1.jpg",
    },
    {
      id: 2,
      name: "Blue Diamond Almonds Lightly Salted",
      price: 3.2,
      quantity: 1,
      image: "src/assets/images/products/product2.jpg",
    },
    {
      id: 3,
      name: "Fresh Organic Mustard Leaves Bell Pepper",
      price: 2.43,
      quantity: 1,
      image: "src/assets/images/products/product3.jpg",
    },
  ];

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("cartProducts");
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
  }, [products]);
  const handleIncrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-8  min-h-screen container mx-auto">
        <h1 className="text-3xl font-bold" style={{ color: "#253D4E" }}>
          Your Cart
        </h1>
        <p className="text-gray-600 mt-2">
          There are <span style={{ color: "#3BB77E" }}>{products.length}</span>{" "}
          products in your cart
        </p>
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <div className="flex-1 overflow-x-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className=" overflow-y-auto max-h-[40rem]">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-10 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        <input type="checkbox" />
                      </th>
                      <th className="px-6 py-10 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-10 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        Unit Price
                      </th>
                      <th className="px-6 py-10 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-6 py-10 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        Subtotal
                      </th>
                      <th className="px-6 py-10 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-6 whitespace-no-wrap border-b border-gray-200">
                          <input type="checkbox" />
                        </td>
                        <td className="px-6 py-6 whitespace-no-wrap border-b border-gray-200 flex items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-32 object-cover mr-4"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {product.title}
                            </div>
                            <div className="flex gap-3 ">
                              <div className="text-sm text-yellow-500">
                                ★★★★☆
                              </div>
                              <div
                                className="text-sm "
                                style={{ color: "#B6B6B6" }}
                              >
                                (22)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 whitespace-no-wrap border-b border-gray-200 text-2xl ">
                          <div style={{ color: "#7E7E7E" }}>
                            ${product.price.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-6 whitespace-no-wrap border-b border-gray-200 text-sm text-gray-900">
                          <div className="flex items-center border border-green-500 rounded-md p-2">
                            <span className="text-lg font-bold mx-2">
                              {product.quantity}
                            </span>
                            <div className="flex flex-col">
                              <button
                                className="text-sm"
                                onClick={() => handleIncrement(product.id)}
                              >
                                <IoMdArrowDropup />
                              </button>
                              <button
                                className="text-sm"
                                onClick={() => handleDecrement(product.id)}
                                disabled={product.quantity === 1}
                              >
                                <IoMdArrowDropdown />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 whitespace-no-wrap border-b border-gray-200 text-2xl ">
                          <div style={{ color: "#3BB77E" }}>
                            ${(product.price * product.quantity).toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-6 whitespace-no-wrap border-b border-gray-200 text-sm text-gray-900">
                          <IoTrashOutline
                            className="w-6 h-6"
                            onClick={() => handleRemove(product.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="mt-4 lg:mt-0 p-6 border border-gray-200 bg-white shadow-md rounded-lg">
              <div className="text-right">
                <div className="p-6 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <div
                      className="text-xl font-semibold"
                      style={{ color: "#B6B6B6 " }}
                    >
                      Subtotal:
                    </div>

                    <div
                      className=" text-2xl font-semibold"
                      style={{ color: "#3BB77E " }}
                    >
                      ${total.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-lg" style={{ color: "#B6B6B6 " }}>
                      Shipping:
                    </div>
                    <div className=" text-lg" style={{ color: "##253D4E " }}>
                      Free
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className=" text-lg" style={{ color: "#B6B6B6 " }}>
                      Estimate For:
                    </div>
                    <div className=" text-lg" style={{ color: "##253D4E " }}>
                      India
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className=" text-lg" style={{ color: "#B6B6B6 " }}>
                      Total:{" "}
                    </div>
                    <div
                      className=" text-2xl  font-semibold"
                      style={{ color: "#3BB77E " }}
                    >
                      ${total.toFixed(2)}
                    </div>
                  </div>
                </div>
                <button
                  className="mt-4 w-full text-white px-6 py-3 rounded-lg"
                  style={{ backgroundColor: "#3BB77E " }}
                >
                  Proceed To Checkout
                  {/* <IoLogOutOutline /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <button
            className="mt-4 w-56 text-white px-6 py-3 rounded-lg"
            style={{ backgroundColor: "#3BB77E " }}
          >
            Continue Shopping{" "}
          </button>
        </Link>
      </div>
      <div className="ml-24">
        <DetailsBottomBanner />
      </div>
      <DetailsOffersSection />
      <Footer />
    </div>
  );
};

export default Cart;
