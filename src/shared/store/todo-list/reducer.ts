import {Reducer} from "redux"
import {ActionTypes, TodoListType, TodoListActions} from "./types";

const initialState: TodoListType = {
    todoList: [
        {
            id: "1",
            title: "MacBook Pro",
            status: false,
        },
        {
            id: "2",
            title: "iPad",
            status: false,
        },
        {
            id: "3",
            title: "iPod Classic",
            status: false,
        },
    ]
};

export const todoList: Reducer<TodoListType> = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case TodoListActions.ADD_TODO_ITEM:
            return {
                todoList: [
                    ...state.todoList,
                    {
                        id: (state.todoList.length + 1).toString(),
                        title: action.todoItem.title,
                        status: false,
                    }
                ]
            };
        case TodoListActions.DELETE_TODO_ITEM:

            return {
                todoList: state.todoList.filter((todoItem) => todoItem.id !== action.id)
            };
        case TodoListActions.CHANGE_TODO_STATUS:

            return {
                todoList: state.todoList.map((todoItem) => (
                    (todoItem.id === action.id) ? {...todoItem, status: !todoItem.status} : todoItem)
                )
            };
        case TodoListActions.UPDATE_TODO_ITEM:
            return {
                ...state,
            };
        default:
            return {
                ...state
            };
    }
};