import actionTypes from "../../actions/actionsTypes/actionTypes";

const alreadyUsersReducer = (alreadyUsers = [], action = {}) => {
  let newUsers;
  switch (action.type) {
    case actionTypes.createUser:
      newUsers = [...alreadyUsers, action.user];
      break;
    default:
      newUsers = [...alreadyUsers];
  }
  return newUsers;
};

export default alreadyUsersReducer;
