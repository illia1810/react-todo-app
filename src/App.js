import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/style.css'
import InputSelect from './components/InputSelect';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredActions, setFilteredActions] = useState([]);

  useEffect(() => {
    userFilteredActions();
  }, [todos, status])
  const userFilteredActions = () =>{
    switch(status){
      case "done":
        setFilteredActions(todos.filter(todo => todo.done === true));
        break;
      case "undone":
        setFilteredActions(todos.filter(todo => todo.done === false));
        break;
      default:
        setFilteredActions(todos);
        break;
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <InputSelect inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
        <TodoList setTodos={setTodos} todos={todos} filteredActions={filteredActions}/>
      </div>
    </div>
  );
}

export default App;
