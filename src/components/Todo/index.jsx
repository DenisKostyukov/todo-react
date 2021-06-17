import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import TodoList from './TodoList';
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
  const [todo, setTodo] = useState(todosArray);
  return (
    <>
      {console.log(todo)}
      <TodoList todo={todo} setTodo={setTodo} />
      <NewTaskForm setTodo={setTodo}/>
    </>
  );
}

export default Todo;
