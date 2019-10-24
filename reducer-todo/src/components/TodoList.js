import React, { useReducer } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'
import { reducer, initialState } from '../reducers/reducer'

const TodoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    return (
        <>
            <TodoForm dispatch={dispatch} />
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </>
    )
}

export default TodoList;