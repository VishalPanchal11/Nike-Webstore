import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] "
      />{" "}
      <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <img
          src={star}
          alt="Rating"
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        <h3 className=" text-center text-3xl font-bold font-palanquin">{customerName}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
