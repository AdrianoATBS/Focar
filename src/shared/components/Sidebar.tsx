import Image from "next/image";
import { MdWindow } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

export default function Sidebar(){
    return(
        <section className="p-5 max-w-40 h-full border-r border-borda/25">
                <div className="flex items-center ">

                    <div className="bg-gradient-to-br from-primaria-escura to-primaria-clara  
                     w-8 h-8 rounded-xl flex items-center justify-center" >
                        <Image src="/Icon/janela.png" alt="Janela" width={18} height={20} />
                    </div>
                    <h3 className="titulo-3 pl-2">Focar</h3>
                </div>
                <div className="flex flex-col gap-2 pt-4 pl-1">
                    <div className="flex gap-2 hover:text-primaria-escura cursor-pointer">
                        <MdWindow className=""/>
                        <h3 className="text-sm font-bold">Tarefas</h3>
                    </div>
                    <div className="flex gap-2 hover:text-primaria-escura cursor-pointer">
                        <MdOutlineTimer />
                        <h3 className=" text-sm font-bold ">Focus</h3>
                    </div>
                    <div className="flex gap-2 hover:text-primaria-escura cursor-pointer ">
                        <CiCalendar/>
                        <h3 className="text-sm font-bold ">Calendario</h3>
                    </div>
                </div>
        </section>
    )
}