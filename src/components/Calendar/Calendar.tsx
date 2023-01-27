/* eslint-disable no-console */
// import classNames from 'classnames';
// import classNames from 'classnames';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { actions as addTodoActions } from '../../features/addTodo';
import { actions as calendatActions } from '../../features/calendar';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
// import { useAppSelector } from '../../hooks/reduxHooks';
import { getMonthDataRender } from '../../scripts/calendar';
import { Todo } from '../../types/todo';

const Calendar: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const {
    year, month,
  } = useAppSelector(state => state.calendar);
  const { selectDate } = useAppSelector(state => state.addTodo);
  const { todos } = useAppSelector(state => state.todos);

  const [monthData, setmonthData] = useState(getMonthDataRender(year, month));
  const weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  useEffect(() => {
    setmonthData(getMonthDataRender(year, month));
  }, [month, year]);

  const handleDayClick = (dateSelect: Date | null) => {
    if (dateSelect) {
      console.log(dateSelect.toLocaleDateString('en-GB').split('/').reverse().join('-'));
      dispatch(addTodoActions.setSelectDate(dateSelect.toLocaleDateString('en-GB').split('/').reverse().join('-')));
    } else {
      dispatch(addTodoActions.setSelectDate(dateSelect));
    }
  };

  return (
    <div className="calendar">
      {monthData && monthData.map((week, indexWeek) => {
        const keyWeek = (indexWeek * Math.random());

        return (
          <div key={keyWeek} className="calendar__week">
            {week.map((dateDisplay, indexDate) => {
              const keyDate = (indexDate * Math.random());

              const todosInThisDay = todos.filter(item => (
                item.date === dateDisplay?.toLocaleDateString('en-GB').split('/').reverse().join('-')
              )).sort((a: Todo, b: Todo) => a.time.localeCompare(b.time));

              if (dateDisplay) {
                return (
                  <div
                    key={keyDate}
                    // className="calendar__item calendar__item--active"
                    className={classNames(
                      'calendar__item',
                      { 'calendar__item--disabled': dateDisplay.getMonth() !== month },
                      { 'calendar__item--active': dateDisplay.toLocaleDateString('en-GB').split('/').reverse().join('-') === selectDate },
                    )}
                    aria-hidden
                    onClick={() => {
                      console.log(dateDisplay);
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

                    <div
                      className="calendar__item__todos"
                      style={{ overflowY: todosInThisDay.length > 3 ? 'scroll' : 'auto' }}
                    >
                      {todosInThisDay.map(todo => {
                        return (
                          <button
                            type="button"
                            key={todo.refreshDate}
                            className="calendar__item__todo-button"
                            onClick={() => {
                              dispatch(addTodoActions.setOpenForm());
                              dispatch(addTodoActions.setSelectTodo(todo));
                            }}
                          >
                            <p className="calendar__item__todo-button__text">{todo.title}</p>
                            {' '}
                            <p>{todo.time}</p>
                          </button>
                        );
                      })}
                    </div>

                  </div>
                );
              }

              return (
                <div key={keyDate} className="calendar__item">10</div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
