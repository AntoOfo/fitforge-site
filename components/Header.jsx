import { Link } from "react-scroll";
import Logo from "../images/sitelogo.png";

export default function Header() {
  const navLinks = ["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT"];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-40 h-20 w-full bg-white">
      <img src={Logo} alt="FitForge logo" loading="lazy" className="w-20" />
      <nav className="flex ml-[483px] gap-9 font-[Poppins] font-normal text-lg">
        {navLinks.map((link) => (
          <Link
            key={link}
            to={link.toLowerCase()}
            smooth={true}
            offset={-80}
            duration={500}
            className="hover:text-[rgba(192,57,43,1)] cursor-pointer"
          >
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
