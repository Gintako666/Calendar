/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';

const initialState: {
  todos: Todo[],
} = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]'),
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (value, action: PayloadAction<Todo[]>) => {
      value.todos = [...value.todos, ...action.payload];
    },
    removeTodo: (value, action: PayloadAction<Todo>) => {
      value.todos = value.todos.filter(item => item.id !== action.payload.id);
    },
    editTodo: (value, action: PayloadAction<Todo>) => {
      value.todos = value.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }

        return todo;
      });
    },
  },
});

export const { actions } = todosSlice;

export default todosSlice.reducer;
