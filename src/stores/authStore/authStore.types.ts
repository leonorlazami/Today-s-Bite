import type { UserInfo } from "firebase/auth";
import type { ReactNode } from "react";

export type AuthContextType = {
  userData: UserInfo | undefined;
  setUserData: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
};

export type AuthProviderProps = {
  children: ReactNode;
};
