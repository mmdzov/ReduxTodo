export const changeInput = (event) => async (dispatch) => {
  await dispatch({ type: "CHANGE_INPUT", payload: event.target.value });
};

export const clearInput = () => async (dispatch, getState) => {
  await dispatch({ type: "CLEAR_INPUT", payload: "" });
};
