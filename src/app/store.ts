/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import calendarReduser from '../features/calendar';
import todosReduser from '../features/todos';
import addTodoReduser from '../features/addTodo';

const store = configureStore({
  reducer: {
    calendar: calendarReduser,
    todos: todosReduser,
    addTodo: addTodoReduser,
  },
});

composeWithDevTools();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;