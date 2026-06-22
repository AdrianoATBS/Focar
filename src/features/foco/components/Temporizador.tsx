"use client";
import CardsDados from "./CardsDados";
import ExibirTemporizador from "./ExibirTemporizador";
import TemporizadorControles from "./TemporizadorControle";
import  FrasesMotivacionaisFocus  from "./FrasesMotivacionaisFocus";
import { frasesMotivacionaisFocus } from "../mocks/frasesMotivacionaisFocus";
import MensagemTrabalhando from "./MensagemTrabalhando";
import ControleDeSom from "./ControleDeSom";
import { useState, useEffect, useRef } from "react";


export default function Temporizador( ) {

    const [tempo, setTempo] = useState(1500);

    const [rodando, setRodando] = useState<boolean>(false);
    const [somAtual, setSomAtual] = useState("");
    const [volume, setVolume] = useState(0.5);
    const [mostrarVolume, setMostrarVolume] = useState(false);

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
        const audioRef = useRef<HTMLAudioElement | null>(null);
        
        useEffect(() => {
            if(audioRef.current){
                audioRef.current.pause();
                audioRef.current = null;
            }
            if(!somAtual){
                return;
            }
            if(somAtual !== 'none')
            {
                audioRef.current = new Audio(`/audio/${somAtual}.mp3`);
                audioRef.current.loop = true;
                audioRef.current.play();
            }
            return () => {
                if(audioRef.current){
                    audioRef.current.pause();
                    audioRef.current = null;
                };
            };
        }, [somAtual]);

        const setSomAtivo = (som: string) => {
            if(somAtual === "lofi" && som === "lofi"){
                setSomAtual("");
            }
            else if(somAtual === "rain" && som === "rain"){
                setSomAtual("");
            }
            else if(somAtual === "forest" && som === "forest"){
                setSomAtual("");
            }
            else{
                setSomAtual(som);
            }
        };

        const ajustarVolume = (novoVolume: number) => {
            setVolume(novoVolume);
        };

         useEffect(() => {
            if(audioRef.current){
                audioRef.current.volume = volume;
            }
         }, [volume]);
        
      



    return(
        <section className=" w-full flex flex-col items-center justify-center gap-3
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
            <div className="w-full flex items-center justify-center gap-10 relative">
                <CardsDados />
                <div className="absolute top-25 right-15">

                <ControleDeSom somAtivo={somAtual} setSomAtivo={setSomAtivo} volume={volume} 
                ajustarVolume={ajustarVolume} mostrarVolume={mostrarVolume}
                 setMostrarVolume={setMostrarVolume} />
                </div>
            </div>
        </section>
    )
}