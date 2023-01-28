import React, { useEffect } from 'react';
import './styles/App.scss';
import 'bulma/css/bulma.min.css';
import { Calendar } from './components/Calendar';
import Header from './components/Header';
import NewIdeaItem from './components/NewIdeaItem';
import { useLocalStorage } from './hooks/use-localStorage';
import { useAppSelector } from './hooks/reduxHooks';

const App: React.FC = () => {
  const { todos } = useAppSelector(state => state.todos);
  const { isOpen } = useAppSelector(state => state.eventTodo);
  const [, setTodos] = useLocalStorage('todos', []);

  useEffect(() => {
    setTodos(todos);
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <Calendar />
      {isOpen && <NewIdeaItem />}
    </div>
  );
};

export default App;
