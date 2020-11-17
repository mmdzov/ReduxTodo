import { combineReducers } from "redux";
import { TodosReducer } from "./Todos";
import { TodoReducer } from "./Todo";
import { TrashReducer } from "./Trash";

export const reducers = combineReducers({
  todos: TodosReducer,
  todo: TodoReducer,
  trash: TrashReducer,
});
