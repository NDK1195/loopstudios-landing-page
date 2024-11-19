function Creation({ imageDesktop, imageMobile, content }) {
  const numberOfWords = content.split(" ");
  console.log(numberOfWords);

  return (
    <div className="relative font-josefin font-light uppercase text-white">
      <picture>
        <source media="(min-width: 768px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="image" />
      </picture>

      {/* overlay */}
      <div className="absolute left-0 top-0 z-0 h-full w-full cursor-pointer bg-black opacity-25 transition-opacity hover:bg-[#ffffffbf] hover:opacity-100"></div>
      {/* overlay */}

      <h3
        className={`${numberOfWords.length <= 2 ? "w-20" : ""} absolute bottom-5 left-5 z-10 text-2xl leading-6 lg:bottom-8 lg:left-10 lg:text-[32px] lg:leading-8`}
      >
        {content}
      </h3>
    </div>
  );
}
export default Creation;
