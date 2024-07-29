import { Link } from "react-router-dom";
import Dropdown from "../../comp/Dropdown";
import LocationSearch from "../../comp/LocationSearch";
import HomeSearch from "../../comp/HomeSearch";
import VendorsDropdown from "../../comp/VendorsDropdown";
import BlogDropdown from "../../comp/BlogDropdown";
import PagesDropdown from "../../comp/PagesDropdown";
import ShopDropdown from "../../comp/ShopDropdown";
import { TbCategory } from "react-icons/tb";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center p-8">
          <div className="flex items-center">
            <img
              src="/src/assets/logo/logo 1.svg"
              alt="Nest"
              className="h-14 ml-24"
            />
          </div>
          <div
            className="flex items-center rounded p-2"
            style={{
              border: "2px solid #BCE3C9",
              width: "39%",
            }}
          >
            <Dropdown />
            <div className="ml-12">
              <input
                type="text"
                placeholder="Search for items..."
                className="focus:outline-none rounded p-2"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6 mr-24">
            <LocationSearch />
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-1">
                <img
                  src="/src/assets/logo/compare.svg"
                  alt="Compare"
                  className="h-6"
                />
                <Link className="flex items-center text-gray-700">Compare</Link>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/src/assets/logo/heart.svg"
                  alt="Heart"
                  className="h-6"
                />
                <Link className="flex items-center text-gray-700">
                  Wishlist
                </Link>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/src/assets/logo/cart.svg"
                  alt="Cart"
                  className="h-6"
                />
                <Link className="flex items-center text-gray-700">Cart</Link>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/src/assets/logo/user.svg"
                  alt="User"
                  className="h-6"
                />
                <Link className="flex items-center text-gray-700">Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className=" sticky top-0 z-50 ">
        <div className="flex items-center p-3 ml-24">
          <button
            className="flex items-center text-white px-8 py-3 rounded mr-4 w-64 ml-4"
            style={{
              backgroundColor: "#3BB77E",
            }}
          >
            <TbCategory className="h-6 w-6 mr-2" />
            Browse All Categories
          </button>
          <div className="flex space-x-2 ml-10">
            <div className="mt-3 flex gap-2">
              <img src="/src/assets/logo/hot.svg" alt="hot" className="h-6" />
              <h6 className="text-black hover:text-green-500">Deals</h6>
            </div>
            <HomeSearch />
            <div className="mt-3">
              <h6 className="text-black hover:text-green-500">About</h6>
            </div>
            <ShopDropdown />
            <VendorsDropdown />
            <BlogDropdown />
            <PagesDropdown />
            <div className="mt-3">
              <h6 className="text-black hover:text-green-500">Contact</h6>
            </div>
          </div>
          <div className="flex items-center justify-between ml-80">
            <img src="/src/assets/logo/headphone.svg" alt="headphone" />
            <div className="flex flex-col items-center">
              <div className="text-green-500">
                <h6 className="font-bold text-3xl">1900-888</h6>
              </div>
              <div className="text-gray-500 text-sm ml-2">
                24/7 Support Center
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
