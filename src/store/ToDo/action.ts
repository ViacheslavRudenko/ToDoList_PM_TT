import { ToDoActionTypes, ToDoType } from "./types"


export const addToDo = (ToDo: ToDoType) => ({
    type: ToDoActionTypes.ADD_TODO,
    payload: ToDo,
})


export const changeToDoStatus = (id: number) => ({
    type: ToDoActionTypes.CHANGE_TODO_STATUS,
    payload: id,
})


export const toggleModal = () => ({ type: ToDoActionTypes.TOGGLE_MODAL })
