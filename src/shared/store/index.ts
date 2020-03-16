import {createStore, combineReducers, Store, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {TodoListType} from "./todo-list/types"
import {todoList} from "./todo-list/reducer"

export type ApplicationState = {
    todos: TodoListType;
}

export type ApplicationReducersType = {
    todos: typeof todoList;
}

export const rootReducers = combineReducers( {
    todos: todoList
} as ApplicationReducersType);

export const store: Store<ApplicationState> = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);