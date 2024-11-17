import logo from "../../images/logo.svg";
import iconHamburger from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";
function NavBar({ onClick, isOpenMenu }) {
  return (
    <nav className="flex items-center justify-between px-4 pb-[167px] pt-11 lg:pb-[133px] lg:pt-16 xl:px-0">
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
        className={`${isOpenMenu ? "flex" : "hidden"} absolute top-1/2 h-full -translate-y-1/2 flex-col gap-6 font-josefin text-2xl font-light uppercase leading-[25px]`}
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
      {/* menu desktop */}
    </nav>
  );
}
export default NavBar;
