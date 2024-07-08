import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className=" mx-auto ">
      <Navbar />
      <Hero />
      <Categories />
      <Services />

      <Footer />
    </div>
  );
}

export default App;
