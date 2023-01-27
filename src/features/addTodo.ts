/* eslint-disable operator-assignment */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';

const initialState: {
  isOpen: boolean
  selectDate: string | null
  activeTodo: Todo | null
} = {
  isOpen: false,
  selectDate: null,
  activeTodo: null,
};

const addTodoSlice = createSlice({
  name: 'addTodo',
  initialState,
  reducers: {
    setSelectDate: (value, action: PayloadAction<string | null>) => {
      value.selectDate = action.payload;
    },
    setSelectTodo: (value, action: PayloadAction<Todo>) => {
      value.activeTodo = action.payload;
    },
    deleteSelectTodo: (value) => {
      value.activeTodo = null;
    },
    setOpenForm: (value, action: PayloadAction<boolean>) => {
      value.isOpen = action.payload;
    },
  },
});

export const { actions } = addTodoSlice;

export default addTodoSlice.reducer;
