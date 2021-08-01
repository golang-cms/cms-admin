import { createContext, useState } from "react";

type ToggleHook = [boolean, (open: boolean) => void];
export const ToggleContext = createContext<ToggleHook>({} as ToggleHook);

export const ToggleProvider: React.FC<{}> = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <ToggleContext.Provider value={[toggle, setToggle]}>
      {children}
    </ToggleContext.Provider>
  );
};
