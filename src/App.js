import React, {useState} from 'react';
import Todo from './components/Todo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TodoContext } from './context';
import { useTodo } from './hooks';
import style from './App.module.sass';
import './common/styles/reset.css';
import CompletedList from './components/Todo/CompletedList';
function App () {
  const { todo, setTodo } = useTodo();
  return (
    <>
      <div className={style.container}>
        <BrowserRouter>
          <TodoContext.Provider value={{todo, setTodo}}>
            <Switch>
              <Route exact path='/' component={Todo} />
              <Route exact path='/completed' component={CompletedList} />
            </Switch>
          </TodoContext.Provider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
