"use client";
import BotaoGenerico from "../../../shared/components/BotaoGenerico";
export type FiltroTarefa = "todas" | "pendentes" | "concluidas";

interface TarefaFiltroProps {
   filtro: FiltroTarefa;
   setFiltro: (filtro: FiltroTarefa) => void;
}
export default function TarefaFiltro({ filtro, setFiltro }: TarefaFiltroProps) {
    const filtros =[
        {label: "Todas", value: "todas"},
        {label: "Pendentes", value: "pendentes"},
        {label: "Concluídas", value: "concluidas"}
    ]

    return(
        <div className="mt-7 flex justify-start items-end border border-borda gap-4
        bg-[#F2F4F6] rounded-full p-2 w-fit shadow-lg mb-8">
            {filtros.map((filtroItem) => (
                <BotaoGenerico 
                key={filtroItem.value}
                texto={filtroItem.label} 
                onClick={() => setFiltro(filtroItem.value as FiltroTarefa)}
                className={`cursor-pointer p-2
                ${filtro === filtroItem.value ? 
                'bg-superficie text-primaria rounded-full shadow-lg' : 
                'text-texto-suave'}`}
                />
            ))}
        </div>
        
    )
}