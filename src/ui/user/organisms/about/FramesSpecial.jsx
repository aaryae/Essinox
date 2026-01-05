import React from "react";
import { image } from "@/config/constant/image";

const FramesSpecial = () => {
  const points = [
    "Premium Materials with lasting finish",
    "Elegant Craftsmanship built for confidence",
    "Timeless Designs for every personality",
    "Comfort-first engineering for daily wear",
  ];

  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-0 py-12 md:py-18">
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left Text */}
        <div>
          <h2 className="text-lg md:text-2xl font-bold text-blue-600 mb-4">
            Why Our Frames Are Special
          </h2>
          <ul className="space-y-2">
            {points.map((p, i) => (
              <li key={i} className="text-xs md:text-sm text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 mt-[2px]">•</span>
                {p}
              </li>
            ))}
          </ul>
          <p className="text-xs md:text-sm text-gray-600 mt-4 leading-relaxed">
            Every frame in our collection is chosen with meticulous attention to detail. We partner with renowned manufacturers
            and emerging designers who share our commitment to excellence.
          </p>
        </div>

        {/* Right Image Collage */}
        <div className="flex justify-center md:justify-end gap-3">
          <div className="flex flex-col gap-3">
            <img
              src={image.blank}
              alt="Collage 1"
              className="w-[150px] md:w-[190px] rounded-2xl object-cover shadow-sm"
            />
            <img
              src={image.blank}
              alt="Collage 2"
              className="w-[150px] md:w-[190px] rounded-2xl object-cover shadow-sm"
            />
          </div>
          <img
            src={image.blank}
            alt="Collage 3"
            className="w-[160px] md:w-[210px] rounded-2xl object-cover shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default FramesSpecial;
