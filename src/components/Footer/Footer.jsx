import logo from "../../images/logo.svg";
import iconFacebook from "../../images/icon-facebook.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconPinterest from "../../images/icon-pinterest.svg";
import iconInstagram from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-[1110px] flex-col items-center gap-12 px-[52px] py-14 md:justify-between lg:flex-row lg:gap-0 lg:pb-[33px] lg:pt-11 xl:px-0">
        <div className="flex flex-col items-center gap-8 md:gap-6 lg:items-start">
          <img src={logo} alt="logo" className="w-[144px]" />
          <ul className="flex flex-col items-center gap-4 font-alata text-[15px] leading-[25px] md:flex-row md:gap-8">
            <li>
              <a href="#" className="group transition-all">
                About
                <span className="mx-auto hidden h-[2px] w-6 bg-white transition-all group-hover:block"></span>
              </a>
            </li>
            <li>
              <a href="#" className="group transition-all">
                Career
                <span className="mx-auto hidden h-[2px] w-6 bg-white transition-all group-hover:block"></span>
              </a>
            </li>
            <li>
              <a href="#" className="group transition-all">
                Events
                <span className="mx-auto hidden h-[2px] w-6 bg-white transition-all group-hover:block"></span>
              </a>
            </li>
            <li>
              <a href="#" className="group transition-all">
                Products
                <span className="mx-auto hidden h-[2px] w-6 bg-white transition-all group-hover:block"></span>
              </a>
            </li>
            <li>
              <a href="#" className="group transition-all">
                Support
                <span className="mx-auto hidden h-[2px] w-6 bg-white transition-all group-hover:block"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-end">
          <div className="flex items-center gap-4">
            <span className="relative cursor-pointer pb-2 transition-all hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-white">
              <img src={iconFacebook} alt="icon facebook" />
            </span>
            <span className="relative cursor-pointer pb-2 transition-all hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-white">
              <img src={iconTwitter} alt="icon twitter" />
            </span>
            <span className="relative cursor-pointer pb-2 transition-all hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-white">
              <img src={iconPinterest} alt="icon pinterest" />
            </span>
            <span className="relative cursor-pointer pb-2 transition-all hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-white">
              <img src={iconInstagram} alt="icon instagram" />
            </span>
          </div>
          <p className="font-alata text-[15px] leading-[25px] opacity-50">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
