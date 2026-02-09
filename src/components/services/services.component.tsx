import { FaLongArrowAltRight } from "react-icons/fa";
import { FaBook, FaMicrophone, FaMountainSun } from "react-icons/fa6";

const SERVICES = [
  {
    icon: () => <FaMountainSun size={20} color="#13EC5B" />,
    title: "Landscape Design",
    description:
      "Tailored outdoor sanctuaries designed for ecological balance, year-round interest, and human serenity.",
    action: () => (
      <p className="text-[#000F05] font-black mt-auto flex items-center">
        Explore Work
        <FaLongArrowAltRight className="ml-2" />
      </p>
    ),
  },
  {
    icon: () => <FaMicrophone size={20} color="#13EC5B" />,
    title: "Expert Insights",
    description:
      "Thought leadership, keynote speaking, and press features in leading international horticultural journals.",
    action: () => (
      <p className="text-[#000F05] font-black mt-auto flex items-center">
        Media Kit
        <FaLongArrowAltRight className="ml-2" />
      </p>
    ),
  },
  {
    icon: () => <FaBook size={20} color="#13EC5B" />,
    title: "The Green Thumb",
    description:
      "My latest best-selling publication: The definitive guide to sustainable gardening and modern plant care.",
    action: () => (
      <p className="text-[#000F05] font-black mt-auto flex items-center">
        Buy the Book
        <FaLongArrowAltRight className="ml-2" />
      </p>
    ),
  },
];

export default function ServicesComponent() {
  return (
    <div className="w-full flex flex-col items-center lg:items-start py-12 text-white px-4 md:px-10 lg:px-20 gap-8 font-black">
      <h2 className="text-[#000F05] text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black ">
        Professional Services
      </h2>

      <p className="text-gray-800 mx-auto lg:mx-0 text-center lg:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl w-full sm:w-3/4 font-medium">
        Discover the intersection of nature and architecture through my
        specialized design consultancy and international publications
      </p>

      <div className="w-full overflow-x-auto scrollbar-hide my-2">
        <div className="flex justify-around gap-8 pb-4 min-w-max px-2">
          {SERVICES.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ServiceItem = ({
  action,
  icon,
  title,
  description,
}: {
  icon: () => React.ReactNode;
  title: string;
  description: string;
  action: () => React.ReactNode;
}) => (
  <div
    className="rounded-xl 
      max-w-xs
      lg:max-w-sm
      mb-4
      shadow-xl 
      bg-gray-50 
      border border-gray-200 
      flex 
      flex-col 
      p-6 
      gap-4
      transition-shadow 
      duration-300"
  >
    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
      {icon()}
    </div>
    <h4 className="w-full text-gray-800 text-xl font-bold mt-2">{title}</h4>
    <p className="text-gray-600 font-medium text-base mt-2 flex-grow">
      {description}
    </p>
    <div className="mt-4">{action()}</div>
  </div>
);
