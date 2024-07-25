import OffersCard from "../OffersCard/OffersCard";

const OffersSection = () => {
  const categories = [
    {
      img: "/src/assets/images/offers/offers1.svg",
      title: "Best prices & offers",
      description: "Orders $50 or more",
    },
    {
      img: "/src/assets/images/offers/offers2.svg",
      title: "Free delivery",
      description: "24/7 amazing services",
    },
    {
      img: "/src/assets/images/offers/offers3.svg",
      title: "Great daily deal",
      description: "When you sign up",
    },
    {
      img: "/src/assets/images/offers/offers4.svg",
      title: "Wide assortment",
      description: "Mega Discounts",
    },
    {
      img: "/src/assets/images/offers/offers5.svg",
      title: "Easy returns",
      description: "Within 30 days",
    },
  ];
  return (
    <div className="mt-10 container mx-auto mb-10">
      <div className="flex flex-row justify-between mt-4 mb-2 container mx-auto ">
        {categories.map((category, index) => (
          <div key={index}>
            <OffersCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
