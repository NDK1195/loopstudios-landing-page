import imageHeroDesktop from "../../images/desktop/image-hero.jpg";
import imageHeroMobile from "../../images/mobile/image-hero.jpg";
import NavBar from "./NavBar";
import { useState } from "react";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleOpenMenu() {
    setIsOpenMenu(() => !isOpenMenu);
  }

  return (
    <header className="relative text-white">
      {/* overlay */}
      <div
        className={`${isOpenMenu ? "z-10 opacity-100" : "opacity-40"} absolute left-0 top-0 h-full w-full bg-black`}
      ></div>
      {/* overlay */}

      {/* background */}
      <picture>
        <source media="(min-width: 768px)" srcSet={imageHeroDesktop} />
        <img src={imageHeroMobile} alt="image hero" className="w-full" />
      </picture>
      {/* background */}

      {/* content */}
      <section className="absolute left-1/2 top-0 mx-auto w-full max-w-[1110px] -translate-x-1/2">
        {/* nav bar */}
        <NavBar onClick={handleOpenMenu} isOpenMenu={isOpenMenu} />
        {/* nav bar */}

        <div className="mx-6 max-w-[650px] border-2 border-white p-6 font-josefin text-[40px] font-light uppercase leading-[38px] lg:p-10 lg:text-[72px] lg:leading-[70px] xl:mx-0">
          Immersive experiences that deliver
        </div>
      </section>
      {/* content */}
    </header>
  );
}
export default Header;
