import { membershipData } from "../data/membershipData";

export default function Membership() {
  return (
    <section
      id="pricing"
      className="w-full py-[clamp(2.5rem,5.2vw,5rem)] bg-[rgba(192,57,43,1)] font-[Poppins]"
    >
      <div className="ml-[clamp(4rem,8.4vw,8rem)] mr-[clamp(4rem,8.4vw,8rem)]">
        <h1
          data-aos="fade-right"
          className="font-bold text-[clamp(1rem,2.6vw,2.5rem)] text-white [@media(max-width:570px)]:text-center"
        >
          Membership Plans
        </h1>
        <p
          data-aos="fade-right"
          className="font-light text-[clamp(0.5rem,1.3vw,1.25rem)] text-[rgba(255,255,255,0.85)] [@media(max-width:570px)]:text-center"
        >
          Find the commitment level that fits your goals and budget.
        </p>
        <div className="flex justify-between [@media(max-width:750px)]:flex-col [@media(max-width:570px)]:items-center">
          {membershipData.map((membership) => (
            <div
              data-aos="fade-left"
              className="mt-[clamp(2rem,3.1vw,3rem)] px-[clamp(0.5rem,1.3vw,1.25rem)] py-[clamp(0.75rem,1.5vw,1.5rem)] rounded-2xl bg-white flex [@media(min-width:751px)]:flex-col [@media(max-width:570px)]:flex-col [@media(max-width:750px)]:[@media(min-width:570px)]:justify-between [@media(max-width:750px)]:[@media(min-width:570px)]:items-center [@media(max-width:750px)]:[@media(min-width:570px)]:px-[clamp(0.3rem,2.4vw,2rem)] [@media(max-width:570px)]:w-60"
            >
              <p className="[@media(max-width:750px)]:[@media(min-width:570px)]:order-2 font-bold text-[clamp(0.5rem,1.3vw,1.25rem)] [@media(max-width:750px)]:[@media(min-width:570px)]:text-[rgba(0,0,0,0.7)]">
                {membership.type}
              </p>
              <span className="[@media(max-width:750px)]:[@media(min-width:570px)]:order-1 mt-[3px] mb-0.5 flex items-baseline ">
                <h1 className="font-bold text-[clamp(2rem,4.2vw,4rem)] text-[rgba(192,57,43,1)]">
                  £{membership.price}
                </h1>
                <p className="font-medium text-[clamp(0.5rem,1.3vw,1.25rem)] text-[rgba(0,0,0,0.7)]">
                  /month
                </p>
              </span>
              <p className="[@media(max-width:750px)]:[@media(min-width:570px)]:order-3  mb-6 [@media(max-width:750px)]:[@media(min-width:570px)]:mb-0 font-medium text-[clamp(0.5rem,1.3vw,1.25rem)] w-[clamp(5rem,23.3vw,22.18rem)] [@media(max-width:570px)]:w-full text-[rgba(0,0,0,0.7)]">
                {membership.desc}
              </p>
              <div className="[@media(max-width:750px)]:[@media(min-width:570px)]:order-4  mt-auto [@media(max-width:750px)]:[@media(min-width:570px)]:mt-0 flex justify-end">
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
