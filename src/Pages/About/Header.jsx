const Header = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Image */}
        <div className="flex justify-center items-center">
          <img
            src="src/assets/images/ima1.jpg"
            alt="Person cooking"
            className="rounded-lg shadow-lg w-full h-[50rem] object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Nid Shop
          </h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p className="text-gray-600 mb-8">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre. Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus.
          </p>

          {/* Slider Section */}
          <div className="flex space-x-2 mt-4">
            <img
              src="/src/assets/images/ima5.jpg"
              alt="Thumbnail"
              className="w-36 h-44 border rounded-md"
            />
            <img
              src="/src/assets/images/ima2.jpg"
              alt="Thumbnail"
              className="w-36 h-44 border rounded-md"
            />
            <img
              src="/src/assets/images/ima3.jpg"
              alt="Thumbnail"
              className="w-36 h-44 border rounded-md"
            />
            <img
              src="/src/assets/images/ima4.jpg"
              alt="Thumbnail"
              className="w-36 h-44 border rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
