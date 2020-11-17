import { v4 as uuid } from "uuid";
import { clearInput } from "./Todo";
import { addToTrash } from "./Trash";

export const createTodo = (event) => async (dispatch, getState) => {
  event.preventDefault();
  const todos = [...getState().todos];
  const item = {
    id: uuid(),
    name: getState().todo.trim(),
    completed: false,
  };
  if (/^[\S]/i.test(item.name)) {
    todos.push(item);
    await dispatch({ type: "CREATE", payload: todos });
    await dispatch(clearInput());
  }
};
export const deleteTodo = (todoId) => async (dispatch, getState) => {
  const todos1 = [...getState().todos];
  const trash = [...getState().trash];
  const filter = todos1.filter((item) => item.id !== todoId);
  const index = todos1.findIndex((item) => item.id === todoId);
  trash.push(todos1[index]);
  await dispatch({ type: "DELETE", payload: filter });
  await dispatch(addToTrash(trash));
};

export const completeTodo = (todoId) => async (dispatch, getState) => {
  const todos = [...getState().todos];
  let index = todos.findIndex((item) => item.id === todoId);
  let todo = todos[index];
  todo.completed = !todo.completed;
  await dispatch({ type: "COMPLETE", payload: todos });
};

export const undoTodoInTodos = (todos) => async (dispatch, getState) => {
  await dispatch({ type: "UNDO_TODO", payload: todos });
};

export const undoAllTodo = () => async (dispatch, getState) => {
  let todos = [...getState().todos];
  let trash = [...getState().trash];
  todos.push(...trash);
  await dispatch({ type: "__UNDO_ALL__", payload: todos });
};
