import { createSlice, nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const isLocalTodosFilled = JSON.parse(window.localStorage.getItem('todos'));

const initialState = {
    todoList: isLocalTodosFilled
        ? isLocalTodosFilled
        : [
              { id: 1, title: 'todo1', completed: false },
              { id: 2, title: 'todo2', completed: false },
              { id: 3, title: 'todo2', completed: true },
              { id: 4, title: 'todo3', completed: true },
              { id: 5, title: 'todo3', completed: true },
          ],
    selectedTodoItem: {},
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoItem: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false,
            };
            state.todoList.push(todo);
            window.localStorage.setItem('todos', JSON.stringify(state.todoList));
        },
        setSelectedTodo: (state, action) => {
            const i = state.todoList.findIndex((todo) => {
                return todo.id === action.payload.id;
            });
            if (i !== -1) {
                state.selectedTodoItem = state.todoList[i];
            } else {
                state.selectedTodoItem = {};
            }
        },
        deleteTodo: (state, action) => {
            const filteredList = state.todoList.filter((todo) => {
                return todo.id !== action.payload.id;
            });
            state.todoList = filteredList;
            window.localStorage.setItem('todos', JSON.stringify(state.todoList));
        },
        editTodo: (state, action) => {
            const filteredList = state.todoList.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title };
                } else {
                    return todo;
                }
            });
            state.todoList = filteredList;
        },
        toggleTodoCompleted: (state, action) => {
            const updated = state.todoList.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
            state.todoList = updated;
            window.localStorage.setItem('todos', JSON.stringify(state.todoList));
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addTodoItem,
    setSelectedTodo,
    deleteTodo,
    toggleTodoCompleted,
    editTodo,
} = todoSlice.actions;
export const getSelectedTodo = (state) => state.todos.selectedTodoItem;
export const allTodos = (state) => state.todos.todoList;
export default todoSlice.reducer;
