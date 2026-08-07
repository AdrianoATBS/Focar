import { useState, useEffect, useRef } from "react";
export function useAudio(){
    const [somAtivo, setSomAtivoState] = useState("");
    const [volume, setVolume] = useState(0.5);
    const [mostrarVolume, setMostrarVolume] = useState(false);

     const audioRef = useRef<HTMLAudioElement | null>(null);
        
        useEffect(() => {
            if(audioRef.current){
                audioRef.current.pause();
                audioRef.current = null;
            }
            if(!somAtivo){
                return;
            }
            if(somAtivo !== 'none')
            {
                audioRef.current = new Audio(`/audio/${somAtivo}.mp3`);
                audioRef.current.loop = true;
                audioRef.current.play();
            }
            return () => {
                if(audioRef.current){
                    audioRef.current.pause();
                    audioRef.current = null;
                };
            };
        }, [somAtivo]);

        const setSomAtivo = (som: string) => {
            if(somAtivo === "lofi" && som === "lofi"){
                setSomAtivoState("");
            }
            else if(somAtivo === "rain" && som === "rain"){
                setSomAtivoState("");
            }
            else if(somAtivo === "forest" && som === "forest"){
                setSomAtivoState("");
            }
            else{
                setSomAtivoState(som);
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

    return{ somAtivo, volume, mostrarVolume, setMostrarVolume, setSomAtivo, ajustarVolume };
}