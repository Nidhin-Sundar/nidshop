const OffersCard = ({ category }) => {
  return (
    <div>
      <div className=" rounded-xl p-4 w-72 h-28 bg-gray-100 ">
        <div className="flex gap-5">
          <img src={category.img} />
          <div>
            <h3
              className="text-md font-semibold mt-4"
              style={{ color: "#253D4E" }}
            >
              {category.title}
            </h3>
            <h3 className="text-sm text-gray-400 font-semibold ">
              {category.description}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
