import { useContext } from "react";

import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/index";

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("isAuth", isAuth);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Login page</h2>
      <form>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="password" />
        <MyButton
          type="button"
          onClick={() => {
            setIsAuth(true);
          }}
        >
          Log in
        </MyButton>
      </form>
    </div>
  );
}

export default Login;
