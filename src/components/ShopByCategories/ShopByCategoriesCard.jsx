const ShopByCategoriesCard = ({ category }) => {
  return (
    <div>
      <div
        className=" rounded-xl p-10 w-40 h-48 bg-gray-100 hover:bg-white hover:border border-green-400"
        // style={{ backgroundColor: "#F4F6FA" }}
      >
        <img src={category.img} />
        <h3 className="text-md font-semibold mt-4" style={{ color: "#253D4E" }}>
          {category.title}
        </h3>
      </div>
    </div>
  );
};

export default ShopByCategoriesCard;
