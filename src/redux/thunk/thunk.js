import jwtDecode from "jwt-decode";
import createUserAction from "../actions/actionsCreators/actionsCreators";

export const userThunk = (user) => async (dispatch) => {
  const response = await fetch("http://localhost:4000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) return;
  const token = await response.json();
  const { username } = await jwtDecode(token.token);
  localStorage.setItem("token", token.token);
  dispatch(createUserAction({ username, token: token.token }));
};
