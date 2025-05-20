import type { Dispatch, SetStateAction } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  type Auth,
} from "firebase/auth";

// Type Definitions
export type SignUpStateTypes = {
  name: string;
  email: string;
  password: string;
};


export const DEFAULT_SIGNUP_STATE: SignUpStateTypes = {
  name: "",
  email: "",
  password: "",
};

// Input Field Change Handler
export const handleSignupFieldChange =
  (setUser: Dispatch<SetStateAction<typeof DEFAULT_SIGNUP_STATE>>) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

export const handleSignup = async (
  auth: Auth,
  user: SignUpStateTypes
) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: user.name,
      });
    }

    console.log("User signed up:", userCredentials.user);
    return userCredentials.user;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

export const handleSignupClick = (
  user: SignUpStateTypes,
  signup: (user: SignUpStateTypes) => void
) => signup(user);
