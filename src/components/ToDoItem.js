import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToDoForm from './ToDoForm';

// material-ui icons
import CloseIcon from '@mui/icons-material/Close';

import UIfx from 'uifx';
const todoSound = new UIfx("https://github.com/sarahli10/merodii-audio/blob/master/TodoSound.mp3?raw=true", {volume: 0.5 });

const useStyles = makeStyles((theme) => ({
  smallIcon: {
    color: '#fff',
    //fontSize: '2rem',  // this one doesn't work
    // this one does:
    "& svg": {
      fontSize: 30
    },
    marginLeft: '20px',
    marginRight: '5px',
  },
  todoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '4px auto',
    fontSize: '16px',
    color: '#fff',
    background: props => props.webtheme.color,
    padding: '16px',
    borderRadius: '5px',
    width: '600px',
  },
  todoRowComplete: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '4px auto',
    fontSize: '16px',
    color: '#fff',
    background: props => props.webtheme.color,
    padding: '16px',
    borderRadius: '5px',
    width: '600px',
    textDecoration: 'line-through',
    opacity: 0.4,
  },
}));


function ToDoItem(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  const todoComplete = (id) => {
    todoSound.play();
    props.completeTodo(id);
  }

  const todoRemove = (id) => {
    todoSound.play();
    props.removeTodo(id);
  }

  const classes = useStyles(props);

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (props.todos.map((todo, index) => (
    <div
      className={todo.isComplete ? classes.todoRowComplete : classes.todoRow}
      key={index}
    >
      <div key={todo.id} onClick={() => todoComplete(todo.id)}>
        {todo.text}
      </div>
      <div>
        <CloseIcon
          onClick={() => todoRemove(todo.id)}
          className={classes.smallIcon}
        />
      </div>
    </div>
  )));
};

export default ToDoItem;
