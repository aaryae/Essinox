import { image } from "@/config/constant/image";

const Values = () => {
  const values = [
    { title: "Passion For Design", desc: "We believe eyewear is more than fashion, it's self-expression." },
    { title: "Quality Materials", desc: "Every frame is crafted for durability, clarity and comfort." },
    { title: "Customer Satisfaction", desc: "Your confidence matters, we’re here to support your style." },
    { title: "Perfect Fit Promise", desc: "Precision-built frames that feel as good as they look." },
  ];

  return (
    <section className="w-full bg-[#f9fcff] flex justify-center px-4 md:px-0 py-12 md:py-16">
      <div className="w-full max-w-[1100px] text-center">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
          What we stand for
        </h2>
        <p className="text-[10px] md:text-xs text-gray-600 mb-8 max-w-[60%] mx-auto">
          Our values guide everything we do, from lens selection to customer care.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden mb-3 shadow-sm">
                <img
                  src={image.blank}
                  alt={v.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900">
                {v.title}
              </h3>
              <p className="text-[10px] md:text-xs text-gray-600 mt-1 max-w-[85%] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
