import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem, getSelectedTodo } from '../app/todoSlice';

function TodoForm() {
    const selectedTodo = useSelector(getSelectedTodo);
    const dispatch = useDispatch();
    const [todoItem, setTodoItem] = useState(
        Object.keys(selectedTodo).length > 0 ? { ...selectedTodo } : { title: '' }
    );

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodoItem({ title: todoItem.title }));
        setTodoItem({ title: '' });
    };

    return (
        <div>
            <form className='d-flex' onSubmit={handleAddTodo}>
                <input
                    type='text'
                    className='form-control mr-1'
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
