import Header from "./Header";
import HeroVideo from "../videos/hero_video_5.webm";
import HeroImg from "../images/hero_img.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full h-[calc(100vh-80px)] [@media(max-width:550px)]:h-[50vh] relative"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-[rgba(53,0,0,0.55)] bg-blend-overlay md:hidden"
        style={{ backgroundImage: `url(${HeroImg})` }}
      ></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div
        data-aos="fade-right"
        className="relative z-10 flex flex-col items-center justify-center h-full gap-6 font-[Poppins] text-white"
      >
        <h1 className="font-extrabold text-[clamp(0.5rem,4vw,3rem)]">
          Transform Your Body, Transform Your Life
        </h1>
        <h2 className="font-semibold text-[clamp(0.3rem,2.5vw,1.875rem)]">
          Join our community and reach your fitness goals
        </h2>
        {/* for later: border-2 border-[rgba(192,57,43,0.4)] */}
        <button className="bg-white rounded-[40px] border-2 border-[rgba(192,57,43,0.4)] px-[clamp(0.95rem,2.6vw,2.5rem)] py-[clamp(0.5rem,1vw,1rem)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  font-semibold text-[clamp(0.8rem,1.5vw,1.875rem)] text-[rgba(192,57,43,1)] hover:cursor-pointer hover:scale-105 hover:bg-[rgba(192,57,43,1)] hover:text-white duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
