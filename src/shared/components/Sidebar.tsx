"use client"
import { MdWindow } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar(){
    const rotaAtual = usePathname();    

    const EhRotaAtualAtiva = (rota: string) => {
        return rotaAtual === rota;
    }
    return(
        <section className="p-5 max-w-40 h-full  flex flex-col ">    
            <div className="flex flex-col gap-4 pt-4">
                <div className={`flex items-center gap-2
                     hover:text-primaria-escura cursor-pointer p-2 rounded-lg
                     ${EhRotaAtualAtiva('/') ? 'text-[#047857] bg-[#ECFDF5] font-bold' : ''}`}>
                    <MdWindow className=""/>
                    <Link href="/" className="">Tarefas</Link>
                </div>
                <div className={`flex items-center gap-2
                     hover:text-primaria-escura cursor-pointer p-2 rounded-lg
                     ${EhRotaAtualAtiva('/foco') ? 'text-[#047857] bg-[#ECFDF5] font-bold' : ''}`}>
                    <MdOutlineTimer />
                    <Link href="/foco" className="text-sm font-bold">Focus</Link>
                </div>
                <div className={`flex items-center gap-2
                     hover:text-primaria-escura cursor-pointer p-2 rounded-lg
                     ${EhRotaAtualAtiva('/calendario') ? 'text-[#047857] bg-[#ECFDF5] font-bold' : ''}`}>
                    <CiCalendar/>
                    <Link href="/calendario" className="text-sm font-bold ">Calendario</Link>
                </div>
            </div>
        </section>
    )
}