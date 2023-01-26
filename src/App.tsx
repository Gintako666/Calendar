/* eslint-disable no-console */
import React, { useEffect } from 'react';
import './styles/App.scss';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import NewIdeaItem from './components/NewIdeaItem/NewIdeaItem';
import { useLocalStorage } from './hooks/use-localStorage';
import { useAppSelector } from './hooks/reduxHooks';
// import { actions as todosActions } from './features/todos';

const App: React.FC = () => {
  // const dispatch = useAppDispatch();
  const { todos } = useAppSelector(state => state.todos);
  const { isOpen } = useAppSelector(state => state.addTodo);
  const [, setTodos] = useLocalStorage('todos', []);

  useEffect(() => {
    console.log('set');
    setTodos(todos);
  }, [todos]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Calendar />
        {isOpen && <NewIdeaItem />}
      </div>
    </div>
  );
};

export default App;
