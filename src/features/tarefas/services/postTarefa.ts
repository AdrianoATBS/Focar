import  fetcher  from "@/lib/fetcher";
import { Todo } from "../types/todos.model";

export async function postTarefa(todoTexto: string){
    return await fetcher<Todo>("/todos/add", {
        method: "POST",
        body: JSON.stringify({
            todo: todoTexto,
            completed: false,
            userId: 1
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
}