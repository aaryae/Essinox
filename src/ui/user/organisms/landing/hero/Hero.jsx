import { image } from "@/config/constant/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="hidden md:hidden lg:block">
        {/* Background Image / GIF */}
        <img
          src={image.heroVideo}
          alt="Hero background"
          className="hidden md:hidden lg:block w-full h-[70vh] sm:h-[85vh] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute mx-auto px-6 sm:px-12 lg:px-20 w-full">
            <div className="flex flex-col max-w-xl">
              <p className="text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-[0.9rem] text-blue-200 mb-4 uppercase tracking-wider">
                Lorem Ipsum
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
                Stylish & Comfortable <br />
                <span className="font-medium flex flex-col">
                  EyeWear for <span>Everyone</span>
                </span>
              </h1>

              <p
                className="text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[0.9rem] text-blue-100 mb-8"
                style={{ maxWidth: width >= 1302 ? "100%" : "50%" }}
              >
                Discover the perfect frames that complement your unique style and personality
              </p>

              <div className="flex flex-wrap gap-5">
                <button className="py-3 px-6 border border-white text-white bg-white/20 rounded-xl w-fit">
                  Explore Now
                </button>

                <button className="px-6 py-3 bg-white text-[#1f5187] rounded-xl flex items-center gap-2">
                  Become an Essinox Dealer <span>→</span>
                </button>
              </div>
            </div>
          </div>

          <div>
            <img src={image.centerImg} alt="" />
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden relative bg-[#173f6a] pl-7">
        <div className="flex flex-col items-start justify-start text-left py-5 w-full">
          <p className="text-[0.9rem] text-blue-200 mb-4 uppercase tracking-wider">
            Lorem Ipsum
          </p>

          <h1 className="sm:text-6xl text-3xl font-light text-white mb-4 leading-tight">
            Stylish & Comfortable <br />
            <span className="font-medium text-7xl">Eyewear for Everyone</span>
          </h1>

          <p className="text-[0.85rem] text-blue-100 mb-6">
            Discover the perfect frames that complement your unique style and personality
          </p>

          <div className="flex flex-col w-fit gap-4">
            <button className="py-3 px-6 border border-white text-white bg-white/20 rounded-xl w-fit">
              Explore Now
            </button>

            <button className="px-6 py-3 bg-white text-[#1f5187] rounded-xl flex items-center gap-2">
              Become an Essinox Dealer <span>→</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full">
          <img
            src={image.responsiveVideo}
            alt=""
            className="w-full h-full object-cover"
          />

          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#173f6a] flex justify-center items-center"
            style={{
              width: "99px",
              height: "99px",
              borderTopRightRadius: "150px",
              borderBottomRightRadius: "150px",
              left: "-39px",
            }}
          >
            <img
              src={image.centerImg}
              alt=""
              className="w-19"
              style={{ marginLeft: "5px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
