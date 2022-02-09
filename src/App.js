import { useSelector } from 'react-redux';
import './App.css';
import { allTodos } from './app/todoSlice';
import TodoContainer from './components/todos/TodoContainer';
import NavbarMenu from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import LoginOrSignUpFormContainer from './components/auth/LoginOrSignUpFormContainer';

function App() {
    const todos = useSelector(allTodos);
    // const filteredCompletedTodo = todos.filter((todo) => todo.completed === true);
    return (
        <div>
            <div className='container'>
                <NavbarMenu />
                <Switch>
                    <Route path='/' exact component={TodoContainer}></Route>
                    <Route
                        path='/auth'
                        exact
                        component={LoginOrSignUpFormContainer}
                    ></Route>
                </Switch>

                {/* <TodoForm />
                <hr />
                <TodoContainer />
                <br />
                <h4>Completed todos {filteredCompletedTodo.length}</h4> */}
            </div>
        </div>
    );
}

export default App;
