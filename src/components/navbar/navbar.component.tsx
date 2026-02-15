import { BiLeaf } from "react-icons/bi";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Book",
    href: "/book",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function NavbarComponent() {
  return (
    <nav className="w-full px-2 sm:px-4 md:px-8 lg:px-16 py-4 border-b border-[#babbba] flex items-center justify-between gap-6">
      <div className="w-max flex items-center justify-center gap-2 sm:gap-4">
        <div className="flex items-center justify-center bg-[#13EC5B] p-2 rounded-lg">
          <BiLeaf className="bg-[#13EC5B] text-black w-6 h-6" />
        </div>

        <h2 className="hidden md:block text-md sm:text-lg md:text-xl lg:text-2xl font-black">Arthur Thorner</h2>
      </div>

      <div className="h-full flex flex-1 justify-end items-center">
        {LINKS.map((link) => (
          <Link
            to={link.href}
            key={link.title}
            className="ml-2 md:ml-4 lg:ml-8 text-xs sm:text-sm md:text-md lg:text-lg font-medium hover:text-[#13EC5B] transition-colors"
          >
            {link.title}
          </Link>
        ))}
        <a
            className="ml-2 md:ml-4 lg:ml-8 text-xs sm:text-sm md:text-md lg:text-lg font-medium rounded-full shadow-md bg-[#13EC5B] px-4 sm:px-6 py-2"
          >
            Hire me
          </a>
      </div>
    </nav>
  );
}
