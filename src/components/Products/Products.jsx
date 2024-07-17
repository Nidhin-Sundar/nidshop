import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Products = () => {
  const allProducts = [
    {
      id: 1,
      name: "Dress1",
      category: "Dress",
      image: "/src/assets/images/ima1.jpg",
      price: 29.99,
      description:
        "This stylish Dress1 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 2,
      name: "Dress2",
      category: "Dress",
      image: "/src/assets/images/ima2.jpg",
      price: 49.99,
      description:
        "This stylish Dress2 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 3,
      name: "Dress3",
      category: "Dress",
      image: "/src/assets/images/ima3.jpg",
      price: 29.99,
      description:
        "This stylish Dress3 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 4,
      name: "Dress4",
      category: "Dress",
      image: "/src/assets/images/ima4.jpg",
      price: 49.99,
      description:
        "This stylish Dress4 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 5,
      name: "Dress5",
      category: "Dress",
      image: "/src/assets/images/ima5.jpg",
      price: 29.99,
      description:
        "This stylish Dress5 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 6,
      name: "Dress6",
      category: "Dress",
      image: "/src/assets/images/ima6.jpg",
      price: 49.99,
      description:
        "This stylish Dress6 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 1,
      name: "Mobiles1",
      category: "Mobiles",
      image: "/src/assets/images/ima1.jpg",
      price: 29.99,
      description:
        "This stylish Mobile1 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 2,
      name: "Mobiles2",
      category: "Mobiles",
      image: "/src/assets/images/ima2.jpg",
      price: 49.99,
      description:
        "This stylish Mobile2 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 3,
      name: "Mobiles3",
      category: "Mobiles",
      image: "/src/assets/images/ima3.jpg",
      price: 29.99,
      description:
        "This stylish Mobile3 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 4,
      name: "Mobiles4",
      category: "Mobiles",
      image: "/src/assets/images/ima4.jpg",
      price: 49.99,
      description:
        "This stylish Mobile4 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 5,
      name: "Mobiles5",
      category: "Mobiles",
      image: "/src/assets/images/ima5.jpg",
      price: 29.99,
      description:
        "This stylish Mobile5 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 6,
      name: "Mobiles6",
      category: "Mobiles",
      image: "/src/assets/images/ima6.jpg",
      price: 49.99,
      description:
        "This stylish Mobile6 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 1,
      name: "Laptops1",
      category: "Laptops",
      image: "/src/assets/images/ima1.jpg",
      price: 29.99,
      description:
        "This stylish Laptops1 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 2,
      name: "Laptops2",
      category: "Laptops",
      image: "/src/assets/images/ima2.jpg",
      price: 49.99,
      description:
        "This stylish Laptops2 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 3,
      name: "Laptops3",
      category: "Laptops",
      image: "/src/assets/images/ima3.jpg",
      price: 29.99,
      description:
        "This stylish Laptops3 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 4,
      name: "Laptops4",
      category: "Laptops",
      image: "/src/assets/images/ima4.jpg",
      price: 49.99,
      description:
        "This stylish Laptops4 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 5,
      name: "Laptops5",
      category: "Laptops",
      image: "/src/assets/images/ima5.jpg",
      price: 29.99,
      description:
        "This stylish Laptops5 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 6,
      name: "Laptops6",
      category: "Laptops",
      image: "/src/assets/images/ima6.jpg",
      price: 49.99,
      description:
        "This stylish Laptops6 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 1,
      name: "Shoes1",
      category: "Shoes",
      image: "/src/assets/images/ima1.jpg",
      price: 29.99,
      description:
        "This stylish Shoes1 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 2,
      name: "Shoes2",
      category: "Shoes",
      image: "/src/assets/images/ima2.jpg",
      price: 49.99,
      description:
        "This stylish Shoes2 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 3,
      name: "Shoes3",
      category: "Shoes",
      image: "/src/assets/images/ima3.jpg",
      price: 29.99,
      description:
        "This stylish Shoes3 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 4,
      name: "Shoes4",
      category: "Shoes",
      image: "/src/assets/images/ima4.jpg",
      price: 49.99,
      description:
        "This stylish Shoes4 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 5,
      name: "Shoes5",
      category: "Shoes",
      image: "/src/assets/images/ima5.jpg",
      price: 29.99,
      description:
        "This stylish Shoes5 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 6,
      name: "Shoes6",
      category: "Shoes",
      image: "/src/assets/images/ima6.jpg",
      price: 49.99,
      description:
        "This stylish Shoes6 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 1,
      name: "Earphones1",
      category: "Earphones",
      image: "/src/assets/images/ima1.jpg",
      price: 29.99,
      description:
        "This stylish Earphones1 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 2,
      name: "Earphones2",
      category: "Earphones",
      image: "/src/assets/images/ima2.jpg",
      price: 49.99,
      description:
        "This stylish Earphones2 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 3,
      name: "Earphones3",
      category: "Earphones",
      image: "/src/assets/images/ima3.jpg",
      price: 29.99,
      description:
        "This stylish Earphones3 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 4,
      name: "Earphones4",
      category: "Earphones",
      image: "/src/assets/images/ima4.jpg",
      price: 49.99,
      description:
        "This stylish Earphones4 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 5,
      name: "Earphones5",
      category: "Earphones",
      image: "/src/assets/images/ima5.jpg",
      price: 29.99,
      description:
        "This stylish Earphones5 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 6,
      name: "Earphones6",
      category: "Earphones",
      image: "/src/assets/images/ima6.jpg",
      price: 49.99,
      description:
        "This stylish Earphones6 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 1,
      name: "Bikes1",
      category: "Bikes",
      image: "/src/assets/images/ima1.jpg",
      price: 29.99,
      description:
        "This stylish Bikes1 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 2,
      name: "Bikes2",
      category: "Bikes",
      image: "/src/assets/images/ima2.jpg",
      price: 49.99,
      description:
        "This stylish Bikes2 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 3,
      name: "Bikes3",
      category: "Bikes",
      image: "/src/assets/images/ima3.jpg",
      price: 29.99,
      description:
        "This stylish Bikes3 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 4,
      name: "Bikes4",
      category: "Bikes",
      image: "/src/assets/images/ima4.jpg",
      price: 49.99,
      description:
        "This stylish Bikes4 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 5,
      name: "Bikes5",
      category: "Bikes",
      image: "/src/assets/images/ima5.jpg",
      price: 29.99,
      description:
        "This stylish Bikes5 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
    {
      id: 6,
      name: "Bikes6",
      category: "Bikes",
      image: "/src/assets/images/ima6.jpg",
      price: 49.99,
      description:
        "This stylish Bikes6 is perfect for a variety of occasions, from casual outings to more formal settings (adjust based on the dress's style). Crafted from high-quality materials (specify materials if available), it's designed to provide both comfort and a flattering silhouette (describe the silhouette if possible).",
      features: [
        "[Feature 1]: Briefly explain how this feature enhances the dress's functionality or appeal.",
        "[Feature 2]: Describe the benefit or advantage of this feature for the user.",
      ],
      gallery: ["/src/assets/images/ima2.jpg", "/src/assets/images/ima3.jpg"],
    },
  ];

  const { categoryId } = useParams();

  const filteredProducts = categoryId
    ? allProducts.filter((product) => product.category === categoryId)
    : allProducts;
  return (
    <div>
      <section className="products grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/details/${product.name}`}>
            <div
              key={product.id}
              className="product p-4 rounded-md shadow-md bg-black "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-fit rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-white text-lg font-bold">{product.name}</h2>
                <p className="text-white">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
export default Products;
