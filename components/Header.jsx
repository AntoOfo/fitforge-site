import { Link } from "react-scroll";
import Logo from "../images/sitelogo.png";

export default function Header() {
  const navLinks = ["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT"];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-[clamp(5rem,105vw,10rem)] h-[clamp(2rem,5.2vw,5rem)] w-full bg-white">
      <img
        src={Logo}
        alt="FitForge logo"
        loading="lazy"
        className="w-[clamp(2.5rem,5.2vw,5rem)]"
      />
      <nav className="flex ml-[483px] gap-9 font-[Poppins] font-normal text-[clamp(0.55rem,1.2vw,1.125rem)]">
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
