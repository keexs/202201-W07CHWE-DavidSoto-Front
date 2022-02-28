import FormStyle from "../style/formStyle";

const SignIn = () => {
  return (
    <>
      <FormStyle>
        <h2 className="title">Sign In </h2>
        <label htmlFor="">UserName</label>
        <input type="text" />

        <label htmlFor="">Name</label>
        <input type="text" />

        <label htmlFor="">Surname</label>
        <input type="text" />

        <label htmlFor="">Age</label>
        <input type="number" />

        <label htmlFor="">Email</label>
        <input type="text" />

        <label htmlFor="">Password</label>
        <input type="text" />

        <button>Sign In</button>
      </FormStyle>
    </>
  );
};

export default SignIn;
