import  fetcher  from "@/lib/fetcher";
import { Todo } from "../types/todos.model";
export default async function deletarTarefa(id: number) {
    return await fetcher<Todo>(`/todos/${id}`, {
        method: "DELETE"
    });
}