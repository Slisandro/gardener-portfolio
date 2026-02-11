import { BiLeaf } from "react-icons/bi";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdEmail, MdOutlineAlternateEmail } from "react-icons/md";

export default function FooterComponent() {
  return (
    <footer className="w-full py-8 lg:py-16 md:py-8 border-t border-[#babbba] flex items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32 h-50 md:h-100 grid-cols-3 grid gap-4">
      <div className="col-span-1 h-full flex flex-col sm:gap-6 gap-2">
        <div className="flex items-center sm:gap-4">
          <div className="mx-auto sm:mx-0 flex items-center justify-center bg-[#13EC5B] p-2 rounded-lg">
            <BiLeaf className="bg-[#13EC5B] text-black w-4 h-4" />
          </div>

          <h2 className="hidden sm:block text-md lg:text-xl font-black">
            Arthur Thorner
          </h2>
        </div>

        <p className="text-center sm:text-left sm:mt-4 text-xs md:text-md lg:text-lg font-large">
          Redefining modern spaces through horticultural excellence. Serving the
          global community from my studio in the Costwolds.
        </p>
      </div>
      <div className="col-span-1 flex flex-col gap-2 h-full items-center flex-1">
        <h2 className="text-md lg:text-xl font-black text-gray-400 sm:mb-8">
          Navigation
        </h2>
        <ul className="flex flex-col gap-0 sm:gap-4 justify-between">
          {[
            "Selected Projects",
            "Press & Media",
            "The Green Thumb Book",
            "Consultation",
          ].map((item, index) => (
            <li
              key={index}
              className="text-center text-xs md:text-md lg:text-lg font-large hover:text-[#13EC5B] cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-1 flex flex-col gap-2 sm:gap-10 h-full items-center flex-1">
        <h2 className="text-md lg:text-xl font-black text-gray-400">
          Newsletter
        </h2>
        <p className="text-center text-xs md:text-md lg:text-lg font-large hover:text-[#13EC5B] cursor-pointer">
          Seasonal tips and garden design updates
        </p>
        <div className="flex items-center w-full">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 bg-gray-100 border-l-md rounded-md sm:rounded-l-md text-xs md:text-md lg:text-lg font-large"
          />
          <button className="hidden sm:block px-4 py-2 bg-[#13EC5B] text-xs md:text-md lg:text-lg font-medium rounded-r-md hover:bg-green-600 transition-colors">
            JOIN
          </button>
        </div>
        <button className="sm:hidden block px-4 py-2 bg-[#13EC5B] text-xs md:text-md lg:text-lg font-medium rounded-md hover:bg-green-600 transition-colors w-full">
          JOIN
        </button>
      </div>
      <div className="col-span-3 flex flex-col items-center">
        <div className="flex items-center gap-8 p-4">
          {[FaEarthAmericas, MdEmail, MdOutlineAlternateEmail].map(
            (Icon, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-full flex items-center justify-center p-2 rounded-full"
              >
                <Icon className="text-gray-600 h-4 w-4 md:h-6 md:w-6 cursor-pointer hover:text-[#13EC5B] transition-colors" />
              </div>
            ),
          )}
        </div>
        <p className="text-xs md:text-md lg:text-lg text-gray-600 block mt-auto mb-4">
          © 2024 Arthur Thorner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
