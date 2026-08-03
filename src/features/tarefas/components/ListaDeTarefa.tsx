import CardTarefa from "./CardTarefa";
import { Todo } from "../types/todos.model";
interface ListaDeTarefaProps {
    todos: Todo[];
    onToggleAlternarConclusaoTarefa : (id: number) => void;
    deletarTarefa: (id: number) => Promise<void>;
}
export default function ListaDeTarefa({ todos, onToggleAlternarConclusaoTarefa , deletarTarefa }: ListaDeTarefaProps) {
    
    return(
        <section >
            {todos.map((tarefa) => (
                <CardTarefa key={tarefa.id} tarefa={tarefa} onAlternarConclusao={onToggleAlternarConclusaoTarefa} deletarTarefa={deletarTarefa} />
            ))}
        </section>
    )
}