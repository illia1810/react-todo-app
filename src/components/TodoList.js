import React from 'react';

import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredActions}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredActions.map((todo => (
                    <Todo setTodos={setTodos} todos={todos} text={todo.text} key={todo.id} todo={todo} />
                )))}
            </ul>
        </div>
    );
};

export default TodoList;