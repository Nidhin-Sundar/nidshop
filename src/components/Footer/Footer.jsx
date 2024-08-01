const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto flex flex-col space-y-8 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 md:gap-16">
          <div>
            <div className="w-60 h-14 mb-6">
              <img src="/src/assets/logo/logo 1.svg" alt="LOGO" />
            </div>
            <p className="mb-4" style={{ color: "#253D4E" }}>
              Awesome grocery store website template
            </p>
            <ul className="space-y-5 text-sm" style={{ color: "#253D4E" }}>
              <li>
                <span className="font-bold"> Address:</span>
                5171 W Campbell Ave undefined Kent, Utah 53127 United States
              </li>
              <li>
                <span className="font-bold">Call Us:</span> (+91) -
                540-025-124553
              </li>
              <li>
                <span className="font-bold">Email:</span> sale@Nest.com
              </li>
              <li>
                <span className="font-bold">Hours:</span> 10:00 - 18:00, Mon -
                Sat
              </li>
            </ul>
          </div>
          <div>
            <h3
              className="text-2xl font-medium mb-2"
              style={{ color: "#253D4E" }}
            >
              Company
            </h3>
            <ul className="space-y-5 text-sm" style={{ color: "#253D4E" }}>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className="text-2xl font-medium mb-2"
              style={{ color: "#253D4E" }}
            >
              Account
            </h3>
            <ul className="space-y-5 text-sm" style={{ color: "#253D4E" }}>
              <li>
                <a href="#" className="hover:underline">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  View Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Compare products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className="text-2xl font-normal mb-2"
              style={{ color: "#253D4E" }}
            >
              Corporate
            </h3>
            <ul className="space-y-5 text-sm" style={{ color: "#253D4E" }}>
              <li>
                <a href="#" className="hover:underline">
                  Become a Vendor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Farm Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Farm Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Suppliers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Promotions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className="text-2xl font-normal mb-2"
              style={{ color: "#253D4E" }}
            >
              Popular
            </h3>
            <ul className="space-y-5 text-sm" style={{ color: "#253D4E" }}>
              <li>
                <a href="#" className="hover:underline">
                  Milk & Flavoured Milk
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Butter and Margarine
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Eggs Substitutes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Marmalades
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sour Cream and Dips
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tea & Kombucha
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cheese
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className="text-2xl font-medium mb-2"
              style={{ color: "#253D4E" }}
            >
              Install App
            </h3>
            <p className="mb-2" style={{ color: "#253D4E" }}>
              From App Store or Google Play
            </p>
            <div className="flex space-x-2 mb-2">
              <img
                src="/src/assets/images/footer/app-store.jpg"
                alt="App Store"
                className="w-28 h-10"
              />
              <img
                src="/src/assets/images/footer/google-play.jpg"
                alt="Google Play"
                className="w-28 h-10"
              />
            </div>
            <p className="mb-2 mt-12" style={{ color: "#253D4E" }}>
              Secured Payment Gateways
            </p>
            <div className="flex space-x-2">
              <img
                src="/src/assets/images/footer/payment-method.png"
                alt="Visa"
                className="w-48 h-10"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-green-300 pt-4 text-sm space-y-4 md:space-y-0">
          <p style={{ color: "#7E7E7E" }}>
            &copy; 2024, Nest - HTML Ecommerce Template. All rights reserved
          </p>
          <div className="flex space-x-8" style={{ color: "#253D4E" }}>
            <p className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold" style={{ color: "#3BB77E" }}>
                1900 - 6666
              </span>
              <span className="text-sm" style={{ color: "#7E7E7E" }}>
                Working 8:00 - 22:00
              </span>
            </p>
            <p className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold" style={{ color: "#3BB77E" }}>
                1900 - 8888
              </span>
              <span className="text-sm" style={{ color: "#7E7E7E" }}>
                24/7 Support Center
              </span>
            </p>
          </div>
          <div className="flex space-x-2">
            <a href="#">
              <img
                src="/src/assets/images/footer/icon-facebook-white.svg"
                alt="Facebook"
                className="w-7 h-6 rounded-full"
                style={{ backgroundColor: "#3BB77E" }}
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/images/footer/icon-twitter-white.svg"
                alt="Twitter"
                className="w-7 h-6 rounded-full"
                style={{ backgroundColor: "#3BB77E" }}
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/images/footer/icon-instagram-white.svg"
                alt="Instagram"
                className="w-7 h-6 rounded-full"
                style={{ backgroundColor: "#3BB77E" }}
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/images/footer/icon-pinterest-white.svg"
                alt="Pinterest"
                className="w-7 h-6 rounded-full"
                style={{ backgroundColor: "#3BB77E" }}
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/images/footer/icon-youtube-white.svg"
                alt="YouTube"
                className="w-7 h-6 rounded-full"
                style={{ backgroundColor: "#3BB77E" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
