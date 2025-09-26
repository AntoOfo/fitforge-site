import { joinData } from "../data/joinData";

export default function Join() {
  return (
    <section className="mt-16 w-full flex flex-col items-center font-[Poppins]">
      <div className="ml-32 mr-32">
        <h2
          data-aos="fade-up"
          className="text-center font-bold text-[40px] text-[rgba(192,57,43,1)]"
        >
          Why Join Us?
        </h2>
        <div className="mt-12 mb-16 flex justify-between gap-[221px] w-full">
          {joinData.map((join) => (
            <div data-aos="fade-up" className="flex flex-col items-center">
              <img src={join.image} className="w-[75px]" />
              <h3 className="mt-2 font-medium text-2xl text-[rgba(192,57,43,1)]">
                {join.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
