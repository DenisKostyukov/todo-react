import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../../../context';
function TodoList () {
  const { todo, setTodo } = useContext(TodoContext);
  const changeIsCompleted = id => {
    setTodo(
      todo.map(item => ({
        ...item,
        isCompleted: item.id === id ? !item.isCompleted : item.isCompleted,
      }))
    );
  };
  const deleteTask = task => {
    setTodo(todo.filter(item => item !== task));
  };
  const getTodo = () => {
    if (todo) {
      return todo.map(todoItem => {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            changeIsCompleted={changeIsCompleted}
            deleteTask={deleteTask}
          />
        );
      });
    }
  };
  return (
    <>
      <ul>{getTodo()}</ul>
    </>
  );
}

export default TodoList;
