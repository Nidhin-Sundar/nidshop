import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import PromoSection from "./components/PromoSection/PromoSection";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import DailyBestSells from "./components/DailyBestSells/DailyBestSells";
import DealsofDayList from "./components/DealsofDayList/DealsofDayList";
import TopSelling from "./components/TopSelling/TopSelling";
import ShopByCategories from "./components/ShopByCategories/ShopByCategories";
import BottomBanner from "./components/BottomBanner/BottomBanner";
import OffersSection from "./components/Offers/OffersSection/OffersSection";
import Footer from "./components/Footer/Footer";

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
      <DailyBestSells />

      <DealsofDayList />
      <TopSelling />
      <ShopByCategories />
      <BottomBanner />
      <OffersSection />
      <Footer />
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
