import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

function Login() {
  return (
    <div style={{ marginTop: 20 }}>
      <h2>Login page</h2>
      <form>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="password" />
        <MyButton type="button">Log in</MyButton>
      </form>
    </div>
  );
}

export default Login;
