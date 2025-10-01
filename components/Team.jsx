import { teamData } from "../data/teamData";

import { Separator } from "@/components/ui/separator";

export default function Team() {
  return (
    <>
      <section className="w-full py-20 font-[Poppins]">
        <div className="ml-[clamp(4rem,8.4vw,8rem)] mr-[clamp(4rem,8.4vw,8rem)]">
          <h1 className="font-bold text-[clamp(1rem,2.6vw,2.5rem)] text-[rgba(192,57,43,1)]">
            Meet The Team
          </h1>
          <div className="grid grid-cols-4 [@media(max-width:760px)]:grid-cols-2 [@media(max-width:460px)]:flex [@media(max-width:460px)]:flex-col gap-[clamp(3.5rem,7.3vw,7rem)] mt-[clamp(2.25rem,4.7vw,4.5rem)]">
            {teamData.map((team) => (
              <div
                key={team.name}
                className="justify-items-center py-[clamp(1.5rem,3.1vw,3rem)] px-[clamp(0.5rem,1vw,1rem)] [@media(max-width:760px)]:px-8 rounded-[clamp(4.1rem,8.8vw,8.375rem)] bg-[#efefef6b] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
              >
                <img
                  src={team.image}
                  loading="lazy"
                  alt={team.name}
                  className="w-[clamp(4.6rem,9.7vw,9.3rem)] h-[clamp(4.6rem,9.7vw,9.3rem)] rounded-full object-cover"
                />
                <h3 className="mt-[clamp(0.56rem,1.1vw,1.125rem)] font-semibold text-[clamp(0.5rem,1.3vw,1.25rem)] text-[rgba(192,57,43,1)]">
                  {team.name}
                </h3>
                <p className="font-medium italic text-[clamp(0.5rem,1vw,1rem)] [@media(max-width:518px)]:[@media(min-width:460px)]:text-[6.4px] text-[rgba(0,0,0,0.6)]">
                  {team.role}
                </p>
                <p className="mt-[clamp(0.8rem,1.7vw,1.625rem)] font-medium text-center text-[clamp(0.5rem,1vw,1rem)] w-[clamp(5.8rem,12.2vw,11.68rem)] [@media(max-width:760px)]:w-full text-[rgba(0,0,0,0.6)]">
                  {team.about}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator className="bg-[rgba(192,57,43,1)] rounded-2xl mx-auto" />
    </>
  );
}
