import * as actions from "@/shared/store/todo-list/actions";

export enum TodoListActions {
    ADD_TODO_ITEM = "AddTodoItem",
    DELETE_TODO_ITEM = "DeleteTodoItem",
    UPDATE_TODO_ITEM = "UpdateTodoItem",
    CHANGE_TODO_STATUS = "ChangeTodoStatus"
}

export type TodoItemType = {
    id?: string;
    title: string;
    status?: boolean;
}

export type TodoListType = {
    todoList: TodoItemType[];
}

export type InferValue<T> = T extends { [key: string]: infer U} ? U : never;

export type ActionTypes = ReturnType<InferValue<typeof actions>>;