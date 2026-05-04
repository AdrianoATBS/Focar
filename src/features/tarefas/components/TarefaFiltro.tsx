"use client";
import { useState } from "react";
import BotaoGenerico from "../../../shared/components/BotaoGenerico";
export default function TarefaFiltro() {
    const [filtro, setFiltro] = useState("todas");

    return(
        <div className="mt-7 flex justify-start items-end border border-borda gap-4
        bg-[#F2F4F6] rounded-full p-2 w-fit shadow-lg">
            <BotaoGenerico 
            texto="Todas" 
            onClick={() => setFiltro("todas")}
            className={`cursor-pointer p-2
            ${filtro === "todas" ? 
            'bg-superficie text-primaria rounded-full shadow-lg' : 
            'text-texto-suave'}`}/>

            <BotaoGenerico 
            texto="Pendentes" 
            onClick={() => setFiltro("pendentes")}
            className={` cursor-pointer p-2 
            ${filtro === "pendentes" ? 
                'bg-superficie text-primaria rounded-full shadow-lg' : 
            'text-texto-suave'}`}/>

            <BotaoGenerico 
            texto="Concluídas" 
            onClick={() => setFiltro("concluidas")}
            className={` cursor-pointer p-2
            ${filtro === "concluidas" ? 
            ' rounded-full bg-superficie text-primaria shadow-lg' : 
            'text-texto-suave'}`}/>
            
        </div>
    )
}