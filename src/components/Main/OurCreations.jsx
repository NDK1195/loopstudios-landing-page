import Creation from "./Creation";
import imageDeepEarthMobile from "../../images/mobile/image-deep-earth.jpg";
import imageDeepEarthDesktop from "../../images/desktop/image-deep-earth.jpg";
import imageNightArcadeMobile from "../../images/mobile/image-night-arcade.jpg";
import imageNightArcadeDesktop from "../../images/desktop/image-night-arcade.jpg";
import imageSoccerTeamMobile from "../../images/mobile/image-deep-earth.jpg";
import imageSoccerTeamDesktop from "../../images/desktop/image-soccer-team.jpg";
import imageGridMobile from "../../images/mobile/image-grid.jpg";
import imageGridDesktop from "../../images/desktop/image-grid.jpg";
import imageFromAboveMobile from "../../images/mobile/image-from-above.jpg";
import imageFromAboveDesktop from "../../images/desktop/image-from-above.jpg";
import imagePocketBorealisMobile from "../../images/mobile/image-pocket-borealis.jpg";
import imagePocketBorealisDesktop from "../../images/desktop/image-pocket-borealis.jpg";
import imageCuriosityMobile from "../../images/mobile/image-curiosity.jpg";
import imageCuriosityDesktop from "../../images/desktop/image-curiosity.jpg";
import imageFisheyeMobile from "../../images/mobile/image-fisheye.jpg";
import imageFisheyeDesktop from "../../images/desktop/image-fisheye.jpg";

function OurCreations() {
  return (
    <div className="flex flex-col items-center lg:items-stretch">
      <div className="mb-12 flex items-center justify-between lg:mb-20">
        <h2 className="text-center font-josefin text-[32px] font-light leading-8 lg:text-left lg:text-5xl lg:leading-[48px]">
          OUR CREATIONS
        </h2>
        <button className="hidden h-10 w-[157px] border border-black text-center font-alata text-sm leading-[14px] tracking-[5px] transition-colors hover:bg-black hover:text-white lg:block">
          SEE ALL
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-[30px] xl:px-0">
        <Creation
          imageDesktop={imageDeepEarthDesktop}
          imageMobile={imageDeepEarthMobile}
          content={"deep earth"}
        />
        <Creation
          imageDesktop={imageNightArcadeDesktop}
          imageMobile={imageNightArcadeMobile}
          content={"night arcade"}
        />
        <Creation
          imageDesktop={imageSoccerTeamDesktop}
          imageMobile={imageSoccerTeamMobile}
          content={"soccer team vr"}
        />
        <Creation
          imageDesktop={imageGridDesktop}
          imageMobile={imageGridMobile}
          content={"the grid"}
        />
        <Creation
          imageDesktop={imageFromAboveDesktop}
          imageMobile={imageFromAboveMobile}
          content={"from up above vr"}
        />
        <Creation
          imageDesktop={imagePocketBorealisDesktop}
          imageMobile={imagePocketBorealisMobile}
          content={"pocket borealis"}
        />
        <Creation
          imageDesktop={imageCuriosityDesktop}
          imageMobile={imageCuriosityMobile}
          content={"the curiosity"}
        />
        <Creation
          imageDesktop={imageFisheyeDesktop}
          imageMobile={imageFisheyeMobile}
          content={"make it fisheye"}
        />
      </div>

      <button className="mt-[34px] h-10 w-[157px] border border-black text-center font-alata text-sm leading-[14px] tracking-[5px] transition-colors hover:bg-black hover:text-white lg:hidden">
        SEE ALL
      </button>
    </div>
  );
}
export default OurCreations;
