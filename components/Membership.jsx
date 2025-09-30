import { membershipData } from "../data/membershipData";

export default function Membership() {
  return (
    <section
      id="pricing"
      className="w-full py-20 bg-[rgba(192,57,43,1)] font-[Poppins]"
    >
      <div className="ml-32 mr-32">
        <h1
          data-aos="fade-right"
          className="font-bold text-[clamp(1rem,2.6vw,2.5rem)] text-white"
        >
          Membership Plans
        </h1>
        <p
          data-aos="fade-right"
          className="font-light text-[clamp(0.5rem,1.3vw,1.25rem)] text-[rgba(255,255,255,0.85)]"
        >
          Find the commitment level that fits your goals and budget.
        </p>
        <div className="flex justify-between [@media(max-width:1286px)]:flex-col">
          {membershipData.map((membership) => (
            <div
              data-aos="fade-left"
              className="mt-12 px-[clamp(0.5rem,1.3vw,1.25rem)] py-[clamp(0.75rem,1.5vw,1.5rem)] rounded-2xl bg-white flex [@media(min-width:1286px)]:flex-col [@media(max-width:1286px)]:justify-between [@media(max-width:1286px)]:items-center"
            >
              <p className="[@media(max-width:1286px)]:order-2 font-bold text-[clamp(0.5rem,1.3vw,1.25rem)] [@media(max-width:1286px)]:text-[rgba(0,0,0,0.7)]">
                {membership.type}
              </p>
              <span className="[@media(max-width:1286px)]:order-1 mt-[3px] mb-0.5 flex items-baseline ">
                <h1 className="font-bold text-[clamp(2rem,4.2vw,4rem)] text-[rgba(192,57,43,1)]">
                  £{membership.price}
                </h1>
                <p className="font-medium text-[clamp(0.5rem,1.3vw,1.25rem)] text-[rgba(0,0,0,0.7)]">
                  /month
                </p>
              </span>
              <p className="[@media(max-width:1286px)]:order-3  mb-6 [@media(max-width:1286px)]:mb-0 font-medium text-[clamp(0.5rem,1.3vw,1.25rem)] w-[clamp(5rem,23.3vw,22.18rem)] text-[rgba(0,0,0,0.7)]">
                {membership.desc}
              </p>
              <div className="[@media(max-width:1286px)]:order-4  mt-auto [@media(max-width:1286px)]:mt-0 flex justify-end">
                <button className="bg-white border-2 border-[rgba(192,57,43,1)] rounded-[15px] px-[clamp(0.86rem,1.8vw,1.75rem)] py-[clamp(0.18rem,0.39vw,0.375rem)]  font-bold text-[clamp(0.5rem,1.3vw,1.25rem)] text-[rgba(192,57,43,1)] hover:cursor-pointer hover:bg-[rgba(192,57,43,1)] hover:text-white duration-150">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
