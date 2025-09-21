import Placeholder from "../images/mission_img.jpg"

export default function Mission() {
    return (
        <section className="w-full bg-[rgba(239,239,239,1)] font-[Poppins]">
            <div className="flex ml-32 mr-32">
                <div>
                    <h2 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">Our Mission</h2>
                    <p className="font-normal text-2xl">We are the catalyst for your best life, not just a facility. We believe true fitness is built on confidence, consistency, and community. We commit to providing expert guidance, a judgment-free environment, and the tools you need to not just meet your goals, but to redefine your potential and sustain lifelong well-being.</p>
                </div>
                <img src={Placeholder} className="w-80 h-96 object-cover" />
            </div>
        </section>
    )
}