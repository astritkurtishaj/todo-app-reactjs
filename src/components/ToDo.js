import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { MdOutlineDone } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";

function ToDo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: "",
        });
    };

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
        >
            <div key={todo.id}>{todo.text}</div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="edit-icon"
                />

                {todo.isComplete ? (
                    <MdOutlineDone onClick={() => completeTodo(todo.id)} />
                ) : (
                    <RxLapTimer onClick={() => completeTodo(todo.id)} />
                )}
            </div>
        </div>
    ));
}

export default ToDo;
