import { createSlice, nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
    todoList: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: true },
        { id: 4, title: 'todo4', completed: false },
        { id: 5, title: 'todo5', completed: false },
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
        },
        selectedTodo: (state, action) => {
            const i = state.todoList.findIndex((todo) => {
                return todo.id === action.payload.id;
            });
            state.selectedTodoItem = state.todoList[i];
        },
        deleteTodo: (state, action) => {
            const filteredList = state.todoList.filter((todo) => {
                return todo.id !== action.payload.id;
            });
            state.todoList = filteredList;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTodoItem, selectedTodo, deleteTodo } = todoSlice.actions;
export const getSelectedTodo = (state) => state.todos.selectedTodoItem;
export const allTodos = (state) => state.todos.todoList;
export default todoSlice.reducer;
