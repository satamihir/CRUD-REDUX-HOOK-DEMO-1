import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    return(
        <div className="m-4">
            
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default TodoList