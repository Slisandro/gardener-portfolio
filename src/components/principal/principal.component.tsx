export default function PrincipalComponent() {
  return (
    <div className="w-full h-120 md:h-160 p-4 md:p-8">
      <div
        className="w-full h-full rounded-4xl shadow-2xl px-8 py-12 flex flex-col justify-end gap-2 md:gap-8"
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="bg-[#397025] text-[#13EC5B] rounded-xl py-1 px-3 w-max font-semibold text-xs">
          MASTER HORTICULTURIST
        </p>
        <h2 className="font-black text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] text-white leading-14 sm:leading-18 md:leading-24 lg:leading-26">
          Crafting Living <br /> Masterpieces
        </h2>
        <p className="text-white rounded-xl py-1 px-3 font-semibold text-sm md:text-md lg:text-xl">
          Bespoke outdoor sanctuaries designed for harmony and <br className="hidden md:block" />
          sustainable beauty by an expert horticultural architect
        </p>
        <button className="w-max bg-[#13EC5B] border-3 border-[#13EC5B] text-xs sm:text-sm text-black font-black px-6 py-3 rounded-md hover:bg-green-600 transition-colors shadow-lg">
          View Portfolio
        </button>
      </div>
    </div>
  );
}
