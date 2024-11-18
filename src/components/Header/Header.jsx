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
    <header className="bg-hero-mobile md:bg-hero-desktop relative h-[650px] bg-cover bg-center bg-no-repeat text-white">
      {/* overlay */}
      <div
        className={`${isOpenMenu ? "z-10 opacity-100" : "opacity-40"} absolute left-0 top-0 h-full w-full bg-black`}
      />
      {/* overlay */}

      {/* nav bar */}
      <NavBar onClick={handleOpenMenu} isOpenMenu={isOpenMenu} />
      {/* nav bar */}

      {/* content */}
      <section className="mx-auto max-w-[1110px]">
        <div
          className={`${isOpenMenu ? "z-0" : ""} relative mx-6 max-w-[650px] border-2 border-white p-6 font-josefin text-[40px] font-light uppercase leading-[38px] lg:p-10 lg:text-[72px] lg:leading-[70px] xl:mx-0`}
        >
          Immersive experiences that deliver
        </div>
      </section>
      {/* content */}
    </header>
  );
}
export default Header;
