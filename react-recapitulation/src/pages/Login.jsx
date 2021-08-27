import React from "react";
import MyButton from "../components/UI/buttons/MyButton";
import MyInput from "../components/UI/inputs/MyInput";
import { AuthContext } from "../context/context";

const Login = () => {
  const { setIsAuth } = React.useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  };
  return (
    <div>
      <h1>Login page</h1>
      <div>
        <form onSubmit={login}>
          <MyInput type="text" placeholder='Enter your Login'/>
          <MyInput type="password" placeholder='Enter your password' />
          <MyButton>Log in</MyButton>
        </form>
        {
           <div style={{marginTop:15}}><i>(Just click Log in button)</i></div>
        }
      </div>
    </div>
  );
};

export default Login;
