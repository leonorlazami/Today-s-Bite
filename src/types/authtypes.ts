import type { ReactNode } from "react";

export type AuthContextType = {
  userName: string;
  setUsername: (name: string) => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};
