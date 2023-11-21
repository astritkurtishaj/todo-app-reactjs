import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        console.log(todoId, newValue);
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos((prev) =>
            prev.map((item) => {
                const updatedItem = item.id === todoId ? newValue : item;
                return updatedItem;
            })
        );
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => todo.id !== id);
        setTodos(removeArr);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    return (
        <div>
            <h1>What do you have in mind for today?!</h1>
            <ToDoForm onSubmit={addTodo} />
            <ToDo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default ToDoList;
