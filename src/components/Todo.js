import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteEvent = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const doneEvent = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return{
                    ...item, done: !item.done
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.done ? "done" : ""}`}>{text}</li>
            <button className="done-btn" onClick={doneEvent}>Done</button>
            <button className="remove-btn" onClick={deleteEvent}>Remove</button>
        </div>
    );
}

export default Todo;