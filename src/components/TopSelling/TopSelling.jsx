import TopSellingSection from "./TopSellingSection/TopSellingSection";

const TopSelling = () => {
  const productData = {
    topSelling: [
      {
        img: "/src/assets/images/topselling/topselling1.jpg",
        title: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
      {
        img: "/src/assets/images/topselling/topselling2.jpg",
        title: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
      {
        img: "/src/assets/images/topselling/topselling3.jpg",
        title: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
    ],
    trendingProducts: [
      {
        img: "/src/assets/images/topselling/trending1.jpg",
        title: "Organic Cage-Free Grade A Large Brown Eggs",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
      {
        img: "/src/assets/images/topselling/trending2.jpg",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
      {
        img: "/src/assets/images/topselling/trending3.jpg",
        title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
    ],
    recentlyAdded: [
      {
        img: "/src/assets/images/topselling/recentlyadded1.jpg",
        title: "Pepperidge Farm Farmhouse Hearty White Bread",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
      {
        img: "/src/assets/images/topselling/recentlyadded2.jpg",
        title: "Organic Frozen Triple Berry Blend",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
      {
        img: "/src/assets/images/topselling/recentlyadded3.jpg",
        title: "Oroweat Country Buttermilk Bread",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
    ],
    topRated: [
      {
        img: "/src/assets/images/topselling/toprated1.jpg",
        title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
      {
        img: "/src/assets/images/topselling/toprated2.jpg",
        title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
      {
        img: "/src/assets/images/topselling/toprated3.jpg",
        title: "All Natural Italian-Style Chicken Meatballs",
        rating: 4.0,
        price: 32.85,
        oldPrice: 33.8,
      },
    ],
  };

  const sections = [
    { title: "Top Selling", products: productData.topSelling },
    { title: "Trending Products", products: productData.trendingProducts },
    { title: "Recently added", products: productData.recentlyAdded },
    { title: "Top Rated", products: productData.topRated },
  ];

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <TopSellingSection
            key={index}
            title={section.title}
            products={section.products}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
