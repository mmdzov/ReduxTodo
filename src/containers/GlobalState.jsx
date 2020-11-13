import React, { useState } from "react";
import TodoContext from "../context/Todo";
import { v4 as uuid } from "uuid";

const GlobalState = ({ children }) => {
  const [state, setState] = useState({
    todos: [],
    trash: [],
    todo: "",
  });
  const handleCreteNewTodo = (e) => {
    e.preventDefault();
    const todos = [...state.todos];
    const item = {
      id: uuid(),
      name: state.todo.trim(),
      completed: false,
    };
    if (/^[\S]/i.test(item.name)) {
      todos.push(item);
      setState((prev) => ({ ...prev, todo: "", todos }));
    }
  };
  const handleTodoInput = (event) =>
    setState((prev) => ({ ...prev, todo: event.target.value }));
  const handleCompleteTodo = (id) => {
    const todos = [...state.todos];
    let index = todos.findIndex((item) => item.id === id);
    let todo = todos[index];
    todo.completed = !todo.completed;
    setState((prev) => ({ ...prev, todos }));
  };
  const handleDeleteTodo = (id) => {
    const todos = [...state.todos];
    const trash = [...state.trash];
    const filter = todos.filter((item) => item.id !== id);
    const index = todos.findIndex((item) => item.id === id);
    trash.push(todos[index]);
    setState((prev) => ({ ...prev, todos: filter, trash: trash }));
  };
  const handleUndo = () => {
    const trash = [...state.trash];
    const todos = [...state.todos];
    if (trash.length !== 0) {
      const lastTrash = trash.pop();
      todos.push(lastTrash);
      setState((prev) => ({ ...prev, todos: todos, trash: trash }));
    }
  };
  const handleUndoAll = () => {
    const todos = [...state.todos];
    todos.push(...state.trash);
    setState((prev) => ({ ...prev, todos: todos, trash: [] }));
  };
  const handleClearTrash = () => setState((prev) => ({ ...prev, trash: [] }));
  return (
    <TodoContext.Provider
      value={{
        handleCreteNewTodo,
        handleTodoInput,
        handleCompleteTodo,
        handleDeleteTodo,
        handleUndo,
        handleClearTrash,
        handleUndoAll,
        state: state,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default GlobalState;
