import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { allTodos } from '../app/todoSlice';
import './todos.css';
function TodoContainer() {
    // const dispatch = useDispatch();
    const todos = useSelector(allTodos);
    return (
        <>
            <ul className='list-group '>
                {todos.map((todo) => {
                    return (
                        <div className='d-flex m-1'>
                            <li
                                className='list-group-item active w-75'
                                aria-current='true'
                            >
                                <input type='checkbox'></input> {todo.title}
                            </li>
                            <button className='btn btn-success w-25 border-0 border-radius-none'>
                                Edit
                            </button>
                            <button className='btn btn-danger w-25 border-0 border-radius-none'>
                                X
                            </button>
                        </div>
                    );
                })}
            </ul>
        </>
    );
}

export default TodoContainer;
