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
        <div className="flex justify-between">
          {membershipData.map((membership) => (
            <div
              data-aos="fade-left"
              className="mt-12 px-5 py-6 rounded-2xl bg-white"
            >
              <p className="font-bold text-[20px]">{membership.type}</p>
              <span className="mt-[3px] mb-0.5 flex items-baseline">
                <h1 className="font-bold text-[64px] text-[rgba(192,57,43,1)]">
                  £{membership.price}
                </h1>
                <p className="font-medium text-[20px] text-[rgba(0,0,0,0.7)]">
                  /month
                </p>
              </span>
              <p className="font-medium text-[20px] w-[355px] text-[rgba(0,0,0,0.7)]">
                {membership.desc}
              </p>
              <div className="mt-4 flex justify-end">
                <button className="bg-white border-2 border-[rgba(192,57,43,1)] rounded-[15px] px-7 py-1.5  font-bold text-[20px] text-[rgba(192,57,43,1)] hover:cursor-pointer hover:bg-[rgba(192,57,43,1)] hover:text-white duration-150">
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
