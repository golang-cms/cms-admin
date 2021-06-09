import React, { useContext, createContext } from "react";
import request, { IRequestFunc } from "./Request";

export const RequestContext = createContext({} as IRequestFunc);

export const useRequest = () => useContext(RequestContext);

export const RequestProvider: React.FC<{}> = ({ children }) => {
  return (
    <RequestContext.Provider value={request}>{children}</RequestContext.Provider>
  );
};