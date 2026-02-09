export default function BookComponent() {
    return (
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center bg-[#1B4332] min-h-160 text-white px-4 sm:px-20 py-12 text-2xl gap-10 lg:gap-40 font-black">
            <div className="flex-2 flex justify-center h-full flex-col gap-8">
                <h2 className="text-[#13EC5B] text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">Learn the art of Sustainable Beauty</h2>
                <p className="text-lg font-medium">"The Green Thumb" is more than a gardening book--it's a manifesto for greener future. Over 300 pages of expert advice, seasonal guides, and the philosophy behind Arthur Thorne's world-renowned designs"</p>
                <div className="flex gap-8">
                    <button className="bg-[#13EC5B] border-3 border-[#13EC5B] text-sm text-black font-black px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                        Order Hardcover
                    </button>
                    <button className="bg-[#325647] border-3 border-[#3D5E50] text-sm text-white font-black px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
                        Read Sample
                    </button>
                </div>
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full shadow-md mr-[-8px]"></div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full shadow-md mr-[-8px]"></div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full shadow-md mr-[-8px]"></div>
                    <p className="ml-8 text-sm font-medium">Joined by 15k+ readers this month</p>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center h-full lg:p-18">
                <img src="/book.jpg" className="h-100 lg:h-full object-cover lg:rotate-8 hover:rotate-4 transition-transform duration-300 rounded-lg shadow-2xl" />
            </div>
        </div>
    )
}