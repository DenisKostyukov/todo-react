import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../../../context';
import style from './TodoList.module.sass'
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
    if (todo.length>0) {
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
    } else return <div className={style.empty}>Здесь пока пусто</div>
  };

  return (
    <>
      <ul>{getTodo()}</ul>
    </>
  );
}

export default TodoList;
