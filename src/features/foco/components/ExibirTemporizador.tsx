"use client";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { SlRefresh } from "react-icons/sl";


interface ExibirTemporizadorProps {
    tempo: number;
    formatarTempo: (tempo: number) => string;
    adicionarTempo: () => void;
    resetarTempo: () => void;
    diminuirTempo: () => void;
}

export default function ExibirTemporizador({ tempo, formatarTempo, 
    adicionarTempo, resetarTempo, diminuirTempo }: ExibirTemporizadorProps,  ){
    

    return(
        <section className="flex flex-col items-center justify-center border-8 border-primaria-escura
            rounded-full 
            w-72 h-72 relative">

            
            <div className="flex flex-col items-center justify-center absolute">
                <span className="text-6xl font-bold">{formatarTempo(tempo)}</span>
                <div className=" border-t-4 border-primaria-clara w-8 rounded-2xl m-1"></div>
                <p className="texto-suave">Minutos Restantes</p>
            </div>
            
            <div className=" absolute -right-10 top-1/2 transform -translate-y-1/2
            ">
                <div className="flex flex-col items-end justify-end">

                    <button 
                    onClick={adicionarTempo}
                    className="bg-superficie shadow-lg text-branca p-2 rounded-full m-2
                    cursor-pointer active:scale-95">
                        
                        <FaPlus  className="text-[#151B2D]"/>
                    </button>

                    <button  onClick={resetarTempo}
                    className="bg-superficie shadow-lg p-2 rounded-full m-2  
                    cursor-pointer active:scale-95 flex "
                    >
                        <SlRefresh className="text-[#151B2D]" />
                    </button>

                    <button 
                    onClick={diminuirTempo}
                    className="bg-superficie shadow-lg text-branca p-2 rounded-full m-2 
                    cursor-pointer active:scale-95">
                        <FiMinus className="text-[#151B2D]" />
                    </button>
                </div>

            </div>
            
            
        </section>
    )
}