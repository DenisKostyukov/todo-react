import React from 'react';
import Todo from './components/Todo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import style from './App.module.sass';
import './common/styles/reset.css';
import CompletedList from './components/Todo/CompletedList';
function App () {
  return (
    <>
      <div className={style.container}>
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Todo} />
              <Route exact path='/completed' component={CompletedList} />
            </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
