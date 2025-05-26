import { useMutation } from "@tanstack/react-query";
import { handleLogin, type LoginStateType } from "../pages/Login/login.utils";
import { auth } from "../lib/firebase/firebase";
import type { AuthHookParams } from "../utils";

export const useLogin = ({ navigate, setUserData }: AuthHookParams) =>
  useMutation({
    mutationFn: async (user: LoginStateType) => {
      const firebaseUser = await handleLogin(auth, user);
      return firebaseUser;
    },
    onSuccess: (user) => {
      setUserData(user);
      if (user.displayName) {
        localStorage.setItem("displayName", user.displayName);
      }
      navigate("/");
    },
    onError: (err) => {
      console.error("Login error:", err);
    },
  });
