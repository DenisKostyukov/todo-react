import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NewTaskForm from './NewTaskForm';
import TodoList from './TodoList';
import { TodoContext } from '../../context';
import style from './Todo.module.sass';
function Todo () {
  const { todo, setTodo } = useContext(TodoContext);
  const addTask = task => {
    const newTodoArray = [...todo];
    newTodoArray.push({ task, id: uuidv4(), isCompleted: false });
    setTodo(newTodoArray);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.mainTodoContent}>
          <TodoList/>
          <NewTaskForm addTask={addTask} />
        </div>
        <div className={style.todoFooter}>
          <NavLink to='/completed'>Completed</NavLink>
        </div>
      </div>
    </>
  );
}

export default Todo;
