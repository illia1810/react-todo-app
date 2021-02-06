import React from 'react';

const InputSelect = ({setInputText, todos, setTodos, inputText, setStatus}) =>{
    const inputTextHandler = (e) =>{
        console.log(e);
        setInputText(e.target.value);
    }
    const submitTodoAction = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, done: false, id: Math.random()*1000}
        ]);
        setInputText("");
    };
    const userChoose = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} placeholder="Type new event..." />
            <button className="btn btn-primary" onClick={submitTodoAction}>Add</button>
            <div class="select">
                <select onChange={userChoose} name="actions" className="filter-todo">
                    <option value="all">All Tasks</option>
                    <option value="done">Done</option>
                    <option value="undone">Undone</option>
                </select>
            </div>
        </form>
    );
};

export default InputSelect;