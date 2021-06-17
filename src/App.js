import React from 'react';
import Todo from './components/Todo';

import style from './App.module.sass'
import './common/styles/reset.css';
function App () {
  return (
    <>
    <div className={style.container}><Todo /></div>
      
    </>
  );
}

export default App;
