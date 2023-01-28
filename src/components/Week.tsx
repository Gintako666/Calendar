import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { actions as eventTodoActions } from '../features/eventTodo';
import { actions as calendatActions } from '../features/calendar';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

interface WeekProps {
  dateDisplay: Date
  indexDate: number
}

export const Week: React.FunctionComponent<WeekProps> = ({ dateDisplay, indexDate }) => {
  const dispatch = useAppDispatch();
  const { month } = useAppSelector(state => state.calendar);
  const { selectDate } = useAppSelector(state => state.eventTodo);
  const { todos } = useAppSelector(state => state.todos);

  const weekDayNames = useMemo(() => {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  }, []);

  const normalizeDateString = useCallback((date: Date) => {
    return date.toLocaleDateString('en-GB').split('/').reverse().join('-');
  }, []);

  const handleDayClick = useCallback((dateSelect: Date | null) => {
    if (dateSelect) {
      dispatch(eventTodoActions.setSelectDate(normalizeDateString(dateSelect)));
    } else {
      dispatch(eventTodoActions.setSelectDate(dateSelect));
    }
  }, []);

  const getIsSelectDate = useCallback((date) => {
    return normalizeDateString(date) === selectDate;
  }, [selectDate]);

  const getTodosInThisDay = useCallback((date: Date) => {
    return todos.filter(item => (
      item.date === normalizeDateString(date)
    )).sort((a: Todo, b: Todo) => a.time.localeCompare(b.time));
  }, []);

  return (
    <div
      className={classNames(
        'calendar__item',
        { 'calendar__item--disabled': dateDisplay.getMonth() !== month },
        { 'calendar__item--active': getIsSelectDate(dateDisplay) },
      )}
      aria-hidden
      onClick={() => {
        if (dateDisplay.getMonth() !== month) {
          dispatch(calendatActions.setMonth(dateDisplay.getMonth()));
          dispatch(calendatActions.setYear(dateDisplay.getFullYear()));

          return;
        }

        handleDayClick(dateDisplay);
      }}
    >
      <div className="calendar__item__day">
        {dateDisplay.getDate()}
      </div>

      <div className="calendar__item__day-week">
        {weekDayNames[indexDate % 7]}
      </div>

      <div className="calendar__item__todos">
        {getTodosInThisDay(dateDisplay).map(todo => {
          return <TodoItem key={todo.id} todo={todo} dateDisplay={dateDisplay} />;
        })}
      </div>

    </div>
  );
};
