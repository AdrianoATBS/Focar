import { useState, useEffect, useRef } from "react";
export function useAudio(){
    const [somAtual, setSomAtual] = useState("");
    const [volume, setVolume] = useState(0.5);
    const [mostrarVolume, setMostrarVolume] = useState(false);

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

    return{ somAtual, volume, mostrarVolume, setMostrarVolume, setSomAtivo, ajustarVolume };
}