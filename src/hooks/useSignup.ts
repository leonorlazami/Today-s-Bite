import { useMutation } from "@tanstack/react-query";
import { handleSignup } from "../pages/Signup/signup.utils";
import { auth } from "../lib/firebase/firebase";

type SignupInput = {
  name: string;
  email: string;
  password: string;
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (user: SignupInput) => handleSignup(auth, user),
  });
};
