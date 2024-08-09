import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import Cart from "./Pages/Cart/Cart.jsx";

const products = [
  {
    id: 1,
    img: "/src/assets/images/products/product1.jpg",
    img2: "/src/assets/images/products/product1.2.jpg",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4.0,
    reviewCount: 117,
    price: 28.85,
    oldPrice: 32.0,
    category: "Snack",
    label: "Hot",
    brand: "NestFood",
  },
  {
    id: 2,
    img: "/src/assets/images/products/product2.jpg",
    img2: "/src/assets/images/products/product2.2.jpg",
    title: "All Natural Italian-Style Chicken Meatballs",
    rating: 3.5,
    price: 52.85,
    oldPrice: 55.0,
    category: "Hodo Foods",
    label: "Sale",
    brand: "NestFood",
  },
  {
    id: 3,
    img: "/src/assets/images/products/product3.jpg",
    img2: "/src/assets/images/products/product3.2.jpg",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    rating: 4.0,
    reviewCount: 117,
    price: 48.85,
    oldPrice: 52.0,
    category: "Snack",
    label: "New",
    brand: "NestFood",
  },
  {
    id: 4,
    img: "/src/assets/images/products/product4.jpg",
    img2: "/src/assets/images/products/product4.2.jpg",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rating: 4.0,
    reviewCount: 117,
    price: 17.85,
    oldPrice: 19.0,
    category: "Vegetables",
    label: "",
    brand: "NestFood",
  },
  {
    id: 5,
    img: "/src/assets/images/products/product5.jpg",
    img2: "/src/assets/images/products/product5.2.jpg",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    rating: 4.0,
    reviewCount: 117,
    price: 23.85,
    oldPrice: 25.0,
    category: "Pet Foods",
    label: "-14%",
    brand: "NestFood",
  },
  {
    id: 6,
    img: "/src/assets/images/products/product6.jpg",
    img2: "/src/assets/images/products/product6.2.jpg",
    title: "Chobani Complete Vanilla Greek Yogurt",
    rating: 4.0,
    reviewCount: 117,
    price: 54.85,
    oldPrice: 55.0,
    category: "Hodo Foods",
    label: "",
    brand: "NestFood",
  },
  {
    id: 7,
    img: "/src/assets/images/products/product7.jpg",
    img2: "/src/assets/images/products/product7.2.jpg",
    title: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
    rating: 4.0,
    reviewCount: 117,
    price: 32.85,
    oldPrice: 33.9,
    category: "Meats",
    label: "Sale",
    brand: "NestFood",
  },
  {
    id: 8,
    img: "/src/assets/images/products/product8.jpg",
    img2: "/src/assets/images/products/product8.2.jpg",
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    rating: 4.0,
    reviewCount: 117,
    price: 35.85,
    oldPrice: 37.8,
    category: "Snack",
    label: "",
    brand: "NestFood",
  },
  {
    id: 9,
    img: "/src/assets/images/products/product9.jpg",
    img2: "/src/assets/images/products/product9.2.jpg",
    title: "Gorton’s Beer Battered Fish Fillets with soft paper",
    rating: 4.0,
    reviewCount: 117,
    price: 23.85,
    oldPrice: 25.0,
    category: "Coffees",
    label: "Hot",
    brand: "Old El Paso",
  },
  {
    id: 10,
    img: "/src/assets/images/products/product10.jpg",
    img2: "/src/assets/images/products/product10.2.jpg",
    title: "Hagen-Dazs Caramel Cone Ice Cream Ketchup",
    rating: 2.0,
    price: 22.85,
    oldPrice: 24.0,
    category: "Cream",
    label: "",
    brand: "Tyson",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/details/:id",
    element: <ProductDetails products={products} />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
