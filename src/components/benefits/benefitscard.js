const CardBenefits = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center
                    w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.5rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(35%-1rem)]
                    mb-4 sm:mb-0
                    min-h-[220px] md:min-h-[240px]">
      <div className="text-4xl text-yellow-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#075e3b] mb-2">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default CardBenefits;