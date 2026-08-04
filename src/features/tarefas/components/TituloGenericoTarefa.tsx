"use client"
import { FraseMotivacional } from "../types/frases.model";
import { useMemo } from "react";
interface TituloGenericoTarefaProps {
    frasesMotivacionais: readonly FraseMotivacional[];
}
export default function TituloGenericoTarefa({ frasesMotivacionais }: TituloGenericoTarefaProps){
    const hora = new Date().getHours();
    const saudacao = hora < 12 ? "Bom dia" : 
    hora < 18 ? "Boa tarde" : "Boa noite";

   const fraseMotivacional = useMemo(() =>{
        const hoje = new Date().getDate();
        const fraseDoDia = Math.floor( hoje % frasesMotivacionais.length);
        return frasesMotivacionais[fraseDoDia].texto;
   }, [frasesMotivacionais])

    return(
        <div className="flex flex-col gap-2">
            <h1 className="titulo-1">{saudacao}</h1>
            <p className="texto-suave">{fraseMotivacional}</p>
        </div>
    )
}