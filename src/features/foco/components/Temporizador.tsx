"use client";
import CardsDados from "./CardsDados";
import ExibirTemporizador from "./ExibirTemporizador";
import TemporizadorControles from "./TemporizadorControle";
import  FrasesMotivacionaisFocus  from "./FrasesMotivacionaisFocus";
import { frasesMotivacionaisFocus } from "../mocks/frasesMotivacionaisFocus";
import MensagemTrabalhando from "./MensagemTrabalhando";
import { useState, useEffect } from "react";


export default function Temporizador( ) {

    const [tempo, setTempo] = useState(1500);

    const [rodando, setRodando] = useState<boolean>(false);

    const formatarTempo = (tempo: number) => {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        return `${minutos.toString().padStart(2, "0")}: ${segundos.toString().padStart(2, "0")}`;
    };
    
        useEffect(() => {
           if(rodando){
            const intervalo = setInterval(() => {
                setTempo((prevTempo) => {
                    if (prevTempo <= 0) {
                        setRodando(false);
                        return 0;
                    }
                    return prevTempo - 1;
                });
            }, 1000);

            return () => clearInterval(intervalo);
           }
        }, [rodando]);

        
        const adicionarTempo = () => {
            setTempo((prevTempo) => prevTempo + 300);
        };
        const resetarTempo = () => {
            setTempo(1500);
        }
        const diminuirTempo = () => {
            setTempo((prevTempo) => Math.max(prevTempo - 300, 0));
        }


    return(
        <div className=" w-full flex flex-col items-center justify-center gap-3
        mx-auto">
            <MensagemTrabalhando rodando={rodando} />
            <FrasesMotivacionaisFocus frases={frasesMotivacionaisFocus} />
           
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
            <CardsDados />
        </div>
    )
}