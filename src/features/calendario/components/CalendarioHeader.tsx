
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
interface CalendarioHeaderProps {
    mesAtual: string;
    anoAtual: number;
    onMesAnterior: () => void;
    onMesSeguinte: () => void;
}
export default function CalendarioHeader({ mesAtual, anoAtual, onMesAnterior, onMesSeguinte }: CalendarioHeaderProps) {

    return(
        <div className="w-full max-w-7xl mx-auto p-4 flex items-center ">
            <BotaoGenerico texto={<IoIosArrowBack />} onClick={onMesAnterior} className=" cursor-pointer "/>
            
            <div className="w-[400] text-center">
                <h2 className="text-4xl font-bold mx-4 text-[#151B2D] capitalize">{`${mesAtual} ${anoAtual}`}</h2>

            </div>
            <BotaoGenerico texto={<IoIosArrowForward />} onClick={onMesSeguinte} className=" cursor-pointer " />
        </div>
    )
}