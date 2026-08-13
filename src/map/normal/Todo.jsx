import React from 'react';

const Todo = ({todo}) => {
    const {id, task, done} = todo
    return (
        <li style={{textDecoration:done ? "line-through" : ""}}>{task}</li>
    );
};

export default Todo;