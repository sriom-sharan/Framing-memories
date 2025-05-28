import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardBody } from "@heroui/card";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="max-w-8xl  flex flex-col gap-12 py-12 md:py-20 px-7 mx-auto ">
      <div className="max-w-full py-5 mt-10 mb-20 mx-auto overflow-hidden">
        <div className="w-full flex items-center flex-col gap-1 justify-center mb-16 px-4">
          <p className="text-sm sm:text-lg font-semibold text-rose-600">
            Words That Matter
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
            See Why Clients Keep Coming Back
          </h3>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          className="w-full max-w-7xl "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/2 border lg:basis-1/3"
              >
                <Card className="py-4  flex ">
                  <CardBody className="overflow-visible flex justify-between py-2">
                    <div className="flex justify-center gap-6 items-start">
                      <div>
                        <div className="w-full flex items-center   pb-2">
                          {/* <img
                            src="./quotes.png"
                            className="size-4 opacity-75"
                          /> */}
                          <span className="flex items-center gap-1">
                            <Star
                              size={16}
                              className="inline "
                              color="#ffa534"
                              fill="#ffa534"
                              strokeWidth={3}
                            />
                            5
                          </span>
                          <span className="border-[0.5px] rounded-sm text-pink-500 border-pink-500 text-xs p-0.5 ml-2 px-2">
                            Family
                          </span>
                        </div>
                        <div>
                          <h6 className="font-semibold pb-2 text">
                            Uttaranchal Chardham Yatra
                          </h6>
                          <p className="font-sans text-sm">
                          A tour filled with Fun, Friendship & Trust – Making Kesari Our Travel Partner for Life!
                          </p>
                          <p className="text-blue-600 underline text-xs font-semibold py-2">Read more...</p>
                        </div>
                      </div>
                      <img
                        alt="Card background"
                        className="object-cover rounded-sm size-32"
                        src="https://heroui.com/images/hero-card-complete.jpeg"
                        
                      />
                    </div>
                    <div className="pt-4 flex flex-col justify-end w-full md:pt-6">
                      <p className=" font-semibold -mb-0.5 ">Trupti Phadtare</p>
                      <small className="text-default-500 text-sm ">
                        Travelled in May, 2025
                      </small>
                    </div>
                  </CardBody>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 left-2 flex items-center justify-center">
            <CarouselPrevious className="relative left-0 translate-x-0 shadow-sm hover:translate-x-0 hover:bg-primary/90" />
          </div>
          <div className="absolute top-1/2 right-2 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 shadow-sm  hover:bg-primary/90" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
