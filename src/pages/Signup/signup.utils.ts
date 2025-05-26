import {
  createUserWithEmailAndPassword,
  updateProfile,
  type Auth,
} from "firebase/auth";

export type SignUpStateTypes = {
  signupName: string;
  signupEmail: string;
  singupPassword: string;
};

export const DEFAULT_SIGNUP_STATE: SignUpStateTypes = {
  signupName: "",
  signupEmail: "",
  singupPassword: "",
};

export const handleSignup = async (auth: Auth, user: SignUpStateTypes) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    user.signupEmail,
    user.singupPassword
  );

  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      displayName: user.signupName,
    });
  }
  return userCredential.user;
};

export const handleSignupClick = (
  user: SignUpStateTypes,
  signup: (user: SignUpStateTypes) => void
) => signup(user);
