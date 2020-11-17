export const TodoReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return action.payload;
    case "CLEAR_INPUT": 
      return action.payload;
    default:
      return state;
  }
};
