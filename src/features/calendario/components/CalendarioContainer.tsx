"use client";
import CalendarioGrid from "./CalendarioGrid";
import CalendarioHeader from "./CalendarioHeader";
import { useState } from "react";
export default function CalendarioContainer() {
    
    const [dataAtual, setDataAtual] = useState(new Date());

    const mesAtual = dataAtual.toLocaleString('default', { month: 'long' });
    const anoAtual = dataAtual.getFullYear();

    function handleMesAnterior() {
        const novaData = new Date(dataAtual);
        novaData.setMonth(novaData.getMonth() - 1);
        setDataAtual(novaData);
    }
    function handleMesSeguinte() {
        const novaData = new Date(dataAtual);
        novaData.setMonth(novaData.getMonth() + 1);
        setDataAtual(novaData);
    }
    
    return(
        <section className="w-full  max-w-7xl mx-auto p-4">
            <CalendarioHeader mesAtual={mesAtual} anoAtual={anoAtual} 
            onMesAnterior={handleMesAnterior} onMesSeguinte={handleMesSeguinte} />
            <CalendarioGrid dataAtual={dataAtual}   />
        </section>
    )

}