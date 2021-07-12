import React from 'react';
import TodoItem from './TodoItem';
import style from './TodoList.module.sass';
import { useSelector } from 'react-redux';
import { useTodo } from '../../../hooks';
function TodoList () {
  const todo = useSelector(state => state.todo);
  useTodo(todo);
  const getTodo = () => {
    if (todo.length > 0) {
      return todo.map(todoItem => {
        return <TodoItem key={todoItem.id} todoItem={todoItem} />;
      });
    } else return <div className={style.empty}>Здесь пока пусто</div>;
  };

  return (
    <>
      <ul>{getTodo()}</ul>
    </>
  );
}

export default TodoList;
