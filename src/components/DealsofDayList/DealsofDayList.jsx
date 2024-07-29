import DealsofDayCard from "../DealsofDayCard/DealsofDayCard";
import { IoIosArrowForward } from "react-icons/io";

export default function DealsofDayList() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 6000000); // Set your desired time here

  const products = [
    {
      img: "/src/assets/images/timer/timer1.png",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      rating: 4.0,
      reviewCount: 117,
      price: 32.85,
      oldPrice: 33.8,
      brand: "NestFood",
    },
    {
      img: "/src/assets/images/timer/timer2.png",
      title: "Perdue Simply Smart Organics Gluten Free",
      rating: 4.0,
      reviewCount: 200,
      price: 24.85,
      oldPrice: 26.8,
      brand: "Old El Paso",
    },
    {
      img: "/src/assets/images/timer/timer3.png",
      title: "Signature Wood-Fired Mushroom and Caramelized",
      rating: 3.0,
      reviewCount: 150,
      price: 12.85,
      oldPrice: 13.8,
      brand: " Progresso",
    },
    {
      img: "/src/assets/images/timer/timer4.png",
      title: "Simply Lemonade with Raspberry Juice",
      rating: 4.2,
      reviewCount: 98,
      price: 15.85,
      oldPrice: 16.8,
      brand: "Yoplait",
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-between mt-4 mb-2 container mx-auto ">
        <div>
          <h2 className="text-3xl font-bold " style={{ color: "#253D4E" }}>
            Deals of the Day
          </h2>
        </div>

        <div>
          <div className="inline-flex  justify-center gap-x-1.5  px-6 py-3 text-gray-400   hover:text-green-600  ">
            All Deals
            <IoIosArrowForward
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400"
            />
          </div>
        </div>
      </div>

      <div
        className="mb-2  gap-4"
        style={{
          marginRight: "4rem",
          marginLeft: "8rem",
          marginBottom: "2rem",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 p-4">
          {products.map((product, index) => (
            <DealsofDayCard
              key={index}
              product={product}
              expiryTimestamp={time}
            />
          ))}
        </div>
      </div>
    </>
  );
}
