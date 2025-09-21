import Placeholder from "../images/mission_img.jpg"

export default function Mission() {
    return (
        <section className="w-full bg-[rgba(239,239,239,1)] font-[Poppins]">
            <div className="flex  ml-32 mr-32">
                <div className="mt-16 mr-52">
                    <h2 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">Our Mission</h2>
                    <p className="mt-9 font-normal text-2xl text-[rgba(0,0,0,0.7)]">We are the catalyst for your best life, not just a facility. We believe true fitness is built on confidence, consistency, and community. We commit to providing expert guidance, a judgment-free environment, and the tools you need to not just meet your goals, but to redefine your potential and sustain lifelong well-being.</p>
                </div>
                <img src={Placeholder} className="w-80 h-80 object-cover mt-16 mb-16 rounded-4xl" />
            </div>
        </section>
    )
}