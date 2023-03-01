import { ToDoAction, ToDoActionTypes, ToDoState } from "./types";

export const initialState: ToDoState = {
    data: [],
    isModalOpen: false
};

const reducerJobs = (state = initialState, action: ToDoAction): ToDoState => {
    switch (action.type) {
        case ToDoActionTypes.ADD_TODO: {
            return { ...state, data: [...state.data, action.payload] };
        }
        case ToDoActionTypes.CHANGE_TODO_STATUS: {
            return {
                ...state, data: state.data.map(item =>
                    item.id === action.payload ? { ...item, status: !item.status } : item)
            };
        }
        case ToDoActionTypes.TOGGLE_MODAL: {
            return { ...state, isModalOpen: !state.isModalOpen };
        }
        default:
            return state;
    }
};
export default reducerJobs;