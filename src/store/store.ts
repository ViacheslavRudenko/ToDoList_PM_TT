import { createStore, compose } from "redux";
import { rootReducer } from "./root-reducer";

const devTools =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose;

const store = createStore(
    rootReducer,
    compose(devTools)
);

export default store;