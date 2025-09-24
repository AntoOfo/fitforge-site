export default function Footer() {
    return (
        <section className="w-full py-20 bg-[rgba(44,44,44,1)] font-[Poppins]">
            <div className="ml-32 mr-32">
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-semibold text-2xl text-white">Explore</h2>
                        <p className="mt-6 font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Our Mission</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Facility Tour</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Membership Plans</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Meet The Team</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Testimonials</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-2xl text-white">Our Policies</h2>
                        <p className="mt-6 font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Privacy Policy</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Health Commitment Statement</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Terms & Conditions</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Modern Slavery Statement</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Environmental Policy</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-2xl text-white">Connect</h2>
                        <p className="mt-6 font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Location & Hours</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">Contact Us</p>
                        <p className="font-normal text-[20px] text-[rgba(255,255,255,0.8)] hover:cursor-pointer">FAQ</p>
                    </div>
                </div>
            </div>
        </section>
    )
}