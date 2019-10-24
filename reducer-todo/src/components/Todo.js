import React from 'react';

function Todo({ todo, dispatch }) {
    const toggleCompleted = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo.id
        });
    };

    return (
        <div
            onClick={toggleCompleted}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
            <p>{todo.item}</p>
        </div>
    );
}

export default Todo;