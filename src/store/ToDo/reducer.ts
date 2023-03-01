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
        case ToDoActionTypes.DELETE_TODO: {
            return { ...state, data: state.data.filter(item => item.id !== action.payload) };
        }
        case ToDoActionTypes.TOGGLE_MODAL: {
            return { ...state, isModalOpen: !state.isModalOpen };
        }
        default:
            return state;
    }
};
export default reducerJobs;