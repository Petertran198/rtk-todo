import { useSelector } from 'react-redux';
import { allTodos } from '../../app/todoSlice';
import TodoItem from './TodoItem';
import './todos.css';
function TodoContainer() {
    let todos = useSelector(allTodos);

    return (
        <>
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
        </>
    );
}

export default TodoContainer;
