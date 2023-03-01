export interface ToDoState {
    data: ToDoType[];
}

export enum ToDoActionTypes {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_ADD_TODOTODO",
}

interface AddToDoAction {
    type: ToDoActionTypes.ADD_TODO;
    payload: ToDoType;
}
interface DeleteToDoAction {
    type: ToDoActionTypes.DELETE_TODO;
    payload: number;
}

export type ToDoAction =
    | AddToDoAction
    | DeleteToDoAction

export interface ToDoType {
    id: number,
    title: string,
    description: string,
    status: boolean
}
