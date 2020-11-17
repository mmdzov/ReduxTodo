import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, deleteTodo } from "../../store/actions/Todos";
import { clearTrash, undoAll, undoTodo } from "../../store/actions/Trash";
import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <button onClick={() => dispatch(undoAll())}>Undo All</button>
      <button onClick={() => dispatch(undoTodo())}>Undo</button>
      <button onClick={() => dispatch(clearTrash())}>clear trash</button>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        {todos.map(({ id, name, completed }) => (
          <Todo
            key={id}
            complete={() => dispatch(completeTodo(id))}
            remove={() => dispatch(deleteTodo(id))}
            title={name}
            completed={completed}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Todos;
