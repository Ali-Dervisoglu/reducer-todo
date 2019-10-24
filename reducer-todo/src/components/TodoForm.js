import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {

    const [item, setItem] = useState('');

    const handleChanges = e => {
        setItem(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_ITEM",
            payload: item
        })
        setItem("");
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED"
        });
    };

    return (
        <div className="todo-form">
            <form onSubmit={submitForm}>
                <input onChange={handleChanges} value={item} />
                <button>Add New Todo</button>
                <button onClick={clearCompleted}>Clear Completed Todos</button>
            </form>
        </div>
    );
};

export default TodoForm;