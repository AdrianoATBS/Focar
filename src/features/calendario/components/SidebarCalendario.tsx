"use client"
import Image from "next/image";
import { MdWindow } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function SidebarCalendario(){
    const rotaAtual = usePathname();

    const ehRotaAtualAtiva = (rota: string) => {
        return rotaAtual === rota;
    }
    return(
        <section className="p-5 max-w-40 h-full border-r border-borda/25 flex flex-col ">
                <div className="flex items-center mb-6">

                    <div className="bg-linear-to-br from-primaria-escura to-primaria-clara  
                     w-8 h-8 rounded-xl flex items-center justify-center" >
                        <Image src="/Icon/janela.png" alt="Janela" width={18} height={18}  
                        className="w-4 h-4"/>
                    </div>
                    <h3 className="titulo-3 pl-2">Focar</h3>
                </div>

                <div className="flex flex-col gap-4 pt-4 border-t border-borda/25">
                    <div className={`flex items-center gap-2
                     hover:text-primaria-escura cursor-pointer p-2 rounded-lg
                     ${ehRotaAtualAtiva('/') ? 'text-[#047857] bg-[#ECFDF5] font-bold' : ''}`}>
                        <MdWindow className=""/>                       
                        <Link href="/" className="text-sm font-bold ">Tarefas</Link>
                    </div>
                    <div className={`flex items-center gap-2
                     hover:text-primaria-escura cursor-pointer p-2 rounded-lg
                     ${ehRotaAtualAtiva('/foco') ? 'text-[#047857] bg-[#ECFDF5] font-bold' : ''}`}>
                        <MdOutlineTimer />
                        <Link href="/foco" className="text-sm font-bold">Focus</Link>
                    </div>
                    <div className={`flex items-center gap-2
                     hover:text-primaria-escura cursor-pointer p-2 rounded-lg
                     ${ehRotaAtualAtiva('/calendario') ? 'text-[#047857] bg-[#ECFDF5] font-bold' : ''}`}>
                        <CiCalendar/>
                        <Link href="/calendario" className="text-sm font-bold ">Calendario</Link>
                    </div>
                </div>
        </section>
    )
}