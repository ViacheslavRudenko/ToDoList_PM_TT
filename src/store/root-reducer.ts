import { combineReducers } from "redux";
import reducerToDO from "./ToDo/reducer";


export const rootReducer = combineReducers({
    ToDo: reducerToDO,

});
export type RootState = ReturnType<typeof rootReducer>;