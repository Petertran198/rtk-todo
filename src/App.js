import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import TodoContainer from './components/todos/TodoContainer';
import NavbarMenu from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import LoginOrSignUpFormContainer from './components/auth/LoginOrSignUpFormContainer';
import { getUser, saveUser } from './app/userSlice';
import { useSetUserListener } from './firebase/Firebase';
import RestrictedRoutes from './routes/RestrictedRoutes';

function App() {
    const dispatch = useDispatch();
    const currentUser = useSelector(getUser);
    const userListenerObj = useSetUserListener();
    if (userListenerObj && currentUser.userInfo.userId != userListenerObj.userId) {
        dispatch(saveUser(userListenerObj));
    }

    return (
        <div>
            <div className='container'>
                <NavbarMenu />
                <Switch>
                    <Route path='/' exact component={TodoContainer}></Route>
                    <RestrictedRoutes
                        path='/auth'
                        component={LoginOrSignUpFormContainer}
                    />
                </Switch>
            </div>
        </div>
    );
}

export default App;
