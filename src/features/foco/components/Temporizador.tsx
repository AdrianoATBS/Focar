"use client";
import ExibirTemporizador from "./ExibirTemporizador";
import TemporizadorControles from "./TemporizadorControle";
import { useState, useEffect } from "react";


export default function Temporizador( ) {

    const [tempo, setTempo] = useState(0);

    const [rodando, setRodando] = useState<boolean>(false);

    const formatarTempo = (tempo: number) => {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        return `${minutos.toString().padStart(2, "0")}: ${segundos.toString().padStart(2, "0")}`;
    };
    
        useEffect(() => {
           if(rodando){
            const intervalo = setInterval(() => {
                setTempo((prevTempo) => prevTempo + 1);
            }, 1000);

            return () => clearInterval(intervalo);
           }
        }, [rodando]);

        
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
        <div className=" flex flex-col items-center justify-center gap-3
        max-w-7xl mx-auto mt-5">
            <ExibirTemporizador 
                tempo={tempo}
                formatarTempo={formatarTempo}
                adicionarTempo={adicionarTempo}
                resetarTempo={resetarTempo}
                diminuirTempo={diminuirTempo}
            />
            <TemporizadorControles 
                rodando={rodando}
                setRodando={setRodando}
            />
        </div>
    )
}