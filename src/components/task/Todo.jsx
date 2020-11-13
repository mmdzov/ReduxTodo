import React from "react";

const Todo = ({ title, complete, remove, completed }) => {
  return (
    <div className='Todo'>
      <div style={completed ? { textDecoration: "line-through" } : null}>
        {title}
      </div>
      <button onClick={complete}>complete</button>
      <button onClick={remove}>remove</button>
    </div>
  );
};

export default Todo;
