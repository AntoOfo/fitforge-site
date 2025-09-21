import { joinData } from "../data/joinData"

export default function Join() {
    return (
        <section className="bg-blue-700">
            <div>
                <h2>Why Join Us?</h2>
                <span>
                    {joinData.map(join => (
                        <div>
                            <img src={join.image} />
                            <h3>{join.text}</h3>
                        </div>
                    ))}
                </span>
            </div>
        </section>
    )
}