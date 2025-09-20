import Logo from "../images/sitelogo.png"

export default function Header() {
    const navLinks = ["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT"];
    
    return (
        <header className="flex items-center justify-between px-40 h-20 w-full bg-white">
            <img src={Logo} className="w-20"/> 
            <nav className="flex ml-[483px] gap-9 font-[Poppins] font-normal text-lg">
                {navLinks.map(link => ( 
                    <a className="hover:text-[rgba(192,57,43,1)] cursor-pointer">
                        {link}
                    </a>
                ))}
            </nav>
        </header>
    )
}