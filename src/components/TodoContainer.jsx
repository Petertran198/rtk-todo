import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { allTodos } from '../app/todoSlice';
import TodoItem from './TodoItem';
import './todos.css';
function TodoContainer() {
    // const dispatch = useDispatch();
    let todos = useSelector(allTodos);

    useEffect(() => {
        todos = JSON.parse(window.localStorage.getItem('user'));
    }, []);

    return (
        <>
            <ul className='list-group '>
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            title={todo.title}
                            id={todo.id}
                            completed={todo.completed}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default TodoContainer;
