//! REDUX ACTIONS
//^ {
//^   type: determines the state changes,
//^   payload: helps with state changes
//^ }

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user
});
