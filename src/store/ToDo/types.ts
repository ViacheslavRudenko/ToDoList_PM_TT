export interface ToDoState {
    data: ToDoType[];
    isModalOpen: Boolean
}

export enum ToDoActionTypes {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_ADD_TODOTODO",
    TOGGLE_MODAL = "TOGGLE_MODAL"
}

interface AddToDoAction {
    type: ToDoActionTypes.ADD_TODO;
    payload: ToDoType;
}
interface DeleteToDoAction {
    type: ToDoActionTypes.DELETE_TODO;
    payload: number;
}
interface ToggleModalAction {
    type: ToDoActionTypes.TOGGLE_MODAL;
}


export type ToDoAction =
    | AddToDoAction
    | DeleteToDoAction
    | ToggleModalAction

export interface ToDoType {
    id: number,
    title: string,
    description: string,
    status: boolean
}
