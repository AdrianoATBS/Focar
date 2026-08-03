"use client"
import TituloGenericoTarefa from "./TituloGenericoTarefa";
import { frasesMotivacionais } from "../mocks/frasesMotivacionais.mock";
import TarefaInput from "./TarefaInput";
import TarefaFiltro from "./TarefaFiltro";
import ListaDeTarefa from "./ListaDeTarefa";
import { Todo } from "../types/todos.model";
import { useState } from "react";
import { FiltroTarefa } from "./TarefaFiltro";
import {useTarefas} from "../hooks/useTarefas";
interface ListaDeTarefaProps {
    todos: Todo[];
   
}
export default  function TarefaContainer({todos}: ListaDeTarefaProps) {
    const {tarefas, adicionarTarefa, concluirTarefa, removerTarefa} = useTarefas(todos);
    const [filtro, setFiltro] = useState<FiltroTarefa>("todas");

    const todosFiltrados = filtro === "todas" ?
    tarefas : filtro === "pendentes" ?
    tarefas.filter((tarefa) => !tarefa.completed) :
    tarefas.filter((tarefa) => tarefa.completed);
    
   
    
    return(
        <div className="max-w-3xl mx-auto w-full p-6">
            <TituloGenericoTarefa frasesMotivacionais={frasesMotivacionais}/>
            <TarefaInput adicionarTarefa={adicionarTarefa}/>


            <TarefaFiltro  filtro={filtro} setFiltro={setFiltro}/>
            <ListaDeTarefa todos={todosFiltrados} onToggleAlternarConclusaoTarefa={concluirTarefa} deletarTarefa={removerTarefa}/>
        </div>
    )
}
