export default function Testimonials() {
    return (
        <section className="w-full py-20 font-[Poppins]">
            <div className="ml-32 mr-32">
                <h1 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">Testimonials</h1>
                <div className="flex justify-between">
                    <div className="bg-[rgba(239,239,239,1)] rounded-[20px] p-6">
                        <p className=" w-[297px] font-medium text-center text-[16px] text-[rgba(0,0,0,0.6)]">"I've tried a few gyms, but this is the first one where I actually feel like showing up. The equipment is top-notch, and the lack of judgment made all the difference. I hit my first major strength goal here!"</p>
                        <span className="mt-[23px] gap-3 flex items-baseline justify-center">
                            <h2 className="font-semibold text-[20px] text-[rgba(192,57,43,1)]">Sarah K</h2>
                            <p className="font-medium text-[14px] text-[rgba(0,0,0,0.6)]">6-Month Contract</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}