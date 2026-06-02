"use client";
import { MdShowChart } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import  Link  from "next/link";
export default function CardsDados() {
    return(
        <section className="w-full max-w-4xl flex items-center justify-between gap-5
        mx-auto mb-10">
           
                <div className="w-full h-36 flex flex-col items-start justify-center gap-2
                 bg-superficie shadow-lg rounded-2xl p-4 hover:shadow-xl">

                    <div className="w-full flex items-center justify-between gap-4">
                        <MdShowChart className="text-primaria-escura " />
                        <p className="texto-suave text-primaria-escura font-bold">+12%</p>
                    </div>

                    <h2 className="titulo-2">Foco de hoje</h2>
                    <p className="texto-suave ">Horas de produtividade: 2h</p>
                </div>
                
                <div className="w-full h-36 flex flex-col items-start justify-center gap-2
                 bg-superficie shadow-lg rounded-2xl p-4 hover:shadow-xl">
                    <div className="w-full flex items-center gap-2 mb-3">
                        <SlBadge className="text-[#735C00] titulo-3 stroke-[1.5] " />
                        <span className="texto text-[#735C00] font-bold tracking-wider uppercase">Sequencia diária</span>
                    </div>

                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="texto text-[#0D1B2A] font-extrabold">12</span>
                        <span className="texto text-[#735C00] font-medium">Dias</span>
                    </div>
                    
                    <div className="w-full bg-[#ECEEF0] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#CFA800] h-full rounded-full" style={{ width: "75%" }}>

                        </div>
                      </div>
                </div>

                <div className="w-full h-36 flex flex-col items-start justify-center gap-2
                 bg-superficie shadow-lg rounded-2xl p-4 hover:shadow-xl">
                    <h2 className="titulo-3">Proxima Sessão</h2>
                   
                    <Link href="/calendario" className="texto text-primaria-escura hover:underline">
                        Ver Calendario -{">"}
                    </Link>
                </div>
            
        </section>
    )
}