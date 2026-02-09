export default function RecentProjectsComponent() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-0 text-white text-2xl gap-6 lg:gap-16 font-black">
      <h2 className="text-[#000F05] text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">Recents Projects</h2>
      <div className="rounded-md h-3 w-30 mx-auto bg-[#13EC5B]" />
      <div className="w-full overflow-x-auto scrollbar-hide my-2">
        <div className="flex justify-around gap-8 pb-4 min-w-max px-2">
          {["/book.jpg", "/book.jpg", "/book.jpg", "/book.jpg"].map((src, index) => (
            <div
              className="rounded-xl 
                max-w-75
                lg:max-w-sm
                mb-4
                shadow-xl 
                bg-gray-50 
                border border-gray-200
                transition-shadow 
                duration-300"
            >
              <img
                key={index}
                src={src}
                className="w-full object-cover rounded-lg shadow-2xl h-90 shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
