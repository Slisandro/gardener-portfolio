import ReactPlayer from 'react-player';
import { FaStore } from "react-icons/fa6";
import { IoMdQuote } from "react-icons/io";
import { MdLocalGroceryStore } from "react-icons/md";

export default function BookPage() {
  return (
    <div className="flex flex-col gap-12 p-10">
      <div className="w-full h-[90vh] flex">
        <div className="w-1/2 py-4 px-10 mx-auto flex justify-center">
          <div className="h-full bg-white p-3 rounded-xl shadow-xl w-full">
            <div className="h-full bg-[#41685A] p-20 rounded-xl flex items-center justify-center">
              <div className="mx-auto h-full shadow-md rounded-xl shadow-[#41685A]">
                <img
                  src="/book.jpg"
                  className="mx-auto h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-6">
          <p className="bg-[#C8F5D6] text-[#13EC5B] rounded-xl py-1 px-3 w-max font-semibold text-xs">
            NEW RELEASE
          </p>

          <div className="flex flex-col">
            <h3 className="text-6xl text-[#0F142A] font-black">Cultivating</h3>
            <h3 className="text-6xl text-[#13EC5B] font-black">Beauty</h3>
          </div>

          <p className="text-sm font-[400] text-gray-700 leading-6">
            Discover the secrets to a thrivingorganic garden with my latest{" "}
            <br /> book. Practical tips, seasonal guides, and sustainable
            practices for <br /> every green space, from urban balconies to
            rural estates
          </p>

          <p className="text-sm font-[400] text-gray-700 leading-6">
            Learn how to harmonize with nature, restore soil health, and <br />{" "}
            design landscapes that feed both the soul and the planet
          </p>

          <div className="flex gap-8">
            <button className="bg-[#13EC5B] border-3 border-[#13EC5B] text-sm text-black font-black px-6 py-3 rounded-md flex items-center gap-2 shadow-md">
              <MdLocalGroceryStore />
              Buy on Amazon
            </button>
            <button className="flex gap-2 items-center bg-[#E2E8F0] border-3 border-[#E2E8F0] text-sm text-black font-black px-6 py-2 rounded-md shadow-md">
              <FaStore />
              Local Bookstore
            </button>
          </div>

          <div className="flex items-center mt-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full shadow-md mr-[-8px]"></div>
            <div className="w-10 h-10 bg-gray-200 rounded-full shadow-md mr-[-8px]"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full shadow-md mr-[-8px]"></div>
            <p className="ml-8 text-sm font-medium">
              Joined by 15k+ readers this month
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-120 bg-[#DFF6E6CC] w-full rounded-xl flex flex-col items-center gap-12 justify-center pt-10">
        <IoMdQuote size={100} className="absolute text-[#13EC5B] top-2 left-4 opacity-50" />
        <p className="mx-auto w-2/3 text-center font-semibold text-4xl">"The most comprehensive guide to sustainable gardening I've read in a decade. It transforms technical wisdom into poetic inspiration."</p>
        <div className="rounded-md h-3 w-30 mx-auto bg-[#13EC5B]" />
        <p className="mx-auto w-2/3 text-center font-semibold text-xl opacity-75">- The Daily botanical</p>
      </div>

      <ReactPlayer src='https://www.youtube.com/watch?v=LXb3EKWsInQ' style={{ width: "100%", height: "70vh"}} controls />
    </div>
  );
}
