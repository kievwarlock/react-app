import {TodoItemType} from "@/shared/store/todo-list/types";
import {ApplicationState} from "@/shared/store/";
import {Dispatch} from "redux";
import {AddTodoItemAction} from "@/shared/store/todo-list/actions";

const deley = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
};

export const AddTodoItemActionAsync = (todoItem: TodoItemType) => async (
    dispatch: Dispatch, getState: () => ApplicationState
) => {
    console.log("getState", getState());
    try {
        await deley(1000);
        dispatch(AddTodoItemAction({title: todoItem.title}));
    } catch (e) {
        console.log("AddTodoItemActionAsync error");
    }
};
