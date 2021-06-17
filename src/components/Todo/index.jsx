import React, { useState, useEffect} from 'react';
import NewTaskForm from './NewTaskForm';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import style from './Todo.module.sass';
const todosArray = [
  {
    id: 0,
    task: 'some task 1',
    isCompleted: true,
  },
  {
    id: 1,
    task: 'some task 2',
    isCompleted: true,
  },
  {
    id: 2,
    task: 'some task 3',
    isCompleted: false,
  },
  {
    id: 3,
    task: 'some task 4',
    isCompleted: false,
  },
];
function Todo () {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo list")));
  const addTask = task => {
    const newTodoArray = [...todo];
    newTodoArray.push({ task, id: uuidv4(), isCompleted: false });
    setTodo(newTodoArray);
  };
  useEffect(()=>{
    localStorage.setItem('todo list', JSON.stringify(todo))
  },[todo])
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
