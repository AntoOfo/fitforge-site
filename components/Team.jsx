import Placeholder from "../images/team_1.jpg"

export default function Team() {
    return (
        <section className="w-full py-20 font-[Poppins]">
            <div className="ml-32 mr-32">
                <h1 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">Meet The Team</h1>
                <div className="flex">
                    <div className="justify-items-center py-8 px-4 rounded-[134px] bg-[rgba(239,239,239,1)]">
                        <img src={Placeholder} className="w-[149px] h-[149px] rounded-full object-cover" />
                        <h3 className="font-semibold text-[20px] text-[rgba(192,57,43,1)]">Marcus Vance</h3>
                        <p className="font-medium italic text-[16px] text-[rgba(0,0,0,0.6)]">Head Coach & Founder</p>
                        <p className="font-medium text-center text-[16px] w-[187px] text-[rgba(0,0,0,0.6)]">Built this legacy on the belief that consistent effort yields uncompromising strength.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}