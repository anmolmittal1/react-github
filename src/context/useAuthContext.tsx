import { createContext, useContext } from "react";

import { useAuth } from "@features/authentication/hooks";

interface AuthProviderProps {
  children: React.ReactElement;
}

const AuthContext = createContext<ReturnType<typeof useAuth>>(
  {} as unknown as ReturnType<typeof useAuth>
);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { token, login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
