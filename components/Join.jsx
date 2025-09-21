import { joinData } from "../data/joinData"

export default function Join() {
    return (
        <section className="flex flex-col font-[Poppins]">
            <div>
                <h2 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">
                    Why Join Us?
                </h2>
                <span>
                    {joinData.map(join => (
                        <div>
                            <img src={join.image} className="w-[75px]" />
                            <h3 className="font-medium text-2xl text-[rgba(192,57,43,1)]">
                                {join.text}
                            </h3>
                        </div>
                    ))}
                </span>
            </div>
        </section>
    )
}