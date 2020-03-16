import * as React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "@/shared/store";
import {TodoListType} from "@/shared/store/todo-list/types";
import {DeleteTodoItemAction,ChangeTodoItemStatusAction} from "@/shared/store/todo-list/actions";
import {Input} from "@/shared/components/form/input.component";
import {AddTodoItemActionAsync} from "@/shared/store/todo-list/thunk";

export const LoginPage: React.FC = () => {
    const {todoList} = useSelector<ApplicationState, TodoListType>(state => state.todos);
    const [todoName, setTodoName] = React.useState("");
    const dispatch = useDispatch();

    React.useEffect(()=>{
        setTodoName("");
    },[todoList]);

    const addTodo = () => {
        dispatch(
            AddTodoItemActionAsync({
                title: todoName
            })
        );
    };

    const deleteTodo = (id: string) => {
        dispatch(
            DeleteTodoItemAction(id)
        );
    };

    return (
        <div className="home-page">
            <h1>Login page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis doloremque dolores earum eos et
                expedita hic ipsum iure perspiciatis, quia quis quisquam repudiandae sed sint tempora temporibus
                voluptas voluptatem.
            </p>
            <br/>
            <hr/>
            <div>
                <h3>Redux store:</h3>
                <div>
                    {todoList && (
                        todoList.map(todoItem => {
                            return (
                                <div key={todoItem.id}>
                                    <div>ID: {todoItem.id}</div>
                                    <div>TITLE: {todoItem.title}</div>
                                    <div>STATUS: {todoItem.status ? "TRUE" : "FALSE"}</div>
                                    <button onClick={() => dispatch(
                                        ChangeTodoItemStatusAction(todoItem.id)
                                    )}>CHANGE STATUS</button>
                                    <button onClick={() => deleteTodo(todoItem.id)}>DELETE</button>
                                    <hr/>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
            <Input
                value={todoName}
                onChange={setTodoName}
                placeholder="Todo name"
            />
            <button onClick={addTodo}>Dispatch</button>
            <NavLink to="/">To Home page</NavLink>
            <br/>
            <NavLink to="/login">To Login page</NavLink>
        </div>
    );
};