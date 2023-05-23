import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  todoForm: {
    marginBottom: '32px',
  },
  todoInput: {
    padding: '14px 32px 14px 16px',
    borderRadius: '4px 0 0 4px',
    border: '2px solid',
    borderColor: props => props.webtheme.color,
    outline: 'none',
    width: '450px',
    background: props => props.webtheme.color + '70',  // add 2 digits after HEX code for opacity
    color: props => props.webtheme.textColor,
  },
  todoInputEdit: {
    padding: '14px 32px 14px 16px',
    borderRadius: '4px 0 0 4px',
    border: '2px solid',
    borderColor: props => props.webtheme.color,
    outline: 'none',
    width: '450px',
    background: props => props.webtheme.color + '70',
    color: props => props.webtheme.textColor,
  },
  todoButton: {
    padding: '16px',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    outline: 'none',
    background: props => props.webtheme.color,
    color: '#fff',
  },
  todoButtonEdit: {
    padding: '16px',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    outline: 'none',
    background: props => props.webtheme.color,
    color: '#fff',
  },
}));

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  const classes = useStyles(props);
  return (
    <form onSubmit={handleSubmit} className={classes.todoForm}>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className={classes.todoInputEdit}
          />
          <button onClick={handleSubmit} className={classes.todoButtonEdit}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            value={input}
            onChange={handleChange}
            name='text'
            className={classes.todoInput}
            ref={inputRef}
          />
          <button onClick={handleSubmit} className={classes.todoButton}>
            Add TODO
          </button>
        </>
      )}
    </form>
  );
}

export default ToDoForm;
