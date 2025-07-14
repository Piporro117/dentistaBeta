import Image from "next/image";
import { Button } from "../ui/button";

export default function NavBar() {
    return (
        <nav className="bg-blue-400 w-full h-20 flex justify-between">

            <div className="bg-white h-full w-64">
                <Image
                    src="/dentista.png"
                    alt="Logo"
                    height={400}
                    width={1500}
                />

            </div>


            <div className="flex h-full">
                <Button className="h-full rounded-none w-28 text-white bg-blue-400 hover:text-blue-400 hover:bg-white hover:cursor-pointer"> Boton </Button>
                <Button className="h-full rounded-none w-28 text-white bg-blue-400 hover:text-blue-400 hover:bg-white hover:cursor-pointer"> Boton </Button>
                <Button className="h-full rounded-none w-28 text-white bg-blue-400 hover:text-blue-400 hover:bg-white hover:cursor-pointer"> Boton </Button>
                <Button className="h-full rounded-none w-28 text-white bg-blue-400 hover:text-blue-400 hover:bg-white hover:cursor-pointer"> Boton </Button>
            </div>


        </nav>
    )
}