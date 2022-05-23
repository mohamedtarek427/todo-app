import React , { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //status stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //save local storage
  const saveToLocalTodos = () => {
      localStorage.setItem('todoss', JSON.stringify([]))
}
//run once when start
useEffect(() => {
  getLocalStorage()
}, [])
//useEffect
useEffect(() => {
  filterHandler();
  saveToLocalTodos();
},[todos, status])
//functions
const filterHandler = () => {
  switch (status) {
    case "completed":
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break; 
        default : setFilteredTodos(todos) ;
        break;
      }
      
    }
      //get local storage
    const getLocalStorage = () => {
      if(localStorage.getItem('todoss') === null) {
        localStorage.setItem('todoss', JSON.stringify([]))
      }
      else {
        localStorage.setItem('todos', JSON.stringify(todos))
      }
    }
    return (
      <div className="App" >
      
      <header>
      <h1>{inputText}</h1>
      </header>
      <Form setStatus={setStatus} status={status} todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
      </div>
      
      )
    }
    
    export default App;
    