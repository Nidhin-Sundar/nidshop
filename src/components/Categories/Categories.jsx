import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Dress",
      image: "/src/assets/images/dress/dress1.jpg",
      description: "Description for Dress",
      features: ["Feature 1", "Feature 2"],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 2,
      name: "Mobiles",
      image: "/src/assets/images/mobile/mobile1.jpg",
      description: "Description for Mobiles",
      features: ["Feature 1", "Feature 2"],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 3,
      name: "Laptops",
      image: "/src/assets/images/laptops/laptop1.jpg",
      description: "Description for Laptops",
      features: ["Feature 1", "Feature 2"],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 4,
      name: "Shoes",
      image: "/src/assets/images/shoes/shoe1.jpg",
      description: "Description for Shoes",
      features: ["Feature 1", "Feature 2"],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 5,
      name: "Earphones",
      image: "/src/assets/images/earphones/earphone1.jpg",
      description: "Description for Earphones",
      features: ["Feature 1", "Feature 2"],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 6,
      name: "Bikes",
      image: "/src/assets/images/bikes/bike1.jpg",
      description: "Description for Bikes",
      features: ["Feature 1", "Feature 2"],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
  ];
  return (
    <div>
      <h1
        className="text-4xl font-bold text-black "
        style={{ marginLeft: "52rem" }}
      >
        Categories
      </h1>
      <section className="products grid grid-cols-1 md:grid-cols-6 gap-4 my-8">
        {categories.map((category) => (
          <Link key={category.id} to={`/products/${category.name}`}>
            <div
              key={category.id}
              className="product p-4 rounded-md shadow-md bg-black "
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-96 object-fit rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-white text-lg font-bold">
                  {category.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Categories;
