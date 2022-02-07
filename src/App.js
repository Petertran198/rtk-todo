import './App.css';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

function App() {
    return (
        <div className='container'>
            <h1 className='h1'>Todo Application</h1>
            <TodoForm />
            <hr />
            <TodoContainer />
        </div>
    );
}

export default App;
