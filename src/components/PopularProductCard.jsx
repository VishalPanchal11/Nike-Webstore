import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 items-center w-full flex-col -ml-8">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] ml-1 " />
      <h3 className="mt-4  text-2xl leading-normal font-semibold font-palanquin ">
        {name}
      </h3>
      <div className="  flex  gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray leading-normal">
          {rating}
        </p>
        <p className="ml-4 text-2xl leading-normal font-semibold font-montserrat text-coral-red">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
