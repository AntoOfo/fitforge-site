import { Link } from "react-scroll";
import Logo from "../images/sitelogo.png";

export default function Header() {
  const navLinks = ["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT"];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-[clamp(1rem,5vw,10rem)] h-[clamp(2rem,5.2vw,5rem)] w-full bg-white [@media(max-width:430px)]:h-auto [@media(max-width:430px)]:py-1.5 [@media(max-width:430px)]:flex-col [@media(max-width:430px)]:items-center [@media(max-width:430px)]:justify-center">
      <img
        src={Logo}
        alt="FitForge logo"
        loading="lazy"
        className="w-[clamp(2.5rem,5.2vw,5rem)]"
      />
      <nav className="flex ml-[clamp(0rem,31.7vw,30.18rem)] gap-[clamp(0.5rem,2.3vw,2.25rem)] font-[Poppins] font-normal text-[clamp(0.55rem,1.2vw,1.125rem)] [@media(max-width:430px)]:ml-0 [@media(max-width:430px)]:items-center [@media(max-width:430px)]:justify-between [@media(max-width:430px)]:w-full [@media(max-width:430px)]:mt-1.5">
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
