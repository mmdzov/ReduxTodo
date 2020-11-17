import { undoAllTodo, undoTodoInTodos } from "./Todos";

export const undoTodo = () => async (dispatch, getState) => {
  const trash = [...getState().trash];
  const todos = [...getState().todos];
  if (trash.length !== 0) {
    const lastTrash = trash.pop();
    todos.push(lastTrash);
    await dispatch({ type: "UNDO", payload: trash });
    await dispatch(undoTodoInTodos(todos));
  }
};

export const undoAll = () => async (dispatch) => {
  await dispatch(undoAllTodo());
  await dispatch({ type: "UNDOALL", payload: [] });
};

export const clearTrash = () => async (dispatch) => {
  await dispatch({ type: "CLEARTRASH", payload: [] });
};

export const addToTrash = (trash) => async (dispatch) => {
  await dispatch({ type: "ADD_TO_TRASH", payload: trash });
};
