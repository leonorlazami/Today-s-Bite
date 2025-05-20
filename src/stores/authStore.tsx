import { createContext, useState } from "react";
import type { AuthContextType, AuthProviderProps } from "../types/authtypes";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userName, setUsername] = useState("");

  return (
    <AuthContext.Provider value={{ userName, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};
