const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 gap-2 border font-montserrat text-lg leading-none rounded-full bg-coral-red border-coral-red text-white">
      {label}
      <img src={iconURL} alt="arrow right icon" className="rounded-full ml-2 w-5 h-5"/>
    </button>
  );
};

export default Button;
