import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

interface ICardProject {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

export default function PortfolioPage() {
  const PROJECTS: ICardProject[] = [
    {
      id: 1,
      title: "Kyoto-inspired Zen Garden",
      description:
        "A peacegul retreat featuring expert rock arrangements and meticulously raked gravel paths.",
      image: null,
    },
    {
      id: 2,
      title: "The Cotswold Cottage",
      description:
        "Lush perennial borders and climbing heritage roses in a traditional English countryside setting.",
      image: null,
    },
    {
      id: 3,
      title: "Urban Rooftop",
      description:
        "Modern vertical greenery and custom seating designed for compact metropolitan city living.",
      image: null,
    },
    {
      id: 4,
      title: "Minimalist Courtyard",
      description:
        "Clean architectural lines and structural planting for a high-end contemporary aesthetic",
      image: null,
    },
    {
      id: 5,
      title: "Mediterranean Escape",
      description:
        "Drought-tolerant plants, terraced lavender fields, and warm terracotta textures.",
      image: null,
    },
    {
      id: 6,
      title: "Wildflower Meadow",
      description:
        "A biodiverse haven for local pollinators, designed for low maintenance and high ecological impact.",
      image: null,
    },
  ];

  const categories = [
    "All",
    "Zen Gardens",
    "English Cottages",
    "Modern Minimalist",
    "Sustainable",
    "Urban Rooltops",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="flex flex-col gap-4 md:gap-8 px-2 py-4 md:py-10 md:px-10">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0F142A] font-black text-center md:text-left">Garden Projects</h3>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-0">
          <p className="text-sm md:text-md lg:text-lg font-[400] text-gray-700 leading-6 text-center md:text-left">
            A curated collection of landspace designs that harmonize nature with
            modern
            <br className="hidden md:block" />
            living, showcasing sustainable practices and aesthetic excellence.
          </p>

          <button className="ml-2 md:ml-4 lg:ml-8 text-xs sm:text-sm md:text-md lg:text-lg font-medium rounded-lg shadow-md bg-[#F0F4F2] px-4 sm:px-6 py-2">
            Start project
          </button>
        </div>
      </div>

      <div className="h-0.5 bg-[#F0F4F2] w-full" />

      <div className="flex w-full gap-2 md:gap-4 overflow-x-auto py-2 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "text-xs sm:text-sm md:text-md font-medium rounded-full shadow-md bg-[#13EC5B] px-4 sm:px-6 py-2 whitespace-nowrap"
                : "text-xs sm:text-sm md:text-md font-medium rounded-full shadow-md bg-transparent px-4 sm:px-6 py-2 whitespace-nowrap"
            }
          >
            {category}
          </button>
        ))}
      </div>

        
      <div className="h-0.5 bg-[#F0F4F2] w-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-8 py-4">
        {PROJECTS.map((project) => (
          <CardProject {...project} key={project.id} />
        ))}
      </div>

      <div className="relative h-auto md:h-100 bg-[#F0F4F2] w-full rounded-xl flex flex-col items-center gap-6 md:gap-12 justify-center py-8 md:py-10">
        <p className="mx-auto w-full md:w-2/3 text-center font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          Ready to transform your space?
        </p>

        <p className="mx-auto w-2/3 text-center text-sm md:text-lg font-[400] text-gray-700 leading-6">
          Whether you have a small balcony or a vast estate, let's
          createsomething beautiful together. Inquire today for a personalized
          consultation.
        </p>

        <button className="ml-2 md:ml-4 lg:ml-8 text-xs sm:text-sm md:text-md lg:text-lg font-medium rounded-lg shadow-md bg-[#13EC5B] px-4 sm:px-6 py-2">
          Start project
        </button>
      </div>
    </div>
  );
}

const CardProject = ({ title, description, image }: ICardProject) => (
  <div className="w-full flex flex-col bg.blue gap-2">
    <img
      src={image ?? "/book.jpg"}
      className="rounded-md w-full aspect-3/2 object-cover"
    />

    <div className="w-full flex flex-col bg-red">
      <h4 className="text-xs sm:text-sm md:text-md lg:text-lg font-medium rounded-lg">
        {title ?? "Title"}
      </h4>
      <p className="text-xs sm:text-sm font-[400] text-gray-700 leading-6">
        {description ?? "Description"}
      </p>

      <p className="text-xs sm:text-sm font-[400] text-[#13EC5B] leading-6 flex gap-2 items-center underline">
        Read more
        <BsArrowRight />
      </p>
    </div>
  </div>
);
