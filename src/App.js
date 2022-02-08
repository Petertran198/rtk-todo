import { useSelector } from 'react-redux';
import './App.css';
import { allTodos } from './app/todoSlice';
import TodoContainer from './components/todos/TodoContainer';
import TodoForm from './components/todos/TodoForm';
import NavbarMenu from './components/navbar/Navbar';

function App() {
    const todos = useSelector(allTodos);
    const filteredCompletedTodo = todos.filter((todo) => todo.completed === true);
    return (
        <div>
            <div className='container'>
                <NavbarMenu />
                <TodoForm />
                <hr />
                <TodoContainer />
                <br />
                <h4>Completed todos {filteredCompletedTodo.length}</h4>
            </div>
        </div>
    );
}

export default App;
