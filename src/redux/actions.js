import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from './types';

export function addItem (item) {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}
export function updateItem (id) {
  return {
    type: UPDATE_ITEM,
    payload: id,
  };
}
export function deleteItem (item) {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
}
