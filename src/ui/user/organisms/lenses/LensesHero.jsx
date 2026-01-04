import { image } from "@/config/constant/image";

const LensesHero = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-0">
      <div className="w-full max-w-[1200px]">

        {/* Title Block */}
        <div className="text-center pt-6 md:pt-10 pb-5 md:pb-7">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 tracking-wide">
            Essinox Bluecare
          </h1>
          <p className="text-[10px] md:text-xs text-gray-600 mt-1 md:mt-2 max-w-[70%] mx-auto">
            Each sleeping hat is meticulously crafted with the finest materials,
            designed to provide the perfect night's sleep you deserve.
          </p>
        </div>

        {/* Large Hero Image */}
        <div className="w-full flex justify-center">
          <img
            src={image.essinoxGlass}
            alt="Essinox Glass"
            className="w-full h-[180px] md:h-[260px] object-cover rounded-[18px]"
          />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-5">

          {/* Left small image */}
          <div className="w-full flex justify-center">
            <img
              src={image.essinoxGlass}
              alt="Essinox Glass small"
              className="w-full h-[110px] md:h-[180px] object-cover rounded-[14px]"
            />
          </div>

          {/* Right small image */}
          <div className="w-full flex justify-center">
            <img
              src={image.designerCollection3}
              alt="Designer Collection"
              className="w-full h-[110px] md:h-[180px] object-cover rounded-[14px]"
            />
          </div>

        </div>

        {/* Why Bluecare Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-10 items-center">

          {/* Image */}
          <div className="w-full flex justify-center md:justify-start">
            <img
              src={image.designerCollection3}
              alt="Designer collection showcase"
              className="w-full max-w-[95%] md:max-w-[90%] h-[190px] md:h-[260px] object-cover rounded-[18px] shadow-sm"
            />
          </div>

          {/* Text */}
          <div className="text-left md:pl-2">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900">
              Why Bluecare?
            </h2>
            <p className="text-[11px] md:text-sm text-gray-600 mt-2 md:mt-3 leading-relaxed">
              Founded with a vision to make quality eyewear accessible to everyone,
              Essinox has been serving the community for over a decade. What started
              as a small optical shop has grown into a destination for those who
              appreciate the perfect blend of style, comfort, and quality.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LensesHero;
