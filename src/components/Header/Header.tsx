/* eslint-disable no-console */
import React, { useState } from 'react';
import { actions as addTodoActions } from '../../features/addTodo';
import { actions as calendarActions } from '../../features/calendar';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getYear, MonthReverse } from '../../utils/consts';

const Header: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { month, year } = useAppSelector(state => state.calendar);
  const [openSelects, setOpesSelects] = useState(false);

  return (
    <header className="header">
      <button
        type="button"
        className="header__button header__button--add-todo"
        onClick={() => {
          dispatch(addTodoActions.setOpenForm());
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path className="header__button--add-todo" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </button>
      <nav className="header__nav">
        <button
          type="button"
          onClick={() => {
            dispatch(calendarActions.setMonthPrev());
          }}
          className="header__button"
        >
          <svg className="header__button__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
        </button>
        <div className="thisMounsYears">
          {MonthReverse[month]}
          {' '}
          {year}
        </div>
        <button
          type="button"
          onClick={() => {
            dispatch(calendarActions.setMonthNext());
          }}
          className="header__button"
        >
          <svg className="header__button__arrow header__button__arrow--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
        </button>
      </nav>
      <div className="header__selects-wrapper">
        <button
          type="button"
          className="header__button"
          onClick={() => {
            setOpesSelects(prev => !prev);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
          </svg>
        </button>
        {openSelects && (
          <div className="header__selects">
            <select
              className="header__selects__item"
              defaultValue={month}
              onChange={(e) => {
                console.log('set');
                dispatch(calendarActions.setMonth(+e.target.value));
              }}
            >
              {MonthReverse.map((item, index) => {
                return (
                  <option
                    key={item}
                    value={index}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
            <select
              className="header__selects__item"
              defaultValue={year}
              onChange={(e) => {
                console.log('set');
                dispatch(calendarActions.setYear(+e.target.value));
              }}
            >
              {getYear().map((item) => {
                return (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
