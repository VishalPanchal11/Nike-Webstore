const ShoeCard = ({ imgObject, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgObject.bigShoe) {
      changeBigShoeImg(imgObject.bigShoe);
    }
  };
  return (
    <div
      className={`border-4 rounded-2xl ${
        bigShoeImg == imgObject.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className={`flex items-center justify-center bg-card bg-cover bg-center sm:h-[9rem] sm:w-[9rem] hover:sm:w-[10rem] hover:sm:h-[10rem] ${
          bigShoeImg == imgObject.bigShoe ? "sm:w-[10rem] sm:h-[10rem]" : ""
        } max-sm:p-4 rounded-xl`}
      >
        <img
          src={imgObject.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
