import React from 'react';
import NewTaskForm from './NewTaskForm';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import { useTodo } from '../../hooks';
import style from './Todo.module.sass';
function Todo () {
  const {todo, setTodo} = useTodo()
  const addTask = task => {
    const newTodoArray = [...todo];
    newTodoArray.push({ task, id: uuidv4(), isCompleted: false });
    setTodo(newTodoArray);
  };
  return (
    <>
      <div className={style.container}>
        <TodoList todo={todo} setTodo={setTodo} />
        <NewTaskForm addTask={addTask} />
      </div>
    </>
  );
}

export default Todo;
