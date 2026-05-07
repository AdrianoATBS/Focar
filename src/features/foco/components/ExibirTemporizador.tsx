"use client";
import { useState, useEffect } from "react";
export default function ExibirTemporizador() {
    const [tempo, setTempo] = useState(0);

    const formatarTempo = (tempo: number) => {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        return `${minutos.toString().padStart(2, "0")}: ${segundos.toString().padStart(2, "0")}`;
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setTempo((prevTempo) => prevTempo + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div className="flex flex-col items-center justify-center border-8 border-primaria-escura
        rounded-full 
        w-84 h-84"> 
            <span className="text-6xl font-bold">{formatarTempo(tempo)}</span>
        </div>
    )
}