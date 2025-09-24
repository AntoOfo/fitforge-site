import { teamData } from "../data/teamData";

import { Separator } from "@/components/ui/separator";

export default function Team() {
  return (
    <>
      <section className="w-full py-20 font-[Poppins]">
        <div className="ml-32 mr-32">
          <h1 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">
            Meet The Team
          </h1>
          <div className="flex justify-between mt-[72px]">
            {teamData.map((team) => (
              <div className="justify-items-center py-12 px-4 rounded-[134px] bg-[rgba(239,239,239,1)] shadow-[0_2px_10px_1px_rgba(0,0,0,0.15)]">
                <img
                  src={team.image}
                  className="w-[149px] h-[149px] rounded-full object-cover shadow-[0_4px_15.1px_1px_rgba(0,0,0,0.15)]"
                />
                <h3 className="mt-[18px] font-semibold text-[20px] text-[rgba(192,57,43,1)]">
                  {team.name}
                </h3>
                <p className="font-medium italic text-[16px] text-[rgba(0,0,0,0.6)]">
                  {team.role}
                </p>
                <p className="mt-[26px] font-medium text-center text-[16px] w-[187px] text-[rgba(0,0,0,0.6)]">
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
