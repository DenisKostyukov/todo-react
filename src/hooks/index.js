import { useEffect } from 'react';

export function useTodo (todo) {
  useEffect(() => {
    localStorage.setItem('todo list', JSON.stringify(todo));
  }, [todo]);
}
