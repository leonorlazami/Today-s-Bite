import { useState } from "react";
import { Button } from "../../components/buttons/button";
import { DEFAULT_SIGNUP_STATE, handleSignupClick } from "./signup.utils";
import { useSignUp } from "../../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/input/input";
import { useAuthContext } from "../../hooks/useAuthContext";
import { handleInputChange } from "../../utils";
export const Signup = () => {
  const [signUpUserData, setSignUpUserData] = useState(DEFAULT_SIGNUP_STATE);
  const handleChange = handleInputChange(setSignUpUserData);
  const navigate = useNavigate();
  const { setUserData } = useAuthContext();
  const { mutate: signup } = useSignUp({
    navigate,
    setUserData,
  });
  const { signupEmail, signupName, singupPassword } = signUpUserData;

  return (
    <fieldset>
      <legend>Sign up</legend>
      <Input
        label="Name"
        name="signupName"
        onChange={handleChange}
        value={signupName}
        type="text"
      />
      <Input
        name="signupEmail"
        label="Email"
        onChange={handleChange}
        value={signupEmail}
        type="email"
      />
      <Input
        name="singupPassword"
        label="Password"
        onChange={handleChange}
        value={singupPassword}
        type="password"
      />
      <Button
        label="Sign Up"
        onClickHandler={() => handleSignupClick(signUpUserData, signup)}
      />
    </fieldset>
  );
};
