import { testimonialData } from "../data/testimonialData";

export default function Testimonials() {
  return (
    <section className="w-full py-[clamp(2.5rem,5.2vw,5rem)] font-[Poppins]">
      <div className="ml-[clamp(4rem,8.4vw,8rem)] mr-[clamp(4rem,8.4vw,8rem)]">
        <h1 className="font-bold text-[clamp(1rem,2.6vw,2.5rem)] text-[rgba(192,57,43,1)]">
          Testimonials
        </h1>
        <div className="flex justify-between mt-[clamp(3.4rem,7.2vw,6.875rem)]">
          {testimonialData.map((testimony) => (
            <div
              key={testimony.name}
              className="relative flex flex-col p-6 bg-[rgba(239,239,239,1)] rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <img
                  src={testimony.image}
                  loading="lazy"
                  alt={testimony.name}
                  className="w-[130px] h-[130px] rounded-full border-8 border-white object-cover"
                />
              </div>
              <p className=" w-[297px] mt-[75px] mb-6 font-medium text-center text-[16px] text-[rgba(0,0,0,0.6)]">
                {testimony.review}
              </p>
              <span className="mt-auto  gap-3 flex items-baseline justify-center">
                <h2 className="font-semibold text-[20px] text-[rgba(192,57,43,1)]">
                  {testimony.name}
                </h2>
                <p className="font-medium text-[14px] text-[rgba(0,0,0,0.6)]">
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
