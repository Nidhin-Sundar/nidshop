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
    <>
      <div>
        <div className="bg-white shadow  ">
          <div className="flex flex-wrap justify-between items-center p-4 md:p-8 ">
            <div className="flex items-center">
              <img
                src="/src/assets/logo/logo 1.svg"
                alt="Nest"
                className="h-10 md:h-14 ml-4 md:ml-24"
              />
            </div>
            <div className="flex items-center rounded p-2 w-full md:w-3/5 lg:w-2/5 border-2 border-green-200">
              <Dropdown />
              <div className="ml-2 md:ml-4 lg:ml-12 flex-grow">
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="focus:outline-none rounded p-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-end items-center space-x-4 md:space-x-6 mt-4 md:mt-0 mr-4 md:mr-24">
              <LocationSearch />
              <div className="flex items-center space-x-4 md:space-x-6">
                <NavItem
                  imgSrc="/src/assets/logo/compare.svg"
                  label="Compare"
                />
                <NavItem imgSrc="/src/assets/logo/heart.svg" label="Wishlist" />
                <NavItem imgSrc="/src/assets/logo/cart.svg" label="Cart" />
                <NavItem imgSrc="/src/assets/logo/user.svg" label="Account" />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white border-t border-gray-100 sticky top-0">
          <div className="flex flex-wrap justify-between items-center p-3 md:ml-24">
            <button className="flex items-center text-white px-4 py-2 md:px-8 md:py-3 rounded mr-2 md:mr-4 w-full md:w-64 ml-2 md:ml-4 bg-green-600">
              <TbCategory className="h-6 w-6 mr-2" />
              Browse All Categories
            </button>
            <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 mt-4 md:mt-0">
              <NavItem imgSrc="/src/assets/logo/hot.svg" label="Deals" />
              <HomeSearch />
              <NavItem label="About" />
              <ShopDropdown />
              <VendorsDropdown />
              <BlogDropdown />
              <PagesDropdown />
              <NavItem label="Contact" />
            </div>
            <div className="flex items-center justify-between ml-4 md:ml-80 mt-4 md:mt-0">
              <img src="/src/assets/logo/headphone.svg" alt="headphone" />
              <div className="flex flex-col items-center mr-20">
                <div className="text-green-500">
                  <h6 className="font-bold text-xl md:text-3xl">1900-888</h6>
                </div>
                <div className="text-gray-500 text-sm ml-2">
                  24/7 Support Center
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ imgSrc, label }) => (
  <div className="flex items-center gap-1">
    {imgSrc && <img src={imgSrc} alt={label} className="h-6" />}
    <Link className="flex items-center text-gray-700">{label}</Link>
  </div>
);

export default Navbar;
