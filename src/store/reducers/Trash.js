export const TrashReducer = (state = [], action) => {
  switch (action.type) {
    case "UNDO":
      return [...action.payload];
    case "UNDOALL":
      return [...action.payload];
    case "CLEARTRASH":
      return [...action.payload];
    case "ADD_TO_TRASH":
      return [...action.payload];
    default:
      return state;
  }
};
