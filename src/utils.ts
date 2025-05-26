import { signOut, type Auth, type UserInfo } from "firebase/auth";
import type { Dispatch, SetStateAction, ChangeEvent } from "react";
// import { signOut, type Auth, type UserInfo } from "firebase/auth";

/**
 * Generic input change handler for forms.
 *
 * @param setState React setState function for form state
 */
export const handleInputChange =
  <T>(setState: Dispatch<SetStateAction<T>>) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

export type AuthHookParams = {
  navigate: (path: string) => void;
  setUserData: (user: UserInfo) => void;
};

export const handleSignOut = (
  auth: Auth,
  setUserData: React.Dispatch<React.SetStateAction<UserInfo | undefined>>
) => {
  signOut(auth)
    .then(() => {
      setUserData(undefined);
      localStorage.removeItem("displayName");
    })
    .catch((error) => {
      console.error("Sign out error:", error);
    });
};
