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

export const changeToDoStatus = (id: number) => {
    return async (dispatch: Dispatch<ToDoAction>) => {
        dispatch({
            type: ToDoActionTypes.CHANGE_TODO_STATUS,
            payload: id,
        })
    }
}

export const toggleModal = () => {
    return async (dispatch: Dispatch<ToDoAction>) => {
        dispatch({ type: ToDoActionTypes.TOGGLE_MODAL })
    }
}