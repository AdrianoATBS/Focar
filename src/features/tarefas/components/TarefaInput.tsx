"use client";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
interface TarefaInputProps {
    adicionarTarefa: (tarefa: string) => Promise<void>;
}

export default function TarefaInput({ adicionarTarefa }: TarefaInputProps){
    const [tarefa, setTarefa] = useState("");

    return(
        <div className="pt-10 w-full  ">
            <div className="relative ">
                <FaRegCheckCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primaria"/>

                <input type="text" placeholder="Digite sua tarefa aqui..." 
                className="w-full p-3 rounded-lg border border-borda focus:outline-none focus:none
                pl-8 pr-25 text-texto-suave/25 shadow-lg" value={tarefa} onChange={(e) => 
                setTarefa(e.target.value)}/>

                 <button className="
                 text-white p-2 rounded-lg
                 absolute right-2 top-1 bg-linear-to-br from-primaria-escura to-primaria-clara
                 cursor-pointer hover:from-primaria-clara hover:to-primaria-escura 
                 transition-colors duration-300
                 active:scale-95"  
                 onClick={() => {
                    if(tarefa.trim() === "") return;
                     adicionarTarefa(tarefa);
                     setTarefa("");
                 }}
                >
                    Adicionar
            </button>
            </div>

           
        </div>

    )
}