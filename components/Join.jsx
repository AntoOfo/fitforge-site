import { joinData } from "../data/joinData";

export default function Join() {
  return (
    <section className="mt-[clamp(2rem,4.2vw,4rem)] w-full flex flex-col items-center font-[Poppins]">
      <div className="ml-[clamp(4rem,8.4vw,8rem)] mr-[clamp(4rem,8.4vw,8rem)]">
        <h2
          data-aos="fade-up"
          className="text-center font-bold text-[clamp(1rem,2.6vw,2.5rem)] text-[rgba(192,57,43,1)] [@media(max-width:400px)]:mb-14"
        >
          Why Join Us?
        </h2>
        <div className="mt-12 mb-16 grid grid-cols-4 [@media(max-width:624px)]:grid-cols-2 [@media(max-width:624px)]:gap-18 [@media(max-width:624px)]:mt-6 [@media(max-width:400px)]:flex [@media(max-width:400px)]:flex-col  justify-between gap-[clamp(2rem,14.5vw,13.5rem)] w-full">
          {joinData.map((join) => (
            <div data-aos="fade-up" className="flex flex-col items-center">
              <img
                src={join.image}
                loading="lazy"
                className="w-[clamp(2.5rem,6vw,4.6rem)]"
              />
              <h3 className="mt-2 font-medium text-[clamp(0.5rem,1.5vw,1.5rem)] text-[rgba(192,57,43,1)] whitespace-nowrap w-auto">
                {join.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
