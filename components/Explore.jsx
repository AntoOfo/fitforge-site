import Placeholder from "../images/mission_img.jpg"

export default function Explore() {
    return (
        <section className="w-full font-[Poppins] bg-amber-300">
            <div className="flex flex-col py-16 items-center">
                <h2 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">Explore The Gym</h2>
                <div className="flex mt-16">
                    <div>
                        <img src={Placeholder} className="w-[572px] h-[348px]"/>
                        <h3 className="font-bold text-[32px] text-[rgba(192,57,43,0.8)]">Cardio Equipment</h3>
                        <p className="w-[520px] font-normal text-[20px] text-[rgba(0,0,0,0.8)]">Get your heart pumping with our top-of-the-line treadmills, bikes, cross trainers, and rowers ideal for endurance, fat burn, and overall fitness.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}