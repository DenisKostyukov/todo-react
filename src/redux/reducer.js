import { v4 as uuidv4 } from 'uuid';
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from './types';

const initialState = {
  todo: JSON.parse(localStorage.getItem('todo list')) || [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todo: state.todo.concat({
          id: uuidv4(),
          task: action.payload,
          isCompleted: false,
        }),
      };

    case UPDATE_ITEM:
      return {
        ...state,
        todo: state.todo.map(item => ({
          ...item,
          isCompleted:
            item.id === action.payload ? !item.isCompleted : item.isCompleted,
        })),
      };

    case DELETE_ITEM:
      return {
        ...state,
        todo: state.todo.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
};
