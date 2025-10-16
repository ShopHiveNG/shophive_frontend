import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

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
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1964",
      gradient: { from: "from-primary-dark", to: "to-primary-light" },
      buttonColor: "#33B36B",
    },
    {
      title: "smart tech, near you",
      description: "Latest gadgets from trusted local stores.",
      image:
        "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&q=80&w=2070",
      gradient: { from: "from-secondary-dark", to: "to-secondary-light" },
      buttonColor: "#FFB878",
    },
    {
      title: "style, right next door",
      description: "Trendy outfits from nearby stores.",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=2070",
      gradient: { from: "from-blue-dark", to: "to-blue-light" },
      buttonColor: "#1c6fc1",
    },
  ];

  const { ArrowRightIcon } = Icons;

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div aria-label="Hero Section">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
        setApi={setApi}
        className="relative w-full"
      >
        <CarouselContent>
          {heroDisplay.map(
            ({ title, description, image, gradient, buttonColor }, i) => (
              <CarouselItem key={i}>
                <Card className="grid min-h-[calc(100dvh-120px)] rounded-none border-none p-0">
                  <CardContent
                    className={cn(
                      "flex flex-col gap-2 bg-gradient-to-br px-0 sm:flex-row",
                      gradient.to,
                      gradient.from,
                    )}
                  >
                    <div className="my-auto w-full space-y-10 pl-12">
                      <div className="space-y-4 text-white">
                        <p>{description}</p>
                        <h1 className="w-[61%] text-[3.5rem] leading-16 font-bold capitalize">
                          {title}
                        </h1>
                      </div>

                      <Button
                        style={{ backgroundColor: buttonColor }}
                        className="group cursor-pointer p-6 text-white capitalize shadow-xs transition-all duration-300 hover:opacity-90 active:scale-105"
                      >
                        shop now
                        <span>
                          <ArrowRightIcon className="duration-300 group-hover:-rotate-25" />
                        </span>
                      </Button>
                    </div>

                    <div className="w-full">
                      <img
                        src={image}
                        alt={title}
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
              className={cn(
                "size-3 cursor-pointer rounded-full bg-white/50 hover:bg-white/70",
                {
                  "bg-white": current === i + 1,
                },
              )}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
