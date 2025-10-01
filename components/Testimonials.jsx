import { testimonialData } from "../data/testimonialData";

export default function Testimonials() {
  return (
    <section className="w-full py-[clamp(2.5rem,5.2vw,5rem)] font-[Poppins]">
      <div className="ml-[clamp(4rem,8.4vw,8rem)] mr-[clamp(4rem,8.4vw,8rem)]">
        <h1 className="font-bold text-[clamp(1rem,2.6vw,2.5rem)] text-[rgba(192,57,43,1)]">
          Testimonials
        </h1>
        <div className="grid grid-cols-3 [@media(max-width:760px)]:grid-cols-2 [@media(max-width:500px)]:flex [@media(max-width:500px)]:flex-col  gap-[clamp(3.25rem,6.8vw,6.5rem)] justify-between mt-[clamp(3.4rem,7.2vw,6.875rem)]">
          {testimonialData.map((testimony) => (
            <div
              key={testimony.name}
              className="relative flex flex-col items-center p-[clamp(0.75rem,1.5vw,1.5rem)] bg-[#efefef6b] rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
            >
              <div className="absolute -top-[clamp(1.5rem,3.1vw,3rem)] left-1/2 transform -translate-x-1/2">
                <img
                  src={testimony.image}
                  loading="lazy"
                  alt={testimony.name}
                  className="w-[clamp(4rem,8.5vw,8.125rem)] h-[clamp(4rem,8.5vw,8.125rem)] [@media(max-width:760px)]:w-[70px] [@media(max-width:760px)]:h-[70px] rounded-full border-8 border-white object-cover"
                />
              </div>
              <p className=" w-[clamp(9.2rem,19.5vw,18.56rem)] [@media(max-width:760px)]:w-full mt-[clamp(2.3rem,4.9vw,4.68rem)] mb-[clamp(0.5rem,1.5vw,1.5rem)] font-medium text-center text-[clamp(0.5rem,1vw,1rem)] text-[rgba(0,0,0,0.6)]">
                {testimony.review}
              </p>
              <span className="mt-auto  gap-3 flex items-baseline justify-center">
                <h2 className="font-semibold text-[clamp(0.6rem,1.3vw,1.25rem)] text-[rgba(192,57,43,1)]">
                  {testimony.name}
                </h2>
                <p className="font-medium text-[clamp(0.4rem,0.9vw,0.875rem)] text-[rgba(0,0,0,0.6)]">
                  {testimony.role}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
