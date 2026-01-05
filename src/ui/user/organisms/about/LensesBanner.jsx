import { image } from "@/config/constant/image";

const LensesBanner = () => {
  return (
    <section className="relative w-full h-[220px] md:h-[300px] lg:h-[340px] overflow-hidden">
      <img
        src={image.aboutVideo}
        alt="Hero banner"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-white opacity-80 mb-2">
          About Essinox
        </p>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
          Your trusted partner in eyewear excellence
        </h1>
      </div>
    </section>
  );
};

export default LensesBanner;
