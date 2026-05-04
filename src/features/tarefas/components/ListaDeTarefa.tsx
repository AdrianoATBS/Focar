import CardTarefa from "./CardTarefa";
import { Todo } from "../types/todos.model";
interface ListaDeTarefaProps {
    todos: Todo[];
    toggleTarefa: (id: number) => void;  
}
export default function ListaDeTarefa({ todos, toggleTarefa }: ListaDeTarefaProps) {
    
    return(
        <section >
            {todos.map((tarefa) => (
                <CardTarefa key={tarefa.id} todos={tarefa} onToggle={toggleTarefa} />
            ))}
        </section>
    )
}