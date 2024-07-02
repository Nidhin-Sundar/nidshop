import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import Services from "./components/Services/Services";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Hero />
      <ProductCard />
      <Services />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
