import { IoMdVolumeHigh } from "react-icons/io";
import { FaVolumeXmark } from "react-icons/fa6";

interface ControleDeSomProps {
    somAtivo: string;
    setSomAtivo: (som: string) => void;
    volume: number;
    ajustarVolume: (novoVolume: number) => void;
    mostrarVolume: boolean;
    setMostrarVolume: (mostrar: boolean) => void;
    
}
export default function ControleDeSom({ somAtivo, setSomAtivo, volume, ajustarVolume, mostrarVolume, setMostrarVolume }: ControleDeSomProps) {
        const sons  = [
            {
                nome: "Lo-fi",
                valor: "lofi"
            },
            {
                nome: "Forest",
                valor: "forest" 
            },
            {
                nome: "Rain",
                valor: "rain"
            }
        ];

    return(
        <div className="w-fit flex items-center justify-end 
        p-4 shadow-2xl bg-superficie rounded-full mb-10 mt-8 ">
            {somAtivo && volume === 0 ? (
                <FaVolumeXmark className="text-2xl cursor-pointer text-[#5E6479] " 
                onClick={() => setMostrarVolume(!mostrarVolume)}
                />
            ): (
                 <IoMdVolumeHigh  className="text-2xl cursor-pointer text-[#5E6479] " 
                 onClick={() => setMostrarVolume(!mostrarVolume)}
                 />
            )}
           {mostrarVolume && (
                <input 
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => ajustarVolume(parseFloat(e.target.value))}
                    className="cursor-pointer -rotate-90 w-24 absolute top-[-40] right-51"
                />
            )}
            <div className="flex items-center justify-center gap-6 ml-2 pl-2 border-l-2 border-borda">
                {sons.map((som ) => {
                    return(
                        <button key={som.valor} className={`cursor-pointer p-2 
                            rounded-xl transition-all ${somAtivo === som.valor ? 
                            'bg-primaria/25 text-primaria-escura' : 'text-[#5E6479]'} `}
                            onClick={() => setSomAtivo(som.valor)}>{som.nome}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}