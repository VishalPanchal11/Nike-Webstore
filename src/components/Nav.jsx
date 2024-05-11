import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="lg:px-8 max-sm:px-8 py-8 px-16 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        <ul className="flex-1 flex justify-center items-center gap-8 xl:gap-16 2xl:gap-[6rem]  max-lg:hidden">
          {
            navLinks.map((item)=>(
              <li key={item.label}>
                <a href={item.href} className="text-lg font-montserrat leading-normal text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Menu" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
