import React from "react";
import { exploreData } from "../data/exploreData";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

export default function Explore() {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="services" className="w-full font-[Poppins]">
      <div className="flex flex-col py-16 items-center">
        <h2
          data-aos="fade-up"
          className="font-bold text-[clamp(1rem,2.6vw,2.5rem)] text-[rgba(192,57,43,1)]"
        >
          Explore The Gym
        </h2>

        <div className="flex mt-3">
          <Carousel
            data-aos="fade-up"
            setApi={setApi}
            className="w-[clamp(39.5rem,85.4vw,81.25rem)]"
          >
            <CarouselContent className="-ml-1">
              {exploreData.map((explore) => (
                <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                  <div className="p-0">
                    <Card className="border-0 shadow-none">
                      <CardContent className="flex flex-col [@media(max-width:767px)]:items-center [@media(max-width:767px)]:text-center p-4">
                        <img
                          src={explore.image}
                          alt={explore.title}
                          loading="lazy"
                          className="w-full [@media(max-width:767px)]:w-[clamp(19.1rem,80vw,38.3rem)] h-[348px] [@media(max-width:767px)]:h-[clamp(8.7rem,36.5vw,17.5rem)] object-cover rounded-lg border-3 border-[rgba(192,57,43,1)]"
                        />
                        <h3 className="mt-4 font-bold text-[clamp(1rem,2.1vw,2rem)] text-[rgba(192,57,43,0.8)]">
                          {explore.title}
                        </h3>
                        <p className="mt-2 w-full [@media(max-width:767px)]:w-[clamp(19.1rem,80vw,38.3rem)] font-normal text-[clamp(0.5rem,1.3vw,1.25rem)] text-[rgba(0,0,0,0.8)]">
                          {explore.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-6">
              <CarouselPrevious className="static translate-y-0 hover:cursor-pointer" />
              <Progress
                value={(current / count) * 100}
                className="w-[clamp(5rem,10.5vw,10rem)]"
              />
              <CarouselNext className="static translate-y-0 hover:cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
{
  /* */
}
