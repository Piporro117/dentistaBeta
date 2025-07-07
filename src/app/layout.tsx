"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/basics/navbar";
import CardMenu from "@/components/basics/CardMenu";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])



  return (
    <html lang="en">


      <body

      >

        <NavBar />




        <div className="grid grid-cols-1 grid-rows-[500px_auto] w-full">

          <div>
            <Carousel className="w-full  h-full" setApi={setApi}>
              <CarouselContent>
                <CarouselItem>

                  <CardMenu />

                </CarouselItem>

                <CarouselItem>

                  <CardMenu />
                </CarouselItem>

                <CarouselItem>

                  <CardMenu />

                </CarouselItem>
              </CarouselContent>
            </Carousel>

            <div className="flex justify-between gap-4 mt-4">
              <Button
                onClick={() => api?.scrollPrev()}
                disabled={!api}
                className="w-1/2"
              >
                Anterior
              </Button>

              <Button
                onClick={() => api?.scrollNext()}
                disabled={!api}
                className="w-1/2"
              >
                Siguiente
              </Button>
            </div>


          </div>

        </div>







        {children}
      </body>
    </html>
  );
}
