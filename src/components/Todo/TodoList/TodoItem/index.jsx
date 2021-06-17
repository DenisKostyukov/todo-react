import React, {useState} from 'react';

function TodoItem ({todoItem, changeIsCompleted, deleteTask}) {

  return (    
    <>
      <li id={todoItem.id}>
        {todoItem.task}
        <input type='checkbox' checked={todoItem.isCompleted} onChange={()=>changeIsCompleted(todoItem.id)} />
        <button onClick={()=>deleteTask(todoItem)}>delete</button>
      </li>
    </>
  );
}
export default TodoItem;
