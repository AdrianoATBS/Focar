"use client";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosRefresh } from "react-icons/io";

import { useState, useEffect } from "react";
export default function ExibirTemporizador() {
    const [tempo, setTempo] = useState(0);

    const formatarTempo = (tempo: number) => {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        return `${minutos.toString().padStart(2, "0")}: ${segundos.toString().padStart(2, "0")}`;
    };


    useEffect(() => {
     
        const timer = setInterval(() => {
            setTempo((prevTempo) => prevTempo + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const adicionarTempo = () => {
        setTempo((prevTempo) => prevTempo + 280);
    };
    const resetarTempo = () => {
        setTempo(0);
    }
    const diminuirTempo = () => {
        setTempo((prevTempo) => Math.max(prevTempo - 280, 0));
    }
    

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