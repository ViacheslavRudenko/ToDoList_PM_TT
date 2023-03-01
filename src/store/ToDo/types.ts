export interface ToDoState {
    data: ToDoType[];
    isModalOpen: Boolean
}

export enum ToDoActionTypes {
    ADD_TODO = "ADD_TODO",
    CHANGE_TODO_STATUS = " CHANGE_TODO_STATUS",
    TOGGLE_MODAL = "TOGGLE_MODAL"
}

interface AddToDoAction {
    type: ToDoActionTypes.ADD_TODO;
    payload: ToDoType;
}
interface ChangeToDoStatusAction {
    type: ToDoActionTypes.CHANGE_TODO_STATUS;
    payload: number;
}
interface ToggleModalAction {
    type: ToDoActionTypes.TOGGLE_MODAL;
}


export type ToDoAction =
    | AddToDoAction
    | ChangeToDoStatusAction
    | ToggleModalAction

export interface ToDoType {
    id: number,
    title: string,
    description: string,
    status: boolean
}
