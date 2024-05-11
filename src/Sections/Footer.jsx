import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start justify-between max-xl:flex-col gap-20  max-sm:ml-8 max-md:ml-[5rem] lg:ml-[10rem]  xl:ml-24">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="gap-5 mt-8 flex items-center">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-center gap-20 lg:gap-10 max-md:flex-col ">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white mb-6 font-montserrat font-medium text-2xl leading-normal ">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-white-400 hover:text-slate-gray font-montserrat leading-normal text-base" key={link.name}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
