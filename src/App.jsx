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
    </div>
  );
}

export default App;
