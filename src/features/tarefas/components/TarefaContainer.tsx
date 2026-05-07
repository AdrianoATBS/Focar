"use client"
import TituloGenericoTarefa from "./TituloGenericoTarefa";
import { frasesMotivacionais } from "../mocks/frasesMotivacionais.mock";
import TarefaInput from "./TarefaInput";
import TarefaFiltro from "./TarefaFiltro";
import ListaDeTarefa from "./ListaDeTarefa";
import { Todo } from "../types/todos.model";
import { useState } from "react";
interface ListaDeTarefaProps {
    todos: Todo[];
   
}
export default  function TarefaContainer({todos}: ListaDeTarefaProps) {
    const [lista, setLista] = useState<Todo[]>(todos);
    const [filtro, setFiltro] = useState("todas");

    const todosFiltrados = filtro === "todas" ?
    lista : filtro === "pendentes" ?
    lista.filter((tarefa) => !tarefa.completed) :
    lista.filter((tarefa) => tarefa.completed);
    
    const toggleTarefa = (id: number) => {
        const novaLista = lista.map((tarefa) => {
            return tarefa.id === id ? {...tarefa, completed: !tarefa.completed} : tarefa
        })
        setLista(novaLista);
    };

    
    return(
        <div className="max-w-3xl mx-auto w-full p-6">
            <TituloGenericoTarefa frasesMotivacionais={frasesMotivacionais}/>
            <TarefaInput/>


            <TarefaFiltro  filtro={filtro} setFiltro={setFiltro}/>
            <ListaDeTarefa todos={todosFiltrados} toggleTarefa={toggleTarefa}/>
           
        </div>
    )
}
