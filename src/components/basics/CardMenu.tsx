import Image from "next/image";
import { Button } from "../ui/button";

export default function CardMenu() {
    return (
        <div className="bg-gray-50">

            <div className="grid grid-cols-2 h-full">

                <div className="flex justify-center">
                    <Image
                        src="/Dental-care.png"
                        alt="Imagen Informativa"
                        height={600}
                        width={600}
                    />

                </div>

                <div className="p-8">
                    <p className="text-5xl ">Servicio Importante</p>

                    <p className="pt-8 text-2xl break-words text-justify">
                        Contamos con este servicio
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem provident, quaerat voluptatibus accusamus ut odio ipsa accusantium officiis repellendus quo beatae deserunt obcaecati rerum saepe veritatis, maxime eveniet? Necessitatibus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga veritatis quis qui dolore assumenda, id iusto repellat ipsa praesentium, deleniti doloremque a iste quam facere fugiat nobis soluta omnis.
                    </p>


                    <section className="flex flex-row-reverse pt-20 h-36 ">
                        <Button className="h-full w-1/3 rounded-md bg-blue-400 text-white  hover:text-blue-400 hover:bg-white text-xl hover:cursor-pointer">
                            Mas informacion
                        </Button>
                    </section>
                </div>

            </div>

        </div>
    )
}