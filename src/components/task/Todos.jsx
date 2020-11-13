import React, { Fragment, useContext } from "react";
import TodoContext from "../../context/Todo";
import Todo from "./Todo";

const Todos = () => {
  const {
    state,
    handleCompleteTodo,
    handleDeleteTodo,
    handleUndo,
    handleClearTrash,
    handleUndoAll,
  } = useContext(TodoContext);
  return (
    <Fragment>
      <button onClick={handleUndoAll}>Undo All</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleClearTrash}>clear trash</button>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        {state.todos.map(({ id, name, completed }) => (
          <Todo
            key={id}
            complete={() => handleCompleteTodo(id)}
            remove={() => handleDeleteTodo(id)}
            title={name}
            completed={completed}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Todos;
