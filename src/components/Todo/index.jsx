import React from 'react';
import { NavLink } from 'react-router-dom';
import NewTaskForm from './NewTaskForm';
import TodoList from './TodoList';
import style from './Todo.module.sass';
function Todo () {
  return (
    <>
      <div className={style.container}>
        <div className={style.mainTodoContent}>
          <TodoList/>
          <NewTaskForm/>
        </div>
        <div className={style.todoFooter}>
          <NavLink to='/completed'>Completed</NavLink>
        </div>
      </div>
    </>
  );
}

export default Todo;
