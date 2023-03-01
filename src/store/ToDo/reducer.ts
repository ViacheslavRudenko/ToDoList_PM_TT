import { ToDoAction, ToDoActionTypes, ToDoState } from "./types";

export const initialState: ToDoState = {
    data: [],
};

const reducerJobs = (state = initialState, action: ToDoAction): ToDoState => {
    switch (action.type) {
        case ToDoActionTypes.ADD_TODO: {
            return { data: [...state.data, action.payload] };
        }
        case ToDoActionTypes.DELETE_TODO: {
            return { data: state.data.filter(item => item.id !== action.payload) };
        }
        default:
            return state;
    }
};
export default reducerJobs;