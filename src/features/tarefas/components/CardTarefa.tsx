import { Todo } from "../types/todos.model";
import { RiDeleteBin6Line } from "react-icons/ri";
interface CardTarefaProps {
    tarefa: Todo;
    onAlternarConclusao: (id: number) => void;
    deletarTarefa: (id: number) => Promise<void>;
}

export default function CardTarefa({ tarefa, onAlternarConclusao, deletarTarefa }: CardTarefaProps) {
    return(
        <section className="bg-white p-4 rounded-lg shadow mt-4 mb-2 flex items-center justify-between gap-4">
            <div className="flex items-center justify-end  gap-3">
                <input type="checkbox" 
                className="w-5 h-5 accent-primaria border-primaria rounded-sm cursor-pointer" 
                checked={tarefa.completed}
                onChange={() => onAlternarConclusao(tarefa.id)} />

                <div className="flex flex-col ">

                    <span className={`text-[0.875rem] ${tarefa.completed ? 
                        'line-through text-texto-suave' : 'text-texto-primario'}`}>
                        {tarefa.todo}
                    </span>
            
                    {tarefa.completed && (
                        <span className="text-[0.675rem] text-green-500">Concluída</span>
                    )}
                </div>

            </div>
           {tarefa.completed && (
                <RiDeleteBin6Line className="text-[#94A3B8] cursor-pointer " size={18} 
                onClick={() => deletarTarefa(tarefa.id)} />
           )}
        </section>
    )
}