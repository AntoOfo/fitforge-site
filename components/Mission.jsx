import ImageTwo from "../images/mission_img.webp";
import ImageOne from "../images/mission_2.webp";
import ImageThree from "../images/mission_3.webp";
import ImageFour from "../images/mission_4.webp";
import ImageFive from "../images/mission_5.webp";
import ImageSix from "../images/mission_6.webp";

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
      <div className="flex [@media(max-width:1084px)]:flex-col [@media(max-width:1084px)]:items-center [@media(max-width:1084px)]:text-center gap-52 [@media(max-width:1084px)]:gap-[clamp(1rem,4vw,3rem)] py-[clamp(2.5rem,5.2vw,5rem)]  mt-6 ml-[clamp(4rem,8.4vw,8rem)] mr-[clamp(4rem,8.4vw,8rem)]">
        <div>
          <h2
            data-aos="fade-right"
            className="font-bold text-[clamp(1rem,2.6vw,2.5rem)] text-[rgba(192,57,43,1)] [@media(max-width:1084px)]:text-start"
          >
            Our Mission
          </h2>
          <p
            data-aos="fade-right"
            className="mt-[clamp(0.5rem,2.3vw,2.25rem)] font-normal text-[clamp(0.5rem,1.5vw,1.5rem)] text-[rgba(0,0,0,0.7)] [@media(max-width:1084px)]:text-start"
          >
            We are the catalyst for your best life, not just a facility. We
            believe true fitness is built on confidence, consistency, and
            community. We commit to providing expert guidance, a judgment-free
            environment, and the tools you need to not just meet your goals, but
            to redefine your potential and sustain lifelong well-being.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="w-[clamp(8rem,23.4vw,22.25rem)] [@media(max-width:1084px)]:w-full h-[clamp(6rem,25.2vw,24rem)] rounded-4xl overflow-hidden flex-shrink-0"
        >
          {/* outer wrapper for whole carousel, scrolling.. snapping*/}
          <Carousel className="w-full h-full">
            {/* container that holds the slides*/}
            <CarouselContent className="h-full">
              {images.map((imgSrc, index) => (
                <CarouselItem key={index} className="basis-full h-full px-0">
                  {" "}
                  {/* one single slide in carousel */}
                  <img
                    src={imgSrc}
                    loading="lazy"
                    className="w-full h-full object-cover object-[40%_30%]"
                  />
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
