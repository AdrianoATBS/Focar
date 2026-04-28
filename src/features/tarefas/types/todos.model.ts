export interface Todo  {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export type TodosState = {
    todos: Todo[];
    total: number;
    skip: number;
    limit: number;
}