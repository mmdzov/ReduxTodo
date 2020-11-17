export const TodosReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...action.payload];
    case "DELETE":
      return [...action.payload];
    case "COMPLETE":
      return [...action.payload];
    case "UNDO_TODO":
      return [...action.payload];
    case "__UNDO_ALL__":
      return [...action.payload];
    default:
      return state;
  }
};
