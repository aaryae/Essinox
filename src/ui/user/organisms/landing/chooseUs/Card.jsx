

const Card=({title,
  description,
  image,
  className = ""}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 max-w-md w-full ${className}`}
    >
      {image && (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden mb-3">
          <img
            src={image}
            alt="card-image"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h2 className="text-sm  max-w-2xl mx-auto tracking-[0.012rem] font-medium py-3">
        {title}
      </h2> 

      <p className='text-[0.79rem] text-[#565e64] max-w-2xl mx-auto tracking-[0.012rem]'>
         {description}
        </p>
    </div>
  );
};

export default Card;
