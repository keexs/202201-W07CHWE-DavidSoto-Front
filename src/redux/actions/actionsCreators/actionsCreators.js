import actionTypes from "../actionsTypes/actionTypes";

const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});

export default createUserAction;
