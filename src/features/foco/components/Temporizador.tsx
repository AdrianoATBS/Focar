"use client";
import CardsDados from "./CardsDados";
import ExibirTemporizador from "./ExibirTemporizador";
import TemporizadorControles from "./TemporizadorControle";
import  FrasesMotivacionaisFocus  from "./FrasesMotivacionaisFocus";
import { frasesMotivacionaisFocus } from "../mocks/frasesMotivacionaisFocus";
import MensagemTrabalhando from "./MensagemTrabalhando";
import ControleDeSom from "./ControleDeSom";
import { useTemporizador } from "../hooks/useTemporizador";
import { formatarTempo } from "../utils/formatarTempo";
import { useAudio } from "../hooks/useAudio";

export default function Temporizador( ) {
    const {tempo, rodando, setRodando, 
        adicionarTempo, resetarTempo, diminuirTempo, 
          } = useTemporizador();
    
    const {somAtivo, setSomAtivo, 
        volume, ajustarVolume, mostrarVolume, 
        setMostrarVolume} = useAudio();
        
    const controles = {
        tempo,
        adicionarTempo,
        diminuirTempo,
        resetarTempo,
        formatarTempo,        
    }

    const controlesSom ={
        somAtivo,
        setSomAtivo,
        volume,
        ajustarVolume,
        mostrarVolume,
        setMostrarVolume
    }
    return(
        <section className=" w-full flex flex-col items-center justify-center gap-3
        mx-auto">
            <MensagemTrabalhando rodando={rodando} />
            <FrasesMotivacionaisFocus frases={frasesMotivacionaisFocus} />
           
            <ExibirTemporizador 
                controles={controles}
            />
            <TemporizadorControles 
                rodando={rodando}
                setRodando={setRodando}
            />
            <div className="w-full flex items-center justify-center gap-10 relative">
                <CardsDados />
                <div className="absolute top-25 right-15">

                <ControleDeSom {...controlesSom} />
                </div>
            </div>
        </section>
    )
}