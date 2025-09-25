import ImageTwo from "../images/mission_img.jpg";
import ImageOne from "../images/mission_2.jpg";
import ImageThree from "../images/mission_3.jpg";
import ImageFour from "../images/mission_4.jpg";
import ImageFive from "../images/mission_5.jpg";
import ImageSix from "../images/mission_6.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Mission() {
  const images = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive,
    ImageSix,
  ];
  return (
    <section
      id="about"
      className="w-full bg-[rgba(239,239,239,1)] font-[Poppins]"
    >
      <div className="flex gap-52 py-16 mt-6 ml-32 mr-32">
        <div>
          <h2 className="font-bold text-[40px] text-[rgba(192,57,43,1)]">
            Our Mission
          </h2>
          <p className="mt-9 font-normal text-2xl text-[rgba(0,0,0,0.7)]">
            We are the catalyst for your best life, not just a facility. We
            believe true fitness is built on confidence, consistency, and
            community. We commit to providing expert guidance, a judgment-free
            environment, and the tools you need to not just meet your goals, but
            to redefine your potential and sustain lifelong well-being.
          </p>
        </div>

        <div className="w-89 h-96 rounded-4xl overflow-hidden flex-shrink-0">
          {/* outer wrapper for whole carousel, scrolling.. snapping*/}
          <Carousel className="w-full h-full">
            {/* container that holds the slides*/}
            <CarouselContent className="h-full">
              {images.map((imgSrc, index) => (
                <CarouselItem key={index} className="basis-full h-full px-0">
                  {" "}
                  {/* one single slide in carousel */}
                  <img src={imgSrc} className="w-full h-full object-cover" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hover:cursor-pointer" />
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-20 hover:cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
