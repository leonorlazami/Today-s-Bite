import { signInWithEmailAndPassword, type Auth } from "firebase/auth";
export type LoginStateType = {
  loginEmail: string;
  loginPassword: string;
};
export const DEFAULT_LOGIN_STATE: LoginStateType = {
  loginEmail: "",
  loginPassword: "",
};

export const handleLogin = async (auth: Auth, user: LoginStateType) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    user.loginEmail,
    user.loginPassword
  );

  const firebaseUser = userCredential.user;
  console.log("fireBaseUser:", firebaseUser);

  return firebaseUser;
};

export const handleLoginClick = (
  user: LoginStateType,
  login: (user: LoginStateType) => void
) => {
  login(user);
};
