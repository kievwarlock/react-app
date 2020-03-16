import {TodoItemType, TodoListActions} from "@/shared/store/todo-list/types";

export type AddTodoItemActionType = {
    type: TodoListActions.ADD_TODO_ITEM;
    todoItem: TodoItemType;
}

export const AddTodoItemAction = (todoItem: TodoItemType): AddTodoItemActionType => ({
    type: TodoListActions.ADD_TODO_ITEM,
    todoItem
});

export type DeleteTodoItemActionType = {
    type: TodoListActions.DELETE_TODO_ITEM;
    id: string;
}

export const DeleteTodoItemAction = (id: string): DeleteTodoItemActionType => ({
    type: TodoListActions.DELETE_TODO_ITEM,
    id
});

export type UpdateTodoItemActionType = {
    type: TodoListActions.UPDATE_TODO_ITEM;
    id: string;
}

export const UpdateTodoItemAction = (id: string): UpdateTodoItemActionType => ({
    type: TodoListActions.UPDATE_TODO_ITEM,
    id
});

export type ChangeTodoItemStatusActionType = {
    type: TodoListActions.CHANGE_TODO_STATUS;
    id: string;
}

export const ChangeTodoItemStatusAction = (id: string): ChangeTodoItemStatusActionType => ({
    type: TodoListActions.CHANGE_TODO_STATUS,
    id
});