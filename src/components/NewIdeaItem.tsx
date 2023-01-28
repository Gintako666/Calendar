import classNames from 'classnames';
import React, { useEffect, useState, useCallback } from 'react';
import { actions as eventTodoActions } from '../features/eventTodo';
import { actions as todosActions } from '../features/todos';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

const NewIdeaItem: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeTodo, selectDate } = useAppSelector(state => state.eventTodo);
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const [disabledButton, setdisabledButton] = useState(true);

  const clearInputs = useCallback(() => {
    setTitle('');
    setdescription('');
    settime('');
  }, []);

  useEffect(() => {
    return () => {
      dispatch(eventTodoActions.deleteSelectTodo());
    };
  }, []);

  useEffect(() => {
    if (activeTodo) {
      setTitle(activeTodo.title);
      setdescription(activeTodo.description);
      setdate(activeTodo.date);
      settime(activeTodo.time);
    }
  }, [activeTodo]);

  useEffect(() => {
    if (selectDate) {
      setdate(selectDate);
    }
  }, [selectDate]);

  useEffect(() => {
    if (title && description && date && time) {
      setdisabledButton(false);
    } else {
      setdisabledButton(true);
    }
  }, [title, description, date, time]);

  const handleAddNewTodo = useCallback(() => {
    const refreshDate = `${new Date().toLocaleDateString('en-GB')} ${new Date().toTimeString().slice(0, 8)}`;

    const newTodo = {

      title,
      description,
      date,
      time,
      refreshDate,
    };

    if (activeTodo) {
      dispatch(todosActions.editTodo({
        id: activeTodo.id,
        ...newTodo,
      }));
      dispatch(eventTodoActions.deleteSelectTodo());
    } else {
      dispatch(todosActions.setTodos([{
        id: Math.random() * 100000,
        ...newTodo,
      }]));
    }

    dispatch(eventTodoActions.setOpenForm(false));
    clearInputs();
  }, [title, description, date, time, activeTodo]);

  return (
    <div className="new-idea-item">
      <button
        type="button"
        className="new-idea-item__close"
        onClick={() => dispatch(eventTodoActions.setOpenForm(false))}
      >
        ✖
      </button>
      <h1 className="new-idea-item__title">
        {activeTodo ? 'Edit idea item' : 'Add new idea item'}
      </h1>
      {activeTodo ? `Created at: ${activeTodo.refreshDate}` : null}
      <input
        placeholder="Title goes here"
        type="text"
        className="new-idea-item__input new-idea-item__input--title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descriptions"
        className="new-idea-item__input new-idea-item__input--text"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <div className="new-idea-item__set-time">
        <input
          type="date"
          className="new-idea-item__input new-idea-item__input--date"
          value={date}
          onChange={(e) => setdate(e.target.value)}
        />
        <input
          type="time"
          className="new-idea-item__input new-idea-item__input--time"
          value={time}
          onChange={(e) => settime(e.target.value)}
        />
      </div>
      <div className="new-idea-item__buttons">
        <button
          className={classNames(
            'button',
            'is-primary',
            'is-large',
            { 'is-disabled': disabledButton },
          )}
          disabled={disabledButton}
          type="button"
          onClick={handleAddNewTodo}
        >
          Save
        </button>
        {activeTodo && (
          <button
            className="button is-primary is-large is-danger"
            type="button"
            onClick={() => {
              if (activeTodo) {
                dispatch(todosActions.removeTodo(activeTodo));
                dispatch(eventTodoActions.deleteSelectTodo());
                dispatch(eventTodoActions.setOpenForm(false));
              }

              clearInputs();
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default NewIdeaItem;
