export default function Membership() {
    return (
        <section className="w-full bg-[rgba(192,57,43,1)] font-[Poppins]">
            <div className="ml-32 mr-32">
                <h1 className="font-bold text-[40px] text-white">Membership Plans</h1>
                <p className="font-light text-[20px] text-[rgba(255,255,255,0.85)]">Find the commitment level that fits your goals and budget.</p>
                <div className="flex">
                    <div className=" bg-white">
                        <p className="font-bold text-[20px]">Month-to-Month</p>
                        <span className="flex items-baseline">
                            <h1 className="font-bold text-[64px] text-[rgba(192,57,43,1)]">$89</h1>
                            <p className="font-medium text-[20px] text-[rgba(0,0,0,0.7)]">/month</p>
                        </span>
                        <p className="font-medium text-[20px] w-[314px] text-[rgba(0,0,0,0.7)]">Full facility access, unlimited classes. Cancel anytime.</p>
                        <button className="bg-white border-2 border-[rgba(192,57,43,1)] rounded-[15px] px-7 py-1.5  font-bold text-[20px] text-[rgba(192,57,43,1)] hover:cursor-pointer">
                        Select
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}