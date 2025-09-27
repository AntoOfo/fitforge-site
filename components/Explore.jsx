import React from "react";
import { exploreData } from "../data/exploreData";
import { Card, CardContent } from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Explore() {
  return (
    <section id="services" className="w-full font-[Poppins]">
      <div className="flex flex-col py-16 items-center">
        <h2
          data-aos="fade-up"
          className="font-bold text-[40px] text-[rgba(192,57,43,1)]"
        >
          Explore The Gym
        </h2>

        <Swiper spaceBetween={24} slidesPerView={2} className="max-w-[1300px]">
          {exploreData.map((explore, index) => (
            <SwiperSlide key={index}>
              <Card className="border-0 shadow-none">
                <CardContent className="flex flex-col p-4">
                  <img
                    src={explore.image}
                    alt={explore.title}
                    loading="lazy"
                    className="w-full h-[348px] object-cover rounded-lg border-3 border-[rgba(192,57,43,1)]"
                  />
                  <h3 className="mt-4 font-bold text-[32px] text-[rgba(192,57,43,0.8)]">
                    {explore.title}
                  </h3>
                  <p className="mt-2 w-full font-normal text-[20px] text-[rgba(0,0,0,0.8)]">
                    {explore.desc}
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
