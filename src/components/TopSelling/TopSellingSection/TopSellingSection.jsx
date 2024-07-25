import TopSellingProductCard from "../TopSellingProductCard/TopSellingProductCard";

const TopSellingSection = ({ title, products }) => {
  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: "#253D4E" }}>
        {title}
      </h2>
      <hr
        className="mb-0  w-20"
        style={{
          border: "1px solid #BCE3C9",
        }}
      />
      <hr className="mb-8 " style={{ color: "#ececec" }} />

      {products.map((product, index) => (
        <TopSellingProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default TopSellingSection;
