import FormStyle from "../style/formStyle";

const LoginForm = () => {
  return (
    <>
      <FormStyle>
        <h2 className="title">Log In </h2>
        <label htmlFor="username">UserName</label>
        <input type="text" />

        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>Log In</button>
      </FormStyle>
    </>
  );
};

export default LoginForm;
