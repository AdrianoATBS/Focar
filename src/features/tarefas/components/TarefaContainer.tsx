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

    const toggleTarefa = (id: number) => {
        const novaLista = lista.map((tarefa) => {
            return tarefa.id === id ? {...tarefa, completed: !tarefa.completed} : tarefa
        })
        setLista(novaLista);
    };

    const pendentes = lista.filter((tarefa) => !tarefa.completed);
    const completadas = lista.filter((tarefa) => tarefa.completed);

    return(
        <div className="max-w-3xl mx-auto w-full p-6">
            <TituloGenericoTarefa frasesMotivacionais={frasesMotivacionais}/>
            <TarefaInput/>
            <TarefaFiltro />
          
            <ListaDeTarefa todos={pendentes} toggleTarefa={toggleTarefa}/>

            <h2 className="text-[0.875rem] text-texto-suave mt-5 mb-5">{completadas.length} Tarefas Completadas</h2>
            <ListaDeTarefa todos={completadas} toggleTarefa={toggleTarefa}/>
        </div>
    )
}
