import { joinData } from "../data/joinData"

export default function Join() {
    return (
        <section className="mt-16 w-full px-8 flex flex-col items-center font-[Poppins]">
            <div>
                <h2 className="text-center font-bold text-[40px] text-[rgba(192,57,43,1)]">
                    Why Join Us?
                </h2>
                <div className="mt-12 mb-16 flex justify-between gap-48 w-full">
                    {joinData.map(join => (
                        <div className="flex flex-col items-center">
                            <img src={join.image} className="w-[75px]" />
                            <h3 className="mt-2 font-medium text-2xl text-[rgba(192,57,43,1)]">
                                {join.text}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}