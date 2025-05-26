import { createContext, useEffect, useState } from "react";
import type { UserInfo } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";
import type { AuthContextType, AuthProviderProps } from "./authStore.types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userData, setUserData] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUserData(firebaseUser);
      } else {
        setUserData(undefined);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
