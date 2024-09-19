const aboutData = [
  {
    title: "Who we are",
    description:
      "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in.",
  },
  {
    title: "What we do",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Why choose us",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const OurPerformance = () => {
  return (
    <div className="container mx-auto py-16 px-4 lg:px-8">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Performance
        </h1>
        <p className="text-lg text-gray-500">
          Your Partner for e-commerce grocery solutions
        </p>
      </header>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* First two columns for images */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <img
            src="src/assets/images/ima1.jpg"
            className="w-full h-[28rem] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            alt="Image 1"
          />
          <img
            src="src/assets/images/ima2.jpg"
            className="w-full h-[28rem] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            alt="Image 2"
          />
        </div>

        {/* Third column for text */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Partner for e-commerce grocery solution{" "}
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre. Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus.
          </p>
        </div>
      </div>

      {/* About section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPerformance;
