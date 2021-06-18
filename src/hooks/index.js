import { useState, useEffect } from 'react';

export function useTodo () {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo list')));
  useEffect(() => {
    localStorage.setItem('todo list', JSON.stringify(todo ? todo : []));
  }, [todo]);
  return { todo, setTodo };
}
