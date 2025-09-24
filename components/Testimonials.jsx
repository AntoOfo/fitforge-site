import { testimonialData } from "../data/testimonialData";

export default function Testimonials() {
  return (
    <section className="w-full py-20 font-[Poppins]">
      <div className="ml-32 mr-32">
        <h1 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">
          Testimonials
        </h1>
        <div className="flex justify-between mt-[110px]">
          {testimonialData.map((testimony) => (
            <div className="relative flex flex-col p-6 bg-[rgba(239,239,239,1)] rounded-[20px] shadow-[0_2px_10px_1px_rgba(0,0,0,0.15)]">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <img
                  src={testimony.image}
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
