import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../app/todoSlice';

function TodoItem({ title, id, completed }) {
    const dispatch = useDispatch();
    return (
        <div className='d-flex m-1'>
            <li className='list-group-item active w-75' aria-current='true'>
                <input type='checkbox'></input> {title}
            </li>
            <button className='btn btn-success w-25 border-0 border-radius-none'>
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
