import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTodoItem,
    editTodo,
    getSelectedTodo,
    setSelectedTodo,
} from '../../app/todoSlice';

function TodoForm() {
    const selectedTodo = useSelector(getSelectedTodo);
    const dispatch = useDispatch();
    const [todoItem, setTodoItem] = useState({ title: '' });

    useEffect(() => {
        setTodoItem({ ...selectedTodo });
    }, [selectedTodo]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (Object.keys(selectedTodo).length === 0) {
            dispatch(addTodoItem({ title: todoItem.title }));
            setTodoItem({ title: '' });
        } else {
            dispatch(editTodo({ id: todoItem.id, title: todoItem.title }));
            setTodoItem({ title: '' });
        }
        dispatch(setSelectedTodo({}));
    };

    return (
        <div>
            <form className='d-flex' onSubmit={handleAddTodo}>
                <input
                    type='text'
                    className='form-control mr-1'
                    id='form'
                    placeholder='Add todo...'
                    value={todoItem.title}
                    onChange={(e) =>
                        setTodoItem({ ...todoItem, title: e.target.value })
                    }
                />
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default TodoForm;
