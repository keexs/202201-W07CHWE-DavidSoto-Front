import FormStyle from "../style/formStyle";

const SignIn = () => {
  return (
    <>
      <FormStyle autoComplete="off" noValidate>
        <h2 className="title">Sign In </h2>
        <label htmlFor="username">UserName</label>
        <input type="text" />

        <label htmlFor="name">Name</label>
        <input type="text" />

        <label htmlFor="surname">Surname</label>
        <input type="text" />

        <label htmlFor="age">Age</label>
        <input type="number" />

        <label htmlFor="email">Email</label>
        <input type="email" />

        <label htmlFor="password">Password</label>
        <input type="password" />

        <button>Sign In</button>
      </FormStyle>
    </>
  );
};

export default SignIn;
