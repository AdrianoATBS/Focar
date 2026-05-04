import { Todo } from "../types/todos.model";
import { RiDeleteBin6Line } from "react-icons/ri";
interface CardTarefaProps {
    todos: Todo;
    onToggle: (id: number) => void;
}

export default function CardTarefa({ todos, onToggle }: CardTarefaProps) {
    return(
        <section className="bg-white p-4 rounded-lg shadow mt-4 mb-2 flex items-center justify-between gap-4">
            <div className="flex items-center justify-end  gap-3">
                <input type="checkbox" 
                className="w-5 h-5 accent-primaria border-primaria rounded-sm cursor-pointer" 
                checked={todos.completed}
                onChange={() => onToggle(todos.id)} />

                <div className="flex flex-col ">

                    <span className={`text-[0.875rem] ${todos.completed ? 
                        'line-through text-texto-suave' : 'text-texto-primario'}`}>
                        {todos.todo}
                    </span>
            
                    {todos.completed && (
                        <span className="text-[0.675rem] text-green-500">Concluída</span>
                    )}
                </div>

            </div>
           {todos.completed && (
                <RiDeleteBin6Line className="text-[#94A3B8] cursor-pointer " size={18} />
           )}
        </section>
    )
}