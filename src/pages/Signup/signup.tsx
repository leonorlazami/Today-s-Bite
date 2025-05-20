import { useState } from "react";
import { Button } from "../../components/buttons/button";
import { auth } from "../../lib/firebase/firebase";
import {
  DEFAULT_SIGNUP_STATE,
  handleSignup,
  handleSignupFieldChange,
} from "./signup.utils";
export const Signup = () => {
  const [user, setUser] = useState(DEFAULT_SIGNUP_STATE);
  const handleChange = handleSignupFieldChange(setUser);

  const onSignupClick = async () => {
    try {
      await handleSignup(auth, user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <fieldset>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={user.name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={handleChange}
      />

      <Button label="Sign Up" onClickHandler={onSignupClick} />
    </fieldset>
  );
};
