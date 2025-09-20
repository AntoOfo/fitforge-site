import Header from "./Header"
import HeroImg from "../images/hero_img.jpg"

export default function HeroSection() {
    return (
        <div className="w-full h-screen relative">
            <Header />

            <div 
            className="w-full h-[calc(100vh-96px)] bg-cover bg-center bg-[rgba(100,0,0,0.48)] bg-blend-overlay"
            style={{ backgroundImage: `url(${HeroImg})` }}>
                <h1>Transform Your Body, Transform Your Life</h1>
            </div>
            
        </div>
    );
}