import { useSelector } from 'react-redux';
import { allTodos } from '../../app/todoSlice';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

import './todos.css';
function TodoContainer() {
    let todos = useSelector(allTodos);
    const completedTodo = todos.filter((todo) => todo.completed == true);
    return (
        <>
            <TodoForm />
            <ul className='list-group '>
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            title={todo.title}
                            id={todo.id}
                            completed={todo.completed}
                        />
                    );
                })}
            </ul>
            <hr />
            <h3>Completed Todos: {completedTodo.length}</h3>
        </>
    );
}

export default TodoContainer;
