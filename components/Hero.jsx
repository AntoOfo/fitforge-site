import Header from "./Header";
import HeroImg from "../images/hero_img.jpg";

export default function HeroSection() {
  return (
    <section
      className="w-full h-[calc(100vh-80px)] bg-cover bg-center bg-[rgba(53,0,0,0.55)] bg-blend-overlay"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-6 font-[Poppins] text-white">
        <h1 className="font-extrabold text-5xl">
          Transform Your Body, Transform Your Life
        </h1>
        <h2 className="font-semibold text-3xl">
          Join our community and reach your fitness goals
        </h2>
        <button className="bg-white rounded-[40px] px-10 py-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  font-semibold text-2xl text-[rgba(192,57,43,1)] hover:cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
}
