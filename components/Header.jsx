import Logo from "../images/sitelogo.png"

export default function Header() {
    return (
        <header className="flex items-center justify-between px-40 h-24 w-full bg-white">
            <img src={Logo} className="w-24"/> 
            <nav className="flex ml-[483px] gap-9">
                <a>HOME</a>
                <a>ABOUT</a>
                <a>SERVICES</a>
                <a>PRICING</a>
                <a>CONTACT</a>
            </nav>
        </header>
    )
}