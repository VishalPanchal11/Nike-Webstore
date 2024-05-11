const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center bg-coral-red rounded-full h-11 w-11 ">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h3 className="mt-5 font-bold leading-normal text-3xl font-palanquin">{label}</h3>
      <p className="mt-3 font-montserrat text-lg text-slate-gray break-words leading-normal">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
