import React from 'react';
import TodoItem from './TodoItem';
function TodoList (props) {
  const { todo, setTodo } = props;
  const changeIsCompleted = id => {
    setTodo(
      todo.map(item => ({
        ...item,
        isCompleted: item.id === id ? !item.isCompleted : item.isCompleted,
      }))
    );
  };
  const deleteTask = task => {
    setTodo(
      todo.filter(item => item != task
      )
    );
  };
  const getTodo = todo.map(todoItem => {
    return (
      <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
        changeIsCompleted={changeIsCompleted}
        deleteTask={deleteTask}
      />
    );
  });
  return (
    <>
      <ul>{getTodo}</ul>
    </>
  );
}

export default TodoList;
