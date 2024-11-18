import logo from "../../images/logo.svg";
import iconHamburger from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";
function NavBar({ onClick, isOpenMenu }) {
  return (
    <nav className="relative z-20 mx-auto flex max-w-[1110px] items-center justify-between px-4 pb-[167px] pt-11 lg:pb-[133px] lg:pt-16 xl:px-0">
      {/* logo */}
      <img src={logo} alt="logo" className="w-[144px] lg:w-[192px]" />
      {/* logo */}

      {/* menu mobile */}
      <img
        src={isOpenMenu ? iconClose : iconHamburger}
        alt="icon hamburger"
        className="w-6 cursor-pointer lg:hidden"
        onClick={onClick}
      />
      <ul
        className={`${isOpenMenu ? "flex" : "hidden"} absolute top-0 h-[650px] flex-col justify-center gap-6 font-josefin text-2xl font-light uppercase leading-[25px]`}
      >
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
      {/* menu mobile */}

      {/* menu desktop */}
      <ul className="hidden items-center gap-8 font-alata text-[15px] leading-[25px] lg:flex">
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
      {/* menu desktop */}
    </nav>
  );
}
export default NavBar;
