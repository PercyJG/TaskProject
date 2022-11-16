import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "./models/actions";
import { TaskReducer } from "./task/TaskReducer";


const logger = createLogger();
export const rootReducer = combineReducers({TaskReducer});
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions,{},{}>(
    rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);