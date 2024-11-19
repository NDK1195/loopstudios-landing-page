import imageInteractiveDesktop from "../../images/desktop/image-interactive.jpg";
import imageInteractiveMobile from "../../images/mobile/image-interactive.jpg";
function Interactive() {
  return (
    <div className="relative">
      <picture>
        <source media="(min-width: 1024px)" srcSet={imageInteractiveDesktop} />
        <img
          src={imageInteractiveMobile}
          alt="image interactive"
          className="mx-auto px-6 lg:mx-0 lg:px-0"
        />
      </picture>

      <div className="mx-auto max-w-[541px] bg-white px-12 pt-12 text-center text-black lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:pb-0 lg:pl-24 lg:pr-0 lg:pt-24 lg:text-left">
        <h2 className="mb-4 font-josefin text-[32px] font-light uppercase leading-8 lg:mb-6 lg:text-5xl lg:leading-[48px]">
          The leader in interactive VR
        </h2>
        <p className="font-alata text-[15px] leading-[25px] opacity-[0.4994]">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}
export default Interactive;
