import { Dispatch } from "redux"
import { ToDoAction, ToDoActionTypes, ToDoType } from "./types"


export const addToDo = (ToDo: ToDoType) => {
    return async (dispatch: Dispatch<ToDoAction>) => {
        dispatch({
            type: ToDoActionTypes.ADD_TODO,
            payload: ToDo,
        })
    }
}

export const deleteToDo = (id: number) => {
    return async (dispatch: Dispatch<ToDoAction>) => {
        dispatch({
            type: ToDoActionTypes.DELETE_TODO,
            payload: id,
        })
    }
}