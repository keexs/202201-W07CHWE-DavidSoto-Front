import { useState } from "react";
import { userThunk } from "../redux/thunk/thunk";
import FormStyle from "../style/formStyle";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const emptyForm = { username: "", password: "" };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(userThunk(formData));
    resetForm();
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const [formData, setFormData] = useState(emptyForm);

  const resetForm = () => {
    setFormData({ username: "", password: "" });
  };

  const isFilled = formData.username !== "" && formData.password !== "";

  return (
    <>
      <FormStyle onSubmit={handleSubmit} autoComplete="off" noValidate>
        <h2 className="title">Log In </h2>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          required
        />

        <label htmlFor="password" name="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={!isFilled}>
          Log In
        </button>
      </FormStyle>
    </>
  );
};

export default LoginForm;
