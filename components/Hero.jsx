import Header from "./Header";
import HeroImg from "../images/hero_img.jpg";
import HeroVideo from "../videos/hero_video.mp4";

export default function HeroSection() {
  return (
    <section id="home" className="w-full h-[calc(100vh-80px)] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div
        data-aos="fade-right"
        className="relative z-10 flex flex-col items-center justify-center h-full gap-6 font-[Poppins] text-white"
      >
        <h1 className="font-extrabold text-5xl">
          Transform Your Body, Transform Your Life
        </h1>
        <h2 className="font-semibold text-3xl">
          Join our community and reach your fitness goals
        </h2>
        <button className="bg-white rounded-[40px] border-2 border-[rgba(192,57,43,0.4)] px-10 py-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  font-semibold text-2xl text-[rgba(192,57,43,1)] hover:cursor-pointer hover:scale-105 duration-300 hero-pulse">
          Get Started
        </button>
      </div>
    </section>
  );
}
