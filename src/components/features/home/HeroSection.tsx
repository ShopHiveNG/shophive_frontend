import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/Icon";

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const heroDisplay = [
    {
      title: "shop local, live better",
      description: "Quality nearby, always.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964",
      gradientColour: "bg-green-700",
    },
    {
      title: "smart tech, near you",
      description: "Latest gadgets from trusted local stores.",
      image:
        "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      gradientColour: "bg-orange-700",
    },
    {
      title: "style, right next door",
      description: "Trendy outfits from nearby stores.",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      gradientColour: "bg-blue-700",
    },
  ];

  const { ArrowRightIcon } = Icons;

  return (
    <div aria-label="Hero Section">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        setApi={setApi}
        className="relative w-full"
      >
        <CarouselContent>
          {heroDisplay.map(
            ({ title, description, image, gradientColour }, i) => (
              <CarouselItem key={i}>
                <Card className="grid min-h-[calc(100dvh-120px)] rounded-none border-none p-0">
                  <CardContent
                    className={`${gradientColour} flex flex-col gap-2 px-0 sm:flex-row`}
                  >
                    <div className="my-auto w-full space-y-10 pl-12">
                      <div className="space-y-4 text-white">
                        <p>{description}</p>
                        <h1 className="w-[61%] text-[3.5rem] font-bold capitalize">
                          {title}
                        </h1>
                      </div>

                      <Button className="bg-primary-light group hover:bg-primary-dark cursor-pointer p-6 text-white capitalize transition-all duration-300 active:scale-105">
                        shop now
                        <span>
                          <ArrowRightIcon className="duration-300 group-hover:-rotate-25" />
                        </span>
                      </Button>
                    </div>

                    <div className="w-full">
                      <img
                        src={image}
                        alt="image name"
                        className="block size-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ),
          )}
        </CarouselContent>

        {/* PAGINATION DOTS */}
        <div className="absolute right-1/2 bottom-10 flex translate-x-1/2 space-x-2 sm:bottom-6">
          {Array.from({ length: count }).map((_, i) => (
            <Button
              size={"icon-sm"}
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn("size-3 rounded-full bg-white/50", {
                "bg-white": current === i + 1,
              })}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
