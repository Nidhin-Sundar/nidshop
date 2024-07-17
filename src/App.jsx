import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import PromoSection from "./components/PromoSection/PromoSection";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import DailyBestDeals from "./components/DailyBestDeals/DailyBestDeals";

// import Hero from "./components/Hero/Hero";
// import Footer from "./components/Footer/Footer";
// import Services from "./components/Services/Services";
// import Categories from "./components/Categories/Categories";
// import NewArrival from "./components/NewArrival/NewArrival";
// import TrendingNow from "./components/TrendingNow/TrendingNow";
// import TopDeals from "./components/TopDeals/TopDeals";
// import BestPicks from "./components/BestPicks/BestPicks";
// import Health from "./components/Health/Health";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <PromoSection />
      <PopularProducts />
      <DailyBestDeals />
      {/* <Categories /> */}
      {/* <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TopDeals />

        <BestPicks />
      </div>
      <Health />
      <NewArrival />
      <TrendingNow />
      <Services />

      <Footer /> */}
    </div>
  );
}

export default App;
