import React from "react"

import { exploreData } from "../data/exploreData"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"

export default function Explore() {
    const [api, setApi] = React.useState(null)
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className="w-full font-[Poppins]">
            <div className="flex flex-col py-16 items-center">
                <h2 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">Explore The Gym</h2>


                <div className="flex mt-3">
                    <Carousel setApi={setApi} className="w-[1390px]"> 
                            <CarouselContent className="-ml-1">
                                {exploreData.map(explore => (
                                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                                        <div className="p-4">
                                            <Card className="border-0 shadow-none">
                                                <CardContent className="flex flex-col p-4">
                                                    <img 
                                                        src={explore.image} 
                                                        alt={explore.title} 
                                                        className="w-full h-[348px] object-cover rounded-lg border-4 border-[rgba(192,57,43,1)]"
                                                    />
                                                    <h3 className="mt-4 font-bold text-[32px] text-[rgba(192,57,43,0.8)]">
                                                        {explore.title}
                                                    </h3>
                                                    <p className="mt-2 w-full font-normal text-[20px] text-[rgba(0,0,0,0.8)]">
                                                        {explore.desc}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        
                        
                        <div className="flex items-center gap-4">
                            <Progress value={(current / count) * 100} className="w-36 " />
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                    
                </div>
            </div>
        </section>
    )
}