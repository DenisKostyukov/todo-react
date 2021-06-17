import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';
import style from './TodoItem.module.sass';
const CustomCheckbox = withStyles({
  root: {
    color: "#d1f443",
    '&$checked': {
      color: "#d1f443",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
function TodoItem ({ todoItem, changeIsCompleted, deleteTask }) {
  return (
    <>
      <li className={style.todoItem}>
        <CustomCheckbox
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={todoItem.isCompleted}
          onChange={() => changeIsCompleted(todoItem.id)}
          name='checkbox'
        />
        {todoItem.task}
        <span onClick={() => deleteTask(todoItem)}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </span>
      </li>
    </>
  );
}
export default TodoItem;
