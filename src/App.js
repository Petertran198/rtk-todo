import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { allTodos } from './app/todoSlice';
import TodoContainer from './components/todos/TodoContainer';
import NavbarMenu from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import LoginOrSignUpFormContainer from './components/auth/LoginOrSignUpFormContainer';
import { getUser, saveUser } from './app/userSlice';
import { useSetUserListener } from './firebase/Firebase';

function App() {
    const dispatch = useDispatch();
    const user = useSetUserListener();

    if (user) {
        console.log(user, '---app');

        dispatch(saveUser(user));
    }

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
            </div>
        </div>
    );
}

export default App;
