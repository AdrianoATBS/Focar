"use client";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosRefresh } from "react-icons/io";

interface ExibirTemporizadorProps {
    tempo: number;
    formatarTempo: (tempo: number) => string;
    adicionarTempo: () => void;
    resetarTempo: () => void;
    diminuirTempo: () => void;
}

export default function ExibirTemporizador({ tempo, formatarTempo, 
    adicionarTempo, resetarTempo, diminuirTempo }: ExibirTemporizadorProps) {
    

    return(
        <section className="flex flex-col items-center justify-center border-8 border-primaria-escura
            rounded-full 
            w-84 h-84">

            <div className="flex flex-col items-center justify-center relative">
                <span className="text-6xl font-bold">{formatarTempo(tempo)}</span>
            </div>
            <div className=" relative">
                <div className="absolute bottom-[-35] left-38 flex flex-col items-center justify-center gap-6">
                    <button  onClick={resetarTempo}
                    className="bg-superficie shadow-lg p-2 rounded-full m-2 absolute 
                   cursor-pointer active:scale-95 flex "
                    >
                        <IoIosRefresh />
                    </button>

                    <button 
                    onClick={adicionarTempo}
                    className="bg-superficie shadow-lg text-branca p-2 rounded-full m-2
                    cursor-pointer active:scale-95">
                        
                        <CiCirclePlus />
                    </button>

                    <button 
                      onClick={diminuirTempo}
                    className="bg-superficie shadow-lg text-branca p-2 rounded-full m-2 
                    cursor-pointer active:scale-95">
                         <CiCircleMinus />
                    </button>
                </div>

            </div>
            
        </section>
    )
}