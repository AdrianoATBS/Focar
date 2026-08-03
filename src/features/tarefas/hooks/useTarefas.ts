import { useState } from "react";
import { postTarefa } from "../services/postTarefa";
import {deletarTarefa} from "../services/deletarTarefa";
import { Todo } from "../types/todos.model";
export function useTarefas(todosInicias: Todo[]) {
    
   const [tarefas, setTarefas] = useState<Todo[]>(todosInicias);


    const adicionarTarefa = async(titulo:string )=>{
        try{
            const novaTarefa = await postTarefa(titulo);
            const tarefaComIdUnico =  { ...novaTarefa, id: Date.now() };
            setTarefas((tarefasAtuais) => [...tarefasAtuais, tarefaComIdUnico]);
        }catch(error){
            console.error("Erro ao adicionar tarefa:", error);
        }
    }

    const concluirTarefa = (id: number) => {
        const novaLista = tarefas.map((tarefa) => {
            return tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa;
        });
        setTarefas(novaLista);
    }

    const removerTarefa = async(id: number) => {
        try{
            setTarefas((tarefasAtuais) => tarefasAtuais.filter(tarefa => tarefa.id !== id));
            if(id < 1000)
            {
                await deletarTarefa(id);
            }
        }catch(error){
            console.error("Erro ao remover tarefa:", error);
        }
        
    }
    return { tarefas, adicionarTarefa, concluirTarefa, removerTarefa };

}