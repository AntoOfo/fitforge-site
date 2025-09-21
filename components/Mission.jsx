import ImageOne from "../images/mission_img.jpg"
import ImageTwo from "../images/mission_2.jpg"
import ImageThree from "../images/mission_3.jpg"
import ImageFour from "../images/mission_4.jpg"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Mission() {
    const images = [ImageOne, ImageTwo, ImageThree, ImageFour]
    return (
        <section className="w-full bg-[rgba(239,239,239,1)] font-[Poppins]">
            <div className="flex gap-52 py-16 mt-16 ml-32 mr-32">
                <div>
                    <h2 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">Our Mission</h2>
                    <p className="mt-9 font-normal text-2xl text-[rgba(0,0,0,0.7)]">We are the catalyst for your best life, not just a facility. We believe true fitness is built on confidence, consistency, and community. We commit to providing expert guidance, a judgment-free environment, and the tools you need to not just meet your goals, but to redefine your potential and sustain lifelong well-being.</p>
                </div>
                
                <div className="w-full h-80 rounded-4xl overflow-hidden">
                    <Carousel className="w-full h-full">
                        <CarouselContent className="h-full">
                            {images.map((imgSrc, index) => (
                                <CarouselItem key={index} className="basis-full h-full">
                                    <Card className="p-0 w-full h-full">
                                        <CardContent className="p-0 w-full h-full">
                                            <img src={imgSrc} className="w-80 h-80 object-cover" />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious  className="absolute left-3 top-1/2 -translate-y-1/2 z-20"/>
                        <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-20" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}