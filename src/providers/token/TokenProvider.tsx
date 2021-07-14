import React, { createContext } from "react";
import { UserTokenHook, useToken } from "../../hooks/useToken";

export const TokenContext = createContext({} as UserTokenHook);

export const TokenProvider: React.FC<{}> = ({ children }) => {
  const [token, setToken, resetToken] = useToken();
  return (
    <TokenContext.Provider value={[token, setToken, resetToken]}>
      {children}
    </TokenContext.Provider>
  );
};
