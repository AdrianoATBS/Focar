import fetcher from "@/lib/fetcher";
import { TodosState } from "../types/todos.model";
export async function getTodos() {
    return await fetcher<TodosState>("/todos?limit=10&skip=0");     
}