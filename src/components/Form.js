import React from 'react';
 
 export default function Form({ setInputText, todos, setTodos, inputText, status, setStatus, }) {
     const inputTextHandler = (e) => {
         setInputText(e.target.value);
     };
     const submitTextHandler = (e) => {
         e.preventDefault();
         setTodos([...todos, {text: inputText, completed: false, id: Math.random()* 1000}]);
         setInputText("");
      } ;
      const statusHandlter = (e) => {
        setStatus(e.target.value)
      }
   return (
     <form>
        <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}></input>
        <button className="todo-button" type="submit" onClick={submitTextHandler}>
        <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandlter} name="todo" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>

        </div>
     </form>
   )
 }
 