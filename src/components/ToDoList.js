import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

// react-perfect-scrollbar
// https://www.npmjs.com/package/react-perfect-scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    width: '80%',
    height: '80vh',
    // overflowY: 'scroll',  // don't need this if using react-perfect-scrollbar
    background: 'transparent',
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: '10px',
    paddingBottom: '32px',
  },
  title: {
    color: props => props.webtheme.textColor,
    textShadow: props => '5px 5px 15px ' + props.webtheme.color
  },
  saveLoadButton: {
    padding: '10px',
    margin: '0px 10px 20px 10px',
    border: 'none',
    borderRadius: '0px 4px 4px 0px',
    cursor: 'pointer',
    outline: 'none',
    background: props => props.webtheme.color,
    color: '#fff',
  },
  scrollbar: {
    overflowX: 'hidden'
  }
}));

function ToDoList(props) {
  const [todos, setTodos] = useState([]);
  // save TODOs to localStorage
  let saveData = () => {
    localStorage.setItem('TODO Save Data', JSON.stringify(todos));
    alert("Your TODO List is saved to local storage!")
  }
  // get TODOs from localStorage
  let getData = () => {
    var data = localStorage.getItem("TODO Save Data")
    setTodos(JSON.parse(data));
  }

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.title}>What do you want to accomplish today?</h1>
        <button onClick={saveData} className={classes.saveLoadButton}>Save My TODO List</button>
        <button onClick={getData} className={classes.saveLoadButton}>Load My TODO List</button>
        <ToDoForm onSubmit={addTodo} webtheme={props.webtheme} />
      </div>
      <PerfectScrollbar className={classes.scrollbar}>
        <ToDoItem
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          webtheme={props.webtheme}
        />
      </PerfectScrollbar>
    </div>);
}

export default ToDoList;