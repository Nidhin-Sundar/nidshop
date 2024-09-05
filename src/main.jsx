import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/details/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
