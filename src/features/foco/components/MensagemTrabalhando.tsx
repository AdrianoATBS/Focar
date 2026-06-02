import { FaRegCircleDot } from "react-icons/fa6";
import { FaRegCircleStop } from "react-icons/fa6";

interface MensagemTrabalhandoProps {
    rodando: boolean;
}
export default function MensagemTrabalhando({ rodando }: MensagemTrabalhandoProps   ) {
    return(
        <div className="w-full flex items-center justify-center">
           {rodando ? (
            <div className="flex items-center bg-green-400/25 py-1 px-1 rounded-xl">
                <FaRegCircleDot className="text-primaria-escura animate-pulse" size={24} />
                <span className="ml-2 text-primaria-escura font-semibold">Atualmente trabalhando</span>
            </div>
           ): (
            <div className="flex items-center bg-red-400/25 py-1 px-1 rounded-xl">
                <FaRegCircleStop className="text-red-900" size={24} />
                <span className="ml-2 text-red-900 font-semibold">Pausado</span>
            </div>
           )}
           
        </div>
    )
}
