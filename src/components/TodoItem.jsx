import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
    deleteTodo,
    toggleTodoCompleted,
    setSelectedTodo,
    getSelectedTodo,
} from '../app/todoSlice';
import './todos.css';
function TodoItem({ title, id, completed }) {
    const dispatch = useDispatch();

    const selectedEdit = () => {
        document.querySelector('#form').focus();
        dispatch(setSelectedTodo({ id: id }));
    };
    const selectedTodo = useSelector(getSelectedTodo);

    return (
        <div className='d-flex m-1'>
            <li
                className={`list-group-item w-75 ${
                    completed === true && 'completed'
                }  ${id === selectedTodo.id && 'edit'}`}
                aria-current='true'
            >
                <input
                    type='checkbox'
                    checked={completed}
                    onClick={() => dispatch(toggleTodoCompleted({ id: id }))}
                ></input>{' '}
                {title}
            </li>
            <button
                className='btn btn-success w-25 border-0 border-radius-none'
                onClick={selectedEdit}
            >
                Edit
            </button>
            <button
                className='btn btn-danger w-25 border-0 border-radius-none'
                onClick={() => dispatch(deleteTodo({ id: id }))}
            >
                X
            </button>
        </div>
    );
}

export default TodoItem;
