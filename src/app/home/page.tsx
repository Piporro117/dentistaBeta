"use client"

import CardMenu from "@/components/basics/CardMenu"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"


// Pagina principal de la pagina
export default function PageHome() {

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

        <div className="grid grid-cols-1 grid-rows-[500px_auto] w-full z-0">

            <div>
                <Carousel className="w-full  h-full" setApi={setApi} opts={{
                    loop: true,
                }}>
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



                {/** BARRA DE BOTONTES */}
                <div className="flex justify-center  gap-4 ">


                    <div className="bg-indigo-300  px-3 py-1 rounded-full z-50">

                        <Button
                            onClick={() => api?.scrollPrev()}
                            disabled={!api}
                            className="rounded-full"
                        >
                            <ChevronLeft />
                        </Button>


                        { /** Botones del carrusel */}
                        {api && api.scrollSnapList().map((step, index) => (

                            <Button className=" rounded-full" key={step} onClick={() => api.scrollTo(index)}>
                                {index + 1}
                            </Button>

                        ))}

                        <Button
                            onClick={() => api?.scrollNext()}
                            disabled={!api}
                            className="rounded-full"
                        >
                            <ChevronRight />
                        </Button>

                    </div>

                </div>


            </div>

        </div>




    )
}