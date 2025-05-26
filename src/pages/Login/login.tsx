import { useState } from "react";
import { Button } from "../../components/buttons/button";
import { Input } from "../../components/input/input";
import { handleInputChange } from "../../utils";
import { DEFAULT_LOGIN_STATE, handleLoginClick } from "./login.utils";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginUserData, setLoginUserData] = useState(DEFAULT_LOGIN_STATE);
  const handleChange = handleInputChange(setLoginUserData);
  const { loginEmail, loginPassword } = loginUserData;
  const navigate = useNavigate();
  const { setUserData } = useAuthContext();

  const { mutate: login } = useLogin({ navigate, setUserData });
  return (
    <fieldset>
      <legend>Login</legend>
      <Input
        label="Email"
        name="loginEmail"
        type="email"
        value={loginEmail}
        onChange={handleChange}
      />
      <Input
        label="Password"
        name="loginPassword"
        type="password"
        value={loginPassword}
        onChange={handleChange}
      />
      <Button
        label="Log in"
        name="logInBtn"
        onClickHandler={() => handleLoginClick(loginUserData, login)}
      />
    </fieldset>
  );
};
