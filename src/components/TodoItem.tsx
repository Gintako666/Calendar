import classNames from 'classnames';
import React from 'react';
import { actions as eventTodoActions } from '../features/eventTodo';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo
  dateDisplay: Date
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, dateDisplay }) => {
  const dispatch = useAppDispatch();
  const { month } = useAppSelector(state => state.calendar);

  return (
    <button
      type="button"
      key={todo.refreshDate}
      className={classNames(
        'calendar__item__todo-button',
        { 'calendar__item__todo-button--disabled': dateDisplay.getMonth() !== month },
      )}
      onClick={() => {
        dispatch(eventTodoActions.setOpenForm(true));
        dispatch(eventTodoActions.setSelectTodo(todo));
      }}
    >
      <p className="calendar__item__todo-button__text">{todo.title}</p>
      {' '}
      <p>{todo.time}</p>
    </button>
  );
};
