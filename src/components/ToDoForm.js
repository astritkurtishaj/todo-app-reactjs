import React, { useState, useEffect, useRef } from "react";

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleInputOnChange = (e) => {
        setInput(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput("");
    };
    return (
        <form className="todo-form" onSubmit={handleFormSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Add ToDo"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleInputOnChange}
                        ref={inputRef}
                    />
                    <button className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Add ToDo"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleInputOnChange}
                        ref={inputRef}
                    />
                    <button className="todo-button">Save</button>
                </>
            )}
        </form>
    );
}

export default ToDoForm;
