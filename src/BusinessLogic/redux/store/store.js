import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/todo.slice';

const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
});

export { store };
